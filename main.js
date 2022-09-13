const input = document.getElementById("int");
const button = document.getElementById('btn');
const result = document.getElementById("res");

function squarert (a){
    return a * a;
};

function color(){
    result.style.color = 'red';
}


button.addEventListener("click", ()=>{
    result.innerHTML = squarert(input.value);
    color();
});


const input2 = document.getElementById("int2");
const button2 = document.getElementById('btn2');
const result2  = document.getElementById("res2");


const results =  (value)=>{
    result2.innerHTML= value;
}

function cube(b, myFunc){
    let c = b*b*b;
    myFunc(c)
}

button2.addEventListener("click", ()=>{
    cube(input2.value, results);
} )


const num1 = document.getElementById("val1");
const num2 = document.getElementById("val2");
const changeSym = document.getElementById("calculation");
const bttn = document.getElementById('click');
const ress = document.getElementById('res3');

let x;

changeSym.addEventListener('change', ()=>{
    if(changeSym.value=="add"){
        // ress.innerHTML
        x = parseInt(num1.value) + parseInt(num2.value);
    }else if(changeSym.value == 'sub'){
        // ress.innerHTML
        x = parseInt(num1.value) - parseInt(num2.value);
    }
    else if(changeSym.value == 'mul'){
        // ress.innerHTML
        x = parseInt(num1.value) * parseInt(num2.value);
    }
    else if(changeSym.value == 'div'){
        // ress.innerHTML
        x = parseInt(num1.value) / parseInt(num2.value);
    }
})

bttn.addEventListener('click', ()=>{
    ress.innerHTML = x;
})



