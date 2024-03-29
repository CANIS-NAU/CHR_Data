## Excel-VBA Referral Tracking System (Non-Cloud Version)
##### The VBA Referral Tracking System is an Excel workbook (VBA- Referrals-macro.xlsm) that uses Visual Basic for Applications (VBA) code to automate the tracking of CHR (Community Health Representative) referral data. The system includes a reminder email script (reminder-email-script.bas) that sends automatic email reminders to CHRs if the "Result of follow-up" field is still empty after a certain number of days.

#### System Requirements:
- Microsoft Excel (2010 or later) installed on your computer.
- Macros must be enabled in Excel to run the VBA code.

#### How to Download Code and Install:
1. Download the VBA Referral Tracking System from the GitHub repository: https://github.com/yourusername/vba-referral-tracking-system (replace "yourusername" with your actual GitHub username).
2. Click on the "Code" button and then click "Download ZIP" to download the repository as a ZIP file.
3. Extract the ZIP file to a folder on your local machine.
4. Open the "VBA- Referrals-macro.xlsm" workbook in Microsoft Excel.

#### What is VBA and How It Works:
##### VBA stands for Visual Basic for Applications, and it is a programming language that allows you to create macros and automate tasks in Microsoft Office applications, including Excel. In the VBA Referral Tracking System, the VBA code is used to automate the tracking of referrals made by CHRs, send email reminders, and update data in the workbook.

#### Functionalities:
##### The VBA Referral Tracking System provides the following functionalities:

1. Automated tracking of CHR referral data in the "CHR Referral" sheet.
2. Automatic updating of the "CHR Referral" with combined values and charts.
3. Received by: drop down list of all program staff
4. In/Out: drop down options for incoming (IN) or outgoing (out) referral type
5. Patent Needs/Service Request Type: drop down list with common referral/service categories, you can select multiple service request types and
each new service request will be entered in a new line separated by a comma.
6. Assign to: drop down list of all program staff
7. CHR Email: auto-populates email address to assigned CHR chosen in previous field
8. Reminder frequency: drop down option for daily, weekly, bi-weekly or monthly, chosen based on referral type/urgency
9. Department: drop down list of all the departments provided by the program
10. Results: undefined field for CHR comments and notes on referral results
11. Complete: drop down option for closed or open. When this field is set to open, the CHR selected in the "Assign to" field will receive an email
reminder at the frequency determined by the "Reminder Frequency" field selection. Once the referral is complete and this field is set to
closed, the CHR will no longer receive email reminders.
12. Referral Closed Date: auto-populates the current date when the “Complete” column is set to “Closed”

#### How to Run the Code:
1. Open the "VBA- Referrals-macro.xlsm" workbook in Microsoft Excel.
2. Make sure macros are enabled in Excel.
3. Follow the instructions in the workbook to enter and update referral data.
4. The reminder email script (reminder-email-script.bas) will run automatically based on the specified criteria for sending reminders.
5. You can also manually run the VBA code by going to "Developer" > "Macros" in Excel, selecting the macro you want to run, and clicking "Run"

##### That's it! You can now use the VBA Referral Tracking System to automate the tracking of CHR referral data in Excel. Please note that VBA macros can potentially contain security risks, so make sure to enable macros only from trusted sources and take necessary precautions to protect your data.

#### Video Tutorial:

https://github.com/CANIS-NAU/CHR_Data/assets/78487533/a593823e-a61e-49e9-83af-2fe46d4f1ffc


