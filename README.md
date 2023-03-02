# CHR Data Follow-Up Reminder

#### A data entry and follow-up system for community health resources. 
#### The CHR Data Follow-Up Reminder is a VBA script that can be added to an Excel file to send reminder emails to specified email addresses about pending follow-ups for referrals. The script checks the referral date and the result of the follow-up and sends reminder emails to the specified email addresses based on the number of days since the referral date.

## Requirements
#### To use this script, you need the following:

#### Microsoft Excel (2010 or later)
#### Microsoft Outlook (2010 or later)

## Installation
#### To install the script, follow these steps:

#### Open your Excel file.
#### Press ALT+F11 to open the Visual Basic Editor.
#### In the Project Explorer, right-click on the name of your Excel file and select "Insert" > "Module".
#### Copy the contents of the "reminder-email-script.bas" file and paste them into the new module.
#### Save the Excel file as a macro-enabled workbook with the extension ".xlsm".
#### Close the Visual Basic Editor.

## Usage
#### To use the script, follow these steps:

#### Open your Excel file with the script installed.
#### Enter the necessary data in the "CHR Data" sheet, including the email addresses to send the reminders to.
#### Whenever a change is made to the referral date or the result of the follow-up, the script will automatically send reminder emails to the specified email addresses based on the number of days since the referral date.

## Customization
#### You can customize the script by changing the number of days for the reminder emails. To do this, change the values of diffDays in the code to the desired number of days.
#### You can also customize the email message by changing the text in the Body property of the OutMail object.
