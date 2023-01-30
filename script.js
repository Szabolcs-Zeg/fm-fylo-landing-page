document.getElementById("btn_mail").addEventListener("click", chekmail);
document.getElementById("btn_free").addEventListener("click", chekfree);

function chekmail() {
 cheking("txt_mail", "err_mail")
}

function chekfree() {
    cheking("txt_free", "err_free")
   }
   

function cheking(idText, iderr) {
    var errorText =""
    if ( !document.getElementById(idText).value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ))
        errorText ="Please check your email!"
    
    if ((document.getElementById(idText).value) =="") 
       errorText="This field can't be blank!"

    if ( errorText !="")    
       {
        (document.getElementById(idText).classList.add("txt_err"))
        document.getElementById(iderr).innerHTML=errorText
       }
     else
       {
        (document.getElementById(idText).classList.remove("txt_err"))
        document.getElementById(iderr).innerHTML=""
       } 
}