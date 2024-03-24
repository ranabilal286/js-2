

document.getElementById("concatenate").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let firstname = "Muhmmad"
    let lastname = "Bilal"
    let fullname = firstname + " " + lastname
    let html = "let firstname ="+ firstname + "<br> let lastname ="+ lastname + "<br> fullname = "+fullname
    document.getElementById("output").innerHTML = fullname  
    document.getElementById("input").innerHTML = html
}
document.getElementById("username").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let firstname = prompt("Enter your First Name")
    let lastname = prompt("Enter your Last Name")
    let fullname = firstname + " " + lastname
    let html = "let firstname ="+ firstname + "<br> let lastname ="+ lastname + "<br> fullname = "+fullname
    document.getElementById("output").innerHTML = fullname  
    document.getElementById("input").innerHTML = html
    
}
document.getElementById("comparision").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let firstnumber = +prompt("Check equality for two numbers")
    let lastnumber = +prompt("Check equality for two numbers")
    if(firstnumber === lastnumber){
        document.getElementById("output").innerHTML = "Numbers are equal"
    }  else if(firstnumber !== lastnumber){
        document.getElementById("output").innerHTML = "Numbers are not equal"
        console.log
}
}
document.getElementById("conditiontest").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let age = +prompt("Enter your age") 
    let weight = +prompt("Enter your weight") 

    if(age <= 18 && weight <= 70){
        document.getElementById("output").innerHTML = "You are Fit"
}else if(age >= 18 && weight >= 70){
    document.getElementById("output").innerHTML = "You are not Fit"

}else{
    document.getElementById("output").innerHTML = "You are sick"

}
}
document.getElementById("ifelseif").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let marks = +prompt("Enter your marks") 

    if(marks <= 30){
        document.getElementById("output").innerHTML = "You are fail"
}else if(marks<=60){
    document.getElementById("output").innerHTML = "You got B"

}else{
    document.getElementById("output").innerHTML = "You got A"

}
}


document.getElementById("login").onclick = function (){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let uname = "Bilal"
    let pin = 1234
    let username = prompt("Enter username")
    let password = +prompt("Enter password")

    if(username == uname && password == pin){
        document.getElementById("output").innerHTML = "You are successfully loged in"

    }else{
        document.getElementById("output").innerHTML = "Try username <code>Abdullah</code> and password<code> 1234</code> to login "

    }

}
document.getElementById("ifnested").onclick = function (){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let uname = prompt("Enter username")
    let username = "Bilal"

    if(username == uname ){
        document.getElementById("output").innerHTML = "Your name is good"

    }else{
        document.getElementById("output").innerHTML = "Try username <code>Abdullah</code> "

    }

}




document.getElementById("clear-input").onclick = function(){
    document.getElementById("input").innerHTML =""
}

document.getElementById("clear-output").onclick = function(){
    document.getElementById("output").innerHTML =""
    console.log
}

