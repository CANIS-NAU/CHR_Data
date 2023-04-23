  // --------------------------------------------------------------------------------
  // FUNCTION TO GENERATE DEPENDENT DROPDOWN FOR PCC CATEGORIES
  // --------------------------------------------------------------------------------

function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var activeCell = e.source.getActiveCell();
  
  if (sheet.getName() == "Main" && activeCell.getColumn() == 5) {
    var pccCategory = activeCell.getValue();
    var serviceProviderCell = activeCell.offset(0, 1);
    
    var serviceProviderValues;
    switch (pccCategory) {
      case "Medical":
        serviceProviderValues = ["General Physician", "Ophthalmologist",	"Pediatrician",	"Obstetrician",	"Gynecologist",	"Psychiatrist",	"Other"];
        break;
      case "Nursing":
        serviceProviderValues = ["Includes Registered Nurse (RN)",	"Licensed Practical Nurse(LPN)",	"Licensed Vocational Nurse (LVN)",	"Nurse Practitioner (NP)",	"Clinical Nurse Specialist(CNS)",	"Public Health Nurse (PHN)",	"Other type of nursing personnel"];
        break;
      case "Dental":
        serviceProviderValues = ["Dentist", "Orthodontist", "Dental Hygienist", "Dental health professional", "Other"];
        break;
      case "Eye":
        serviceProviderValues = ["Optometrist", "Optician", "Other"];
        break;
      case "Social Work":
        serviceProviderValues = ["Professional member of social service", "Other agency providing social services"];
        break;
      case "Behavioral Health":
        serviceProviderValues = ["Substance Abuse Counselor", "Psychologist", "Other professional specializing in Behavioral Health services"];
        break;
      case "Other Professional":
        serviceProviderValues = ["Podiatrist", "Homoeopathist", "Chiropractor", "Traditional Healer", "Pharmacist", "Physical Therapist", "Sanitarian", "Other professional category not covered elsewhere"];
        break;
      case "Technician":
        serviceProviderValues = ["X Ray Technician", "Lab Tech", "Other"];
        break;
      case "Transportation":
        serviceProviderValues = ["Non-emergency medical transportation", "Other"];
        break;
      case "Housing and Environmental Services":
        serviceProviderValues = ["Housing (e.g. rental, ownership, safety/disability improvement)", "Utility Assistance (e.g. LIHEAP)", "Household needs (e.g. firewood, household items or clothing)", "Environmental protection (e.g. animal clinics, RMSF, sanitation)", "Other"];
        break;
      case "Adult Health":
        serviceProviderValues = ["Senior Services (e.g. social, Alzheimer's, protection)", "DME (Durable Medical Equipment)", "Special Diabetes Program (SDPI)", "Cancer Services", "Healthy Heart Program", "Wellness/Fitness Center", "COVID support (including long COVID)", "Other"];
        break;
      case "Maternal and Child_Health":
        serviceProviderValues = ["Early Childhood (e.g.Family Spirit, Head Start, Healthy Start, First Things First)", "WIC (Women, Infants & Children)", "Child Protection", "Other"];
        break;
      case "Benefit and FinancialSupport":
        serviceProviderValues = ["Employment Assistance (e.g. unemployment, training, vocational rehabilitation)", "Food or Nutrition Assistance (e.g. SNAP, WIC, FDPIR, food bank)", "Cash Assistance (e.g. TANF, TPEP, other)", "Health insurance enrollment (e.g. AHCCCS, ALTCS)", "Disability services", "Legal services", "Other"];
        break;
      case "Family Self Community":
        serviceProviderValues = ["Walk-in cases", "Community or family member's suggestion", "Other"];
        break;
      case "CHR":
        serviceProviderValues = ["From your own CHR program", "From another CHR program", "Other"];
        break;
      case "Other":
        serviceProviderValues = ["Other"];
        break;
      default:
        serviceProviderValues = [];
        break;
    }
    
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(serviceProviderValues).build();
    serviceProviderCell.setDataValidation(rule);
  }

  // --------------------------------------------------------------------------------
  // FUNCTION TO AUTO GENERATE TODAY'S DATE IF CLIENT ID IS ENTERED
  // --------------------------------------------------------------------------------


  // get the column number for "Client ID"
  var clientIdColumn = 3;
  
  // get the column number for "Date of Referral"
  var referralDateColumn = 4;
  
  // get the row number
  var row = e.range.getRow();
  
  // get the edited column
  var column = e.range.getColumn();
  
  // check if the edited column is "Client ID"
  if (column == clientIdColumn) {
    // get the current date in MST
    var date = new Date();
    
    // set the date in the "Date of Referral" column for the same row
    sheet.getRange(row, referralDateColumn).setValue(date);
  }

  // --------------------------------------------------------------------------------
  // FUNCTION TO SELECT MULTIPLE DROPDOWN SELECTIONS
  // --------------------------------------------------------------------------------

  var range = e.range;
  var column = range.getColumn();
  var row = range.getRow();
  var selectedServices = [];
  var sheet = range.getSheet();

  // only update the column 7 if a value is selected in column 6
  if (column == 6) {
  var currentService = range.getValue();
  var existingServices = sheet.getRange(row, 7).getValue();

  // check if the current service is already in the existing services
if (existingServices.indexOf(currentService) == -1) {
  // only add comma if the existing services is not empty
  if (existingServices) {
    selectedServices.push(existingServices, ', ', currentService);
  } else {
    selectedServices.push(currentService);
  }

  // update column 7 with the selected services
  sheet.getRange(row, 7).setValue(selectedServices.join(""));
}
}

}



