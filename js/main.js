let container=document.querySelector(".myContainer");

for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        container.innerHTML += '<div class="elemento"><p>FizzBuzz</p></div>';
    }
    else if(i%3==0){
        container.innerHTML += '<div class="elemento"><p>Fizz</p></div>';
    }
    else if(i%5==0){
        container.innerHTML += '<div class="elemento"><p>Buzz</p></div>';
    }
    else{
        container.innerHTML += '<div class="elemento"><p>'+i+'</p></div>';
    }
}