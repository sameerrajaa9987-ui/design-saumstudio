/**
 * Saum Studio — Lead form → Google Sheet + email notification
 * ---------------------------------------------------------------
 * Paste this into the Apps Script editor of your Google Sheet
 * (Extensions → Apps Script), then Deploy as a Web App.
 * Full step-by-step setup is in README.md ("Google Sheet setup").
 */

// Leads are also emailed here (set to '' to turn email off).
var NOTIFY_EMAIL = 'design@saumstudio.com';

// Column order written to the sheet. The first row is created automatically.
var HEADERS = ['Timestamp', 'Name', 'Phone', 'Home type', 'Locality', 'Source', 'Page'];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write a header row once, on an empty sheet.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var now = new Date();
    sheet.appendRow([
      now,
      data.name || '',
      "'" + (data.phone || ''),   // leading ' keeps the phone number as text (no rounding)
      data.bhk || '',
      data.area || '',
      data.source || '',
      data.page || ''
    ]);

    // Email notification so leads are seen instantly.
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'New lead — ' + (data.name || 'Website') + ' (' + (data.bhk || '') + ')',
        body:
          'New consultation request from the website:\n\n' +
          'Name: ' + (data.name || '-') + '\n' +
          'Phone: ' + (data.phone || '-') + '\n' +
          'Home type: ' + (data.bhk || '-') + '\n' +
          'Locality: ' + (data.area || '-') + '\n' +
          'Source: ' + (data.source || '-') + '\n' +
          'Page: ' + (data.page || '-') + '\n' +
          'Time: ' + now
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Saum Studio lead endpoint is running.');
}
