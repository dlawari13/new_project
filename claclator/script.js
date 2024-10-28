function appendCharctor(charctors){
const disply = document.getElementById("textbox");
disply.value +=charctors;
}
function cleardata(){
   const clear = document.getElementById("textbox").value="";
}
function eletevalue(){
   const delet = document.getElementById("textbox");
   delet.value = delet.value.slice(0,-1)
}
function calcalet(){
   const disply = document.getElementById("textbox")
   try{
      disply.value = eval(disply.value);

   }catch{
      disply.value="Error";
   }
}
function modols(){
  const reminder = document.getElementById("textbox");
  reminder.value = reminder.value * reminder.value / 100;
}


