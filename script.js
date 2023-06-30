let sco=document.querySelector(".score");
let score=JSON.parse(localStorage.getItem("score"));
sco.innerText=`score:${score}`;
function multiply(){
    if(!score){
        score=0;
    }
    if(score>100){
        return;
    }

let num1=Math.ceil(Math.random() * 10);
let num2=Math.ceil(Math.random() * 10);
let question=document.querySelector("#question");
question.innerText=`What is ${num1} multiply by ${num2}?`;
let correct_ans=(num1)*(num2);
let form=document.querySelector(".form");
let inp=document.querySelector(".input");


form.addEventListener("submit",(e)=>{   //we apply submit listener to form tag whichhas default work to refersh tha page;
let user_ans=inp.value;
if(user_ans==correct_ans){
    score=score+1;  
}
else{
    score=score-1;
    
}
localStorage.setItem("score",JSON.stringify(score));

});

}

multiply();