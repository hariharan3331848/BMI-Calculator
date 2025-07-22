function calculateBMI(){

    const weight=parseFloat(document.getElementById("weight").value)
    const height=parseFloat(document.getElementById("height").value)/100

    if(!weight || !height || height ===0){
        alert("plese enter the valid height and weight!!");
        return;
    }

    const bmi=(weight/ (height*height)).toFixed(2)
    let category=""

    if (bmi < 18.5){
        category="Under Weight!"
    }

    else if(bmi < 25){
        category="Normal Weight!!!"
    }

    else if(bmi < 30){
        category="Over Weight!!"
    }

    else{
        category="obese"
    }

    document.getElementById("result").innerText=`your BMI is ${bmi} (${category})`

}