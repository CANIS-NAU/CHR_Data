function sendReminderEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();

  for (var i = 2; i <= lastRow; i++) {
  var chrEmail = sheet.getRange("B" + i).getValue();
  var clientId = sheet.getRange("C" + i).getValue();
  var reminderDate = new Date(sheet.getRange("D" + i).getValue());
  var result = sheet.getRange("J" + i).getValue();
  var twoDaysLater = new Date(reminderDate.getTime() + 2 * 24 * 60 * 60 * 1000);
  var fiveDaysLater = new Date(reminderDate.getTime() + 5 * 24 * 60 * 60 * 1000);
  var tenDaysLater = new Date(reminderDate.getTime() + 10 * 24 * 60 * 60 * 1000);
  var today = new Date();
  var form_link = "https://forms.gle/mBLmutZ5XPaqZvuk7"

  if (clientId) {
  if (twoDaysLater <= today && result == "") {
      var subject = "Reminder: Follow Up on Referral (2-Day Reminder)";
      var message = "This is a reminder to follow up on the referral made on " + reminderDate + 
                    " for the client with Client ID " + sheet.getRange("C" + i).getValue() + ".";
      MailApp.sendEmail(chrEmail, subject, message);
    } else if (fiveDaysLater <= today && result == "") {
      var subject = "Reminder: Follow Up on Referral (5-Day Reminder)";
      var message = "This is a reminder to follow up on the referral made on " + reminderDate + 
                    " for the client with Client ID " + sheet.getRange("C" + i).getValue() + ".";
      MailApp.sendEmail(chrEmail, subject, message);
    } else if (tenDaysLater <= today && result == "") {
      var subject = "Reminder: Follow Up on Referral (10-Day Reminder)";
      var message = "This is a reminder to follow up on the referral made on " + reminderDate + 
                    " for the client with Client ID " + sheet.getRange("C" + i).getValue() + ".";
      MailApp.sendEmail(chrEmail, subject, message);
    }
  }
  }
}
