// The code challenge here
//The function bellow out The grade of the student when we cote the last one; 
const studentGrade = () =>  {
    let student = prompt("Enter the grade of the student");
    switch(student) {
        case "A" :
            console.log("Your grade is 79" );
        break;
        case "B":
            console.log("Your grade is between 60 to 79");
        break;
        case "C":
            console.log("Your grade is between 49 to 59");
        break;
        case "D":
            console.log("Your grade is between 40 to 49");
        break;
        case "E":
            console.log("Your grade is less to 40");
        break;
        default :
            console.log("You're faild");
    }
}
/**This function take the speed of a car and print something to the console when the is less to 70 it should return
 * "Ok", if the speed is  
 * **/
function speedCar() {
    let speed = Number(prompt("Entrer the speed of the car"));
    if(speed <= 70){
        console.log("Ok");

    }else if (speed > 70) {
        console.log("Points: " +((speed - 70)/5));
    }

    if(((speed -70)/5) > 12){
        console.log("Licence Suspended");
    }
}
/**
 * This function make whose major task is to calculate an individual’s Net Salary by getting the inputs 
 * of basic salary and benefits 
*/
function salaryCalculator() {
    // let KRA = ;
    // let nssfPassionate = ;
    let nhifAmount = Number([prompt("Entrer the Gross paye here")]);
    let salary = 0;

    const totalPay = () => {
        let total = 0;
        let benefits = 0;
        if (salary !== null && benefits !== null) {
            if (salary >= 0 && benefits >= 0) {
                total += salary + benefits;
            }
        }

        return total;
    };
    
    const nhifDeduction = () => {
        let salary = totalPay();
        // let nhifAmount = 0;

        if (salary >= 1000) {
            if (salary >= 1000 && salary <= 5999) {
                nhifAmount += 150;
            } else if (salary >= 6000 && salary <= 7999) {
                nhifAmount += 300;
            } else if (salary >= 8000 && salary <= 11999) {
                nhifAmount += 400;
            } else if (salary >= 12000 && salary <= 14999) {
                nhifAmount += 500;
            } else if (salary >= 15000 && salary <= 19999) {
                nhifAmount += 600;
            } else if (salary >= 20000 && salary <= 24999) {
                nhifAmount += 750;
            } else if (salary >= 25000 && salary <= 29999) {
                nhifAmount += 850;
            } else if (salary >= 30000 && salary <= 34999) {
                nhifAmount += 900;
            } else if (salary >= 35000 && salary <= 39999) {
                nhifAmount += 950;
            } else if (salary >= 40000 && salary <= 44999) {
                nhifAmount += 1000;
            } else if (salary >= 45000 && salary <= 49999) {
                nhifAmount += 1100;
            } else if (salary >= 50000 && salary <= 59999) {
                nhifAmount += 1200;
            } else if (salary >= 60000 && salary <= 69999) {
                nhifAmount += 1300;
            } else if (salary >= 70000 && salary <= 79999) {
                nhifAmount += 1400;
            } else if (salary >= 80000 && salary <= 89999) {
                nhifAmount += 1500;
            } else if (salary >= 90000 && salary <= 99999) {
                nhifAmount += 1600;
            } else if (salary >= 100000) {
                nhifAmount += 1700;
            }
        } else {
            nhifAmount += 0;
        }

        return nhifAmount;
    };
    // console.log(nhifDeduction());
}

studentGrade();
speedCar()
salaryCalculator();

