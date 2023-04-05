
//alert("Hola mundo del Java Script");
function sumaNumeros(){
    let entrada1=document.getElementById('entrada1').value;
    let entrada2=document.getElementById('entrada2').value;
    const resultado= parseInt(entrada1)+ parseInt(entrada2);
   
    //resultado
    const res=document.getElementById('res');
    res.innerHTML=resultado;
}

function restaNumeros(){
    let entrada1=document.getElementById('entrada1').value;
    let entrada2=document.getElementById('entrada2').value;
    const resultado= entrada1-entrada2;
  
    const res=document.getElementById('res');
    res.innerHTML=resultado;

}

function multiNumeros(){
    let entrada1=document.getElementById('entrada1').value;
    let entrada2=document.getElementById('entrada2').value;
    const resultado= entrada1*entrada2;
   
    const res=document.getElementById('res');
    res.innerHTML=resultado;
}

function divNumeros(){
    let entrada1=document.getElementById('entrada1').value;
    let entrada2=document.getElementById('entrada2').value;
    const resultado= entrada1/entrada2;
  
    const res=document.getElementById('res');
    res.innerHTML=resultado;
}
