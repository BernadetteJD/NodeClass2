var monthNumber = 12; //between 1 - 12
var monthName = null;
var monthDays = null;

switch (monthNumber) {
    case 1 :
        monthName = 'January';
        monthDays = '31 days';
        break;
    case 2 :
        monthName = 'Febraury';
        monthDays = '28 days in a commom year and 29 days in leap year';
        break;
    case 3 :
        monthName = 'March';
        monthDays = '31 days';
        break;
    case 4 : 
        monthName = 'April';
        monthDays = '30 days';
        break;
    case 5 :    
        monthName = 'May';
        monthDays = '31 days';
        break;
    case 6 :
        monthName = 'June';
        monthDays = '30 days';
        break;
    case 7 :
        monthName = 'July';
        monthDays = '31 days';
        break;
    case 8 :
        monthName = 'August';
        monthDays = '31 days';
        break;
    case 9 :
        monthName = 'September';
        monthDays = '30 days';
        break;
    case 10 :
        monthName = 'October';
        monthDays = '31 days';
        break;
    case 11 :
        monthName = 'November';
        monthDays = '30 days';
        break;
    case 12 :
        monthName = 'December';
        monthDays = '31 days';
        break;
        default :
}

var message = (monthNumber == null || monthNumber > 12) ? `${monthNumber} is not a valid input. Please select from 1 - 12.` : `${monthName} is the selected month and has ${monthDays}`;

console.log(message);

/*If monthName & monthDays are null then show an error message
Else show the following message: %monthName% is the selected month and has %monthDays%
Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value*/
