


function checkcategory(){
    var age=document.getElementById("inputage").value;
    if(age=15){
        console.log("childrens using vivo mobile");
        document.getElementById("label1").textContent="childrens using vivo mobile";
    }
    else if(age>=25 && age<=24){
        console.log("teenagers using oneplus mobile");
        document.getElementById("label1").textContent="teenagers using oneplus mobile"; 
    }
    else if(age>=30 && age<=40){
        console.log("adults using samsung mobile");
         document.getElementById("label1").textContent="adults using samsung mobile";
    }
    else{
        console.log("senior citizens using nokia mobile");
         document.getElementById("label1").textContent="senior citizens using nokia mobile";
    }
    
  }

for (var i=15;i<=30;i++){
    console.log("count: " +i);
}
function greet(name){
    console.log("Hello, "+name);
}
greet("Nani");
greet("Klp");

