let num = document.getElementById("number");
        let counter = 0;
        let incri = document.getElementById("plus");
        let dicri = document.getElementById("minus");
        let reset = document.getElementById("reset");
      incri.addEventListener("click",()=>{
       counter++;
       num.textContent =counter;
      })
      dicri.addEventListener("click",()=>{
        counter--;
        num.textContent=counter;
      })
      reset.addEventListener("click",()=>{
        counter=0;
        num.textContent=counter;
      })