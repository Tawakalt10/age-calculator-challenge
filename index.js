 let userInputDate = document.getElementById('date');
 let userInputMonth = document.getElementById('month');
 let userInputYear = document.getElementById('year');

 let age = document.getElementById('age');


 function calculateAge (){
    let birthDate = new Date (userInputDate.value);
    let birthMonth = new Date (userInputMonth.value);
    let birthYear = new Date (userInputYear.value);

    
    let d1  = birthDate.getDate();
    let m1 = birthMonth.getMonth() + 1;
    let y1 = birthYear.getFullYear();

    let today = new Date();
     
    let d2  = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2-m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
         y3--;1
    }
    
    age.innerHTML =  `<span>${y3}</span> years <br>  <span>${m3} </span> months <br> <span>${d3} </span>days `
}

function getDaysInMonth(date, year, month){
    return new Date(year, month, 0).getDate();
}


 






































































