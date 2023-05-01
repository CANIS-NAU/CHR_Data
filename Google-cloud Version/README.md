## CHR Referral Tracking System - Google Drive Database System (Cloud Version)
##### The CHR Referral Tracking System is a robust and efficient tool designed specifically for Community Health Representatives (CHRs) from various tribes. It is hosted on Google Drive, utilizing Google Sheets and folders to create a comprehensive and organized system for tracking referrals made by CHRs to their clients.

#### System Requirements:
##### To use the CHR Referral Tracking System - Google Drive Database System, you will need the following:
1. A Google account with access to Google Drive and Google Sheets.
2. Basic knowledge of Google Sheets and Google Drive functionalities.

#### How to Download Code and Install:
##### The CHR Referral Tracking System is a cloud-based system, which means there is no need to download or install any code. You can access the system directly through Google Drive using the provided folder structure and Google Sheets.

#### What is Apps Script and How It Works:
##### Apps Script is a powerful scripting language developed by Google that allows users to extend the functionality of Google Workspace (formerly G Suite) applications, including Google Sheets. In the CHR Referral Tracking System, Apps Script is used to automate certain functionalities, such as sending email reminders to CHRs and updating data automatically based on client information.

#### Functionalities:
##### The CHR Referral Tracking System offers a range of functionalities to streamline the referral tracking process for CHRs:

1. CHR Referral Data Folder: This folder serves as the main repository for all referral-related data. It contains two Google Sheets:

* Master Referral Spreadsheet: This sheet consolidates data from each CHR's data sheet, providing a combined view of all referrals made by CHRs. It includes information such as the client's name, referral date, primary care category (PCC), and other relevant details.
* Monthly Reporting Spreadsheet: This sheet includes the secretary's data, combined values of each CHR, and charts demonstrating reporting for each CHR's referrals to their tribe. Email notifications of the charts can be sent by clicking on the Mail Icon on top of the chart.

2. CHR Folders: This folder contains individual folders for each CHR and a Google Sheet named "CHR Contact Information":

* CHR Contact Information: This Google Sheet contains contact information for all CHRs, including names, phone numbers, email addresses, and addresses. It serves as a central repository of CHR contact details, making it easy for the system users to communicate and collaborate efficiently.

3. Individual CHR Folders: Each CHR folder contains the following Google Sheets:

* CHR Referrals: This sheet records the referrals made by the CHR for a particular Primary Care Category (PCC) for each of their clients. The system automatically sends an email reminder to the CHR's email address if the "Result of follow-up" field remains empty 3 or 5 days after the "Date of Referral". Additionally, when a CHR enters a Client ID, the CHR's name, email, and date of referral are automatically updated. This feature helps to streamline the referral tracking process and ensures timely follow-up.
* Clients Contact Information: This sheet contains contact information for all clients associated with that particular CHR. It includes details such as the client's name, contact information, and relevant notes.

##### The CHR Referral Tracking System is designed to provide an efficient and user-friendly platform for CHRs to track and manage referrals made to their clients. It leverages the power of Google Sheets and Apps Script to automate tasks, centralize data, and streamline communication among CHRs. The system is HIPAA compliant, ensuring the privacy and security of sensitive client information.

#### Installation:
##### To install and use the CHR Referral Tracking System, follow the steps below:

- Step 1: Clone or Download the Repository
Go to the GitHub repository of the CHR Referral Tracking System: https://github.com/yourusername/chr-referral-tracking-system (replace "yourusername" with your actual GitHub username).
Clone the repository to your local machine using Git, or click on the "Download" button to download it as a ZIP file.
- Step 2: Set up Google Drive and Sheets
Log in to your Google account and navigate to Google Drive.
Create a new folder named "CHR Referral Data" in Google Drive.
Inside the "CHR Referral Data" folder, create two Google Sheets named "Master Referral" and "Monthly Reporting Spreadsheet". Set up the columns and formatting according to your requirements.
Create another folder inside the "CHR Referral Data" folder named "CHR Folders".
- Step 3: Set up Apps Script
Open the "Master Referral" sheet and go to "Extensions" > "Apps Script" to open the Apps Script editor.
In the Apps Script editor, go to "File" > "New" > "Script file" to create a new Apps Script file. Name it "autoemails.gs".
Copy and paste the code from the "autoemails.gs" file from the cloned/downloaded repository into the "MasterReferralScript" Apps Script file.
Similarly do the same for the other two app script codes as well. One being "dropdown.gs" for the PCC dependent dropdowns, and "sendEmailWithChart.gs" that exports the charts obtained in Monthly Reporting Spreadsheet.
Save and close the Apps Script editor.
- Step 4: Customize Settings
Open the "Master Referral" sheet and go to "Extensions" > "Apps Script" to open the Apps Script editor.
In the Apps Script editor, go to "Edit" > "Current project's triggers" to set up triggers for the script.
Set up triggers for the following functions:
sendEmailReminder: To send email reminders to CHRs for follow-up.
updateClientInfo: To automatically update CHR's name, email, and referral date based on the Client ID.
Save the triggers and close the Apps Script editor.
- Step 5: Set up CHR Folders and Sheets
Inside the "CHR Folders" folder, create individual folders for each CHR, and name them accordingly.
Inside each CHR folder, create Google Sheets named "CHR Referrals" and "Clients Contact Information". Set up the columns and formatting according to your requirements.
- Step 6: Update CHR Contact Information
Open the "CHR Contact Information" sheet in the "CHR Folders" folder.
Update the sheet with the contact information of all CHRs, including names, phone numbers, email addresses, and addresses.
- Step 7: Start Using the CHR Referral Tracking System
Access the "Master Referral" sheet to start entering referrals made by CHRs. The "Monthly Reporting Spreadsheet" will automatically update with combined values and charts.
CHRs can access their respective folders and update the "CHR Referrals" sheet with their referrals. The "Clients Contact Information" sheet can be used to maintain client contact details.
The Apps Script triggers will automatically send email reminders to CHRs for follow-up and update CHR information based on the Client ID.
##### That's it! You have successfully installed and set up the CHR Referral Tracking System on Google Drive. You can now start using it to efficiently track and manage referrals made by CHRs to their clients.

#### Video Tutorial:

https://user-images.githubusercontent.com/78487533/235542903-673c49aa-cfe6-4d16-97fe-ad2bd4915460.mp4
