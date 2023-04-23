function sendEmailWithChart() {
  var recipient = "sb3292@nau.edu"; // Replace with the email address of the recipient
  var subject = "Referral Tracking - PCC Category"; // Replace with the subject of the email
  var body = "Attached to this email, you will find a chart summarizing the referral tracking data for the PCC category. The chart provides insights into the number of referrals made, the types of services provided, and the status of each referral. It's a visual representation of the progress and impact of our efforts in ensuring timely and quality care for our patients. \n Link to image: https://docs.google.com/spreadsheets/d/e/2PACX-1vSq11nSiH_6S_SZ8P8IjpruIsKMqRRKzgdhuEN4bQ8Y9ANAZTQHc0HVQ6uwYb8O1YO-KZqfs_M20fhx/pubchart?oid=2060499154&format=interactive"; // Replace with the body of the email
  
  // Get the chart from the sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var chart = sheet.getCharts()[0]; // Assumes the chart is the first chart in the sheet

  // Get the chart image as a blob
  var imageData = chart.getAs('image/jpeg'); // Change 'image/png' to 'image/jpeg'

  // Convert the blob to a Base64-encoded string
  var encodedImage = Utilities.base64Encode(imageData.getBytes());

  // Attach the chart image to the email
  var attachments = [{fileName: "chart.jpg", content: encodedImage, mimeType: "image/jpeg"}]; // Change fileName to "chart.jpg" and mimeType to "image/jpeg"

  // Send the email with the chart image as an attachment
  MailApp.sendEmail(recipient, subject, body, {attachments: attachments});
}
