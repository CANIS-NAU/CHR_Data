Attribute VB_Name = "Module1"
Sub SendReminderEmails()
    
    Dim OutApp As Object
    Dim OutMail As Object
    Dim chrEmail As String
    Dim referralDate As Date
    Dim followUpDate As Date
    Dim currentDate As Date
    Dim diffDays As Integer
    Dim resultOfFollowUp As String
    Dim i As Long
    
    On Error Resume Next ' Enable error handling
    
    Set OutApp = CreateObject("Outlook.Application")
    
    For i = 2 To ActiveSheet.UsedRange.Rows.Count
    
        ' Get the values of the necessary columns
        chrEmail = Cells(i, "B").Value
        referralDate = Cells(i, "D").Value
        resultOfFollowUp = Cells(i, "K").Value
        
        ' Check if the follow-up is still pending and the referral date is not blank
        If resultOfFollowUp = "" And referralDate <> "" Then
        
            ' Calculate the number of days between the referral date and today's date
            currentDate = Date
            diffDays = dateDiff("d", referralDate, currentDate)
            
            ' Send reminder emails based on the number of days
            If diffDays = 2 Or diffDays = 5 Then
            
                Set OutMail = OutApp.CreateItem(0)
                With OutMail
                    .To = chrEmail
                    .Subject = "Reminder for Follow-Up"
                    .Body = "This is a reminder to follow up on the referral that was made on " & referralDate & ". Please update the result of follow-up in the 'Result of Follow-Up' column of the 'CHR Data' sheet."
                    .Send
                End With
                Set OutMail = Nothing
                
            End If
            
        End If
        
    Next i
    
    Set OutApp = Nothing
    
    On Error GoTo 0 ' Disable error handling
    
End Sub

