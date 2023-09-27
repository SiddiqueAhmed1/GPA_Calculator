

// let name = prompt('your Name');
// let roll = prompt('your Roll');

// let bn = Number(prompt('Bangla'));
// let en = Number(prompt('English'));
// let math = Number(prompt('Math'));
// let s = Number(prompt('Science'));
// // let ss = Number(prompt('s science'));
// let rel = Number(prompt('Religion'));

// console.log(`

//   Your name  = ${name}
//   Your roll  = ${roll}

//   SUBJECT      MARKS    GPA       GRADE

//   Bangla        ${bn}       ${gpa(bn)}        ${grade(bn)}
//   English       ${en}       ${gpa(en)}      ${grade(en)}
//   Math          ${math}       ${gpa(math)}        ${grade(math)}
//   Science       ${s}       ${gpa(s)}        ${grade(s)}
//   S scince      ${ss}       ${gpa(ss)}        ${grade(ss)}
//   Religion      ${rel}       ${gpa(rel)}        ${grade(rel)}
//   -----------------------------------------------------
//     ${cgpa(gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))}



// `);










// FIXME: NEW GPA CALCULATOR

let name = prompt("Your name");
let roll = prompt("Your roll");

let bn =Number(prompt("Bangla")) ;
let en =Number(prompt("English")) ;
let ss =Number(prompt("Social Science")) ;
let s  =Number(prompt("Science")) ;
let rel =Number(prompt("Religion")) ;

let total = bn + en + ss + s + rel;

function cgpa(bn, en, ss, s, rel){

    let totalGpa = (bn + en + ss + s + rel);
    let cgpa = totalGpa / 5;
    

    if(bn == 0 || en == 0 || ss == 0 || s == 0 || rel == 0){
        return `You are failed`
    }else{
       return `Your CGPA is ${cgpa} AND GRADE ${grade(cgpa)}`
    }
}


console.log(`
    Your Name   :       ${name}
    Your Roll   :       ${roll}

    Subject Name        Marks              GPA                  Grade

    Bangla      :       ${bn}             ${gpa(bn)}            ${grade(gpa(bn))}   
    English     :       ${en}             ${gpa(en)}           ${grade(gpa(en))} 
    S Science   :       ${ss}             ${gpa(ss)}            ${grade(gpa(ss))} 
    Science     :       ${s}              ${gpa(s)}            ${grade(gpa(s))} 
    Religion    :       ${rel}            ${gpa(rel)}           ${grade(gpa(rel))}    

    -------------------------------------------------------------------------------------------
      Your total Marks  ${total}          ${cgpa(gpa(bn), gpa(en), gpa(ss), gpa(s), gpa(rel))}          

`); 

function gpa (marks){
    if(marks >= 0 && marks < 33){
        return  0
    }else if(marks >= 33 && marks < 40){
        return 1
    }else if(marks >= 40 && marks < 50){
        return 2
    }else if(marks >= 50 && marks < 60){
        return  3
    }else if(marks >= 60 && marks < 70){
        return 3.5
    }else if(marks >= 70 && marks < 80){
        return 4
    }else if(marks >= 80 && marks <= 100){
        return 5
    }
}
function grade (cgpa){
    if(cgpa >= 0 && cgpa < 1){
        return  `You are failed`
    }else if(cgpa >= 1 && cgpa < 2){
        return `D`
    }else if(cgpa >= 2 && cgpa < 3){
        return `C`
    }else if(cgpa >= 3 && cgpa < 3.5){
        return  `B`
    }else if(cgpa >= 3.5 && cgpa < 4){
        return `A-`
    }else if(cgpa >= 4 && cgpa < 5){
        return `A`
    }else if(cgpa >= 5 ){
        return `A+`
    }
}

