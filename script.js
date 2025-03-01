
// let input = document.querySelector("#ipt");
// let btn = document.querySelector("#btn");
// let age = document.querySelector("#age")

//  btn.addEventListener("click",(e)=>{
//     let dob =input.value.substring(0,4);
//     // console.log(dob);
//     let curYear = new Date();  //convert a date to a date string toDateSring() --- Sat Mar 01 2025
//     let  year=curYear.getFullYear();
//     let ageOfPerson = year-Number(dob);
//     // console.log(ageOfPerson);
    
//     age.innerText =`Your age is ${ageOfPerson} years old`;


//  });

const input = document.querySelector("#ipt");
const btn = document.querySelector("#btn");
const age = document.querySelector("#age");

btn.addEventListener("click", () => {
    const dob = input.value.trim(); // Remove extra spaces
    if (!dob || dob.length < 4) {
        age.innerText = "Please enter a valid year!";
        return;
    }

    const birthYear = parseInt(dob.substring(0, 4), 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        age.innerText = "Enter a valid birth year!";
        return;
    }

    age.innerText = `Your age is ${currentYear - birthYear} years old`;
});

