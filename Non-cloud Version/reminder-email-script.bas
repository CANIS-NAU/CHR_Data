Sub SendReminderEmails()
    Dim OutApp As Object
    Dim OutMail As Object
    Dim i As Long

    Dim chrEmail As String
    Dim completeStatus As String
    Dim recordID As String
    Dim doneVal As String
    Dim reminderFrequency As String
    Dim emailBody As String
    Dim dateOfEntry As Date
    Dim today As Date
    Dim daysDifference As Integer

    On Error Resume Next ' Enable error handling

    Set OutApp = CreateObject("Outlook.Application")
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Main") ' Change to your sheet name

    For i = 3 To ws.UsedRange.Rows.Count

        ' Get the values for each row
        chrEmail = ws.Cells(i, "L").Value
        completeStatus = ws.Cells(i, "S").Value
        recordID = ws.Cells(i, "A").Value
        doneVal = ws.Cells(i, "U").Value
        reminderFrequency = ws.Cells(i, "M").Value ' Assuming "REMINDER FREQUENCY" is in column M

        ' Check if the "Complete" status is "Open" and the email is not blank
        If completeStatus = "Open" And chrEmail <> "" Then
            ' Create the email body with values from specified columns
            emailBody = "SL.NO: " & recordID & vbCrLf & _
                        "DATE OF ENTRY: " & ws.Cells(i, "B").Value & vbCrLf & _
                        "RECEIVED BY: " & ws.Cells(i, "C").Value & vbCrLf & _
                        "PATIENT NAME: " & ws.Cells(i, "D").Value & vbCrLf & _
                        "DATE OF BIRTH: " & ws.Cells(i, "E").Value & vbCrLf & _
                        "IN/OUT: " & ws.Cells(i, "F").Value & vbCrLf & _
                        "DEPARTMENT: " & ws.Cells(i, "G").Value & vbCrLf & _
                        "CONTACT NAME: " & ws.Cells(i, "H").Value & vbCrLf & _
                        "CONTACT NUMBER: " & ws.Cells(i, "I").Value & vbCrLf & _
                        "PATIENT NEEDS/SERVICE REQUEST TYPE: " & ws.Cells(i, "J").Value

            ' Calculate the next reminder date based on "REMINDER FREQUENCY"
            dateOfEntry = ws.Cells(i, "B").Value ' Assuming "DATE OF ENTRY" is in column B
            today = Date

            ' Check if it's time for a reminder based on the selected frequency
            Select Case reminderFrequency
                Case "Daily"
                    daysDifference = DateDiff("d", dateOfEntry, today)
                    If daysDifference Mod 1 = 0 Then ' Check if it's a multiple of 1 day
                        ' Send the reminder email
                        Set OutMail = OutApp.CreateItem(0)
                        With OutMail
                            .To = chrEmail
                            .Subject = "Service Request Reminder (Daily)"
                            .Body = emailBody
                            .Send ' Change to .Display to preview before sending
                        End With
                    End If
                Case "Weekly"
                    daysDifference = DateDiff("d", dateOfEntry, today)
                    If daysDifference Mod 7 = 0 Then ' Check if it's a multiple of 7 days
                        ' Send the reminder email
                        Set OutMail = OutApp.CreateItem(0)
                        With OutMail
                            .To = chrEmail
                            .Subject = "Service Request Reminder (Weekly)"
                            .Body = emailBody
                            .Send ' Change to .Display to preview before sending
                        End With
                    End If
                Case "Bi-Weekly"
                    daysDifference = DateDiff("d", dateOfEntry, today)
                    If daysDifference Mod 14 = 0 Then ' Check if it's a multiple of 14 days
                        ' Send the reminder email
                        Set OutMail = OutApp.CreateItem(0)
                        With OutMail
                            .To = chrEmail
                            .Subject = "Service Request Reminder (Bi-Weekly)"
                            .Body = emailBody
                            .Send ' Change to .Display to preview before sending
                        End With
                    End If
                Case "Monthly"
                    daysDifference = DateDiff("d", dateOfEntry, today)
                    If daysDifference Mod 30 = 0 Then ' Check if it's a multiple of 30 days
                        ' Send the reminder email
                        Set OutMail = OutApp.CreateItem(0)
                        With OutMail
                            .To = chrEmail
                            .Subject = "Service Request Reminder (Monthly)"
                            .Body = emailBody
                            .Send ' Change to .Display to preview before sending
                        End With
                    End If
            End Select
        End If
    Next i

    Set OutApp = Nothing
    On Error GoTo 0 ' Disable error handling
End Sub


---------
Private Sub Worksheet_Change(ByVal Target As Range)
    Dim Oldvalue As String
    Dim Newvalue As String
    Dim rng As Range

    Application.EnableEvents = True
    On Error GoTo Exitsub

    ' Check if the changed cell is in column J and is not empty
    If Not Intersect(Target, Me.Range("J3:J" & Me.Rows.Count)) Is Nothing And Target.Value <> "" Then
        ' Check if the cell has data validation
        If Target.SpecialCells(xlCellTypeAllValidation) Is Nothing Then
            GoTo Exitsub
        Else
            Application.EnableEvents = False
            Newvalue = Target.Value
            Application.Undo
            Oldvalue = Target.Value

            If Oldvalue = "" Then
                Target.Value = Newvalue
            Else
                If InStr(1, Oldvalue, Newvalue) = 0 Then
                    Target.Value = Oldvalue & ", " & vbNewLine & Newvalue
                Else
                    Target.Value = Oldvalue
                End If
            End If
        End If
    End If

    ' Check if the changed cell is in column S
    Set rng = Intersect(Target, Me.Range("S3:S" & Me.Rows.Count))
    If Not rng Is Nothing Then
        For Each cell In rng
            If cell.Value = "Closed" Then
                If cell.Offset(0, 1).Value = "" Then
                    cell.Offset(0, 1).Value = Now()
                End If
            Else
                cell.Offset(0, 1).Value = ""
            End If
        Next cell
    End If

Exitsub:
    Application.EnableEvents = True
End Sub

