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

#### Video Tutorial:
