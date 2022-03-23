
function logo(){
    window.location.href="projeto.html";
}

function login(){
   
    document.getElementById('modal').style.display="flex";
    document.getElementById('carousel').style.opacity="0.9";
   
}

function loginEnd(){
    document.getElementById('modal').style.display="none";
    document.getElementById('carousel').style.opacity="1";
}



function cep(){
    var cepReturn = document.getElementById('c');
    var linkViacep = "https://viacep.com.br/ws/"+cepReturn.value+"/json/";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", linkViacep, true);
    xhr.onload = function(e) {
       if(xhr.readyState === 4){
           if(xhr.status === 200){
               var dados = JSON.parse(xhr.responseText);
               console.log("Sucesso");
               document.getElementById("end").value = dados.logradouro;
               document.getElementById("bairro").value = dados.bairro;
               document.getElementById("cidade").value = dados.localidade;
            }else{
              console.error(xhr.statusText);
           }
       }
    };
    xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };

  xhr.send();

}