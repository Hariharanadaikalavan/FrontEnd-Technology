document.getElementById('btnid').addEventListener("click",numbervalidation);

var numbervalidation=()=>{
   var txt=document.getElementById('inputbox').ariaValueMax;
   var ptn=RegExp("[0-9]{10}");
   if(txt.match(ptn))
   {
    console.log("you correct");
   }
   else{
    console.log("please start number 6789 & length with 10digits");
   }
}
