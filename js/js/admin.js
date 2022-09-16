const nombreUnico=document.getElementById("a").addEventListener("keyup",(b)=>{
  async function letras(){
    const datos=await axios.get("https://dbjuego.herokuapp.com/usuariosNombres")
    if(datos.data.find(a=>a===b.target.value)){
      document.getElementById("Enviar").style.display="none"
    }else{
      document.getElementById("Enviar").style.display="block"
    }
  }
  letras()
})  
const nombreUnicoUP=document.getElementById("aa").addEventListener("keyup",(b)=>{
  async function letras(){
    const datos=await axios.get("https://dbjuego.herokuapp.com/usuariosNombres")
    if(datos.data.find(a=>a===b.target.value)){
      document.getElementById("EnviarUp").style.display="none"
    }else{
      document.getElementById("EnviarUp").style.display="block"
    }
  }
  letras()
})  
/** */
const recarga=document.getElementById("recargar").addEventListener("click",()=>{
  location.reload()
})
/**botones de compartir*/
const SalirA=document.getElementById("SalirA")
SalirA.addEventListener("click",()=>{
  document.getElementById("mensajeDeCompartir").style.display="none"
})
/*globales*/
const crearUsuarioDB=document.getElementById("crearUsuarioDB")
const contentB = document.getElementById('contentB');
crearUsuarioDB.style.display="none"
/*para mostrar al administrador*/
let contadorM = 0;
let contador = 10;
let pagina=1;
document
.getElementById('flechasIzquierda')
.addEventListener('click', () => {
 contadorM -= 5;
 contador -= 5;
 pagina-=1
 datos()
});
document
.getElementById('flechasDerecha')
.addEventListener('click', () => {
  contadorM += 5;
  contador += 5;
  pagina+=1;
  datos()
});
function rellenar(b){
  const cantidad = b.data.length;
  if (cantidad >10) {
    const flechas = document.getElementById('flechas');
    flechas.style.display = 'grid';
  }
  if(contadorM<=0){
    document.getElementById('flechasIzquierda').style.visibility="hidden"
  }else{
    document.getElementById('flechasIzquierda').style.visibility="visible"
  }
  if(cantidad<=contador){
    document.getElementById('flechasDerecha').style.visibility="hidden"
  }else{
    document.getElementById('flechasDerecha').style.visibility="visible"
  }
  b.data.slice(contadorM,contador).map(
    (a,b) =>
      {(contentB.innerHTML += `
        <div id="globo">
        <div id="globoTitulo">${a.Nombre}</div>
        <div id="globoContent">
          <div id="datosGlobo"><div id="datosGloboA">id: </div><div id="datosGloboB">${b+1}</div></div>
          <div id="datosGlobo"><div id="datosGloboA">Username: </div><div id="datosGloboB">${a.Apodo}</div></div>
          <div id="datosGlobo"><div id="datosGloboA">Cartera: </div><div id="datosGloboB">${a.Cartera}</div></div>
          <div id="datosGlobo"><div id="datosGloboA">Afiliacion: </div><div id="datosGloboB">${a.Afiliacion}</div></div>
          <div id="datosGlobo"><div id="datosGloboA">Extras: </div><div id="datosGloboC">
            <div id="compartir" onclick="document.getElementById('mensajeDeCompartir').style.display='block';document.getElementById('urlParaEnviar').innerText='${location.href.replace("index.html",'index.html')}?titulo=${a.Nombre}'"><ion-icon name="arrow-redo"></ion-icon></div>
            <div id="editar" onclick="document.getElementById('mensajeDeUp').style.display='block';document.getElementsByName('nombreUP')[0].value='${a.Nombre}';document.getElementsByName('apodoUP')[0].value='${a.Apodo}';document.getElementsByName('carteraUP')[0].value='${a.Cartera}';document.getElementsByName('afiliacionUP')[0].value='${a.Afiliacion}';document.getElementsByName('idUP')[0].value='${a._id}'"><ion-icon name="create"></ion-icon></div>
            <div id="eliminar" onclick="(async()=>{await axios.post('https://dbjuego.herokuapp.com/eliminarUsuario',{id:'${a._id}'})})();location.reload()"><ion-icon name="trash"></ion-icon></div>
        </div>
        </div>
        </div>
        </div>
        `);
        document.getElementById("Copiar").addEventListener("click",(c)=>{
          c.target.style=`color:green`;
          c.target.innerText="copiado";
          const copi=document.getElementById("urlParaEnviar").textContent
          navigator.clipboard.writeText(copi)
          const limpiLetra=setTimeout(()=>{
            c.target.style=`color:white`;
            c.target.innerText="copiar";
            clearTimeout(limpiLetra)
          },1000)
        })
      }
  );
}
/*para buscar usuarios*/
function rellenarA(b){
  const flechas = document.getElementById('flechas').style.display="none"
  b.map(
    (a,b) =>
    {(contentB.innerHTML += `
    <div id="globo">
    <div id="globoTitulo">${a.Nombre}</div>
    <div id="globoContent">
      <div id="datosGlobo"><div id="datosGloboA">id: </div><div id="datosGloboB">${b+1}</div></div>
      <div id="datosGlobo"><div id="datosGloboA">Username: </div><div id="datosGloboB">${a.Apodo}</div></div>
      <div id="datosGlobo"><div id="datosGloboA">Cartera: </div><div id="datosGloboB">${a.Cartera}</div></div>
      <div id="datosGlobo"><div id="datosGloboA">Afiliacion: </div><div id="datosGloboB">${a.Afiliacion}</div></div>
      <div id="datosGlobo"><div id="datosGloboA">Extras: </div><div id="datosGloboC">
        <div id="compartir" onclick="document.getElementById('mensajeDeCompartir').style.display='block';document.getElementById('urlParaEnviar').innerText='${location.href.replace("index.html",'index.html')}?titulo=${a.Nombre}'"><ion-icon name="arrow-redo"></ion-icon></div>
        <div id="editar" onclick="document.getElementById('mensajeDeUp').style.display='block';document.getElementsByName('nombreUP')[0].value='${a.Nombre}';document.getElementsByName('apodoUP')[0].value='${a.Apodo}';document.getElementsByName('carteraUP')[0].value='${a.Cartera}';document.getElementsByName('afiliacionUP')[0].value='${a.Afiliacion}';document.getElementsByName('idUP')[0].value='${a._id}'"><ion-icon name="create"></ion-icon></div>
        <div id="eliminar" onclick="(async()=>{await axios.post('https://dbjuego.herokuapp.com/eliminarUsuario',{id:'${a._id}'})})();location.reload()"><ion-icon name="trash"></ion-icon></div>
    </div>
    </div>
    </div>
    </div>
    `);
    document.getElementById("Copiar").addEventListener("click",(c)=>{
      c.target.style=`color:green`;
      c.target.innerText="copiado";
      const copi=document.getElementById("urlParaEnviar").textContent
      navigator.clipboard.writeText(copi)
      const limpiLetra=setTimeout(()=>{
        c.target.style=`color:white`;
        c.target.innerText="copiar";
        clearTimeout(limpiLetra)
      },1000)
    })
  }
  );
}
//
/* variables para actualizar datos*/
const mensajeDeUp=document.getElementById("mensajeDeUp")
const SalirUp=document.getElementById("SalirUp")
SalirUp.addEventListener("click",()=>{
  mensajeDeUp.style.display="none"
})
const EnvioPuroUP=document.getElementById("EnviarUp").addEventListener("click",()=>{
  const nombre=document.getElementsByName("nombreUP")[0].value
  const apodo=document.getElementsByName("apodoUP")[0].value
  const cartera=document.getElementsByName("carteraUP")[0].value
  const afiliacion=document.getElementsByName("afiliacionUP")[0].value
  const idUP=document.getElementsByName("idUP")[0].value
  if(nombre!==undefined&&afiliacion!==undefined){
    async function Envio(){
      return await axios.post("https://dbjuego.herokuapp.com/editarUsuario",{id:idUP,nombre:nombre,apodo:apodo,cartera:cartera,afiliacion:afiliacion})
      .then((a) => {
        console.log(a);
      }).catch((e) => {
        console.log(e);
      });
    }
    Envio()
  }
  location.reload()
})

/**/
async function datos() {
  return await axios
    .get('https://dbjuego.herokuapp.com/usuarios')
    .then(a => {
      document.getElementById("flechasCantidad").innerText=`Pagina N°${pagina}`
      contentB.innerHTML="";
      rellenar(a)
    })
    .catch(err => {
      console.log('error');
    });
}
datos();
/*Crear Usuarios*/
const crearUsuario=document.getElementById("crearUsuario")
const salir=document.getElementById("Salir")
salir.addEventListener("click",()=>{
  crearUsuarioDB.style.display="none"
})
crearUsuario.addEventListener("click",()=>{
  crearUsuarioDB.style.display="block"
})
const EnvioPuro=document.getElementById("Enviar").addEventListener("click",()=>{
  const nombre=document.getElementsByName("nombre")[0].value
  const apodo=document.getElementsByName("apodo")[0].value
  const cartera=document.getElementsByName("cartera")[0].value
  const afiliacion=document.getElementsByName("afiliacion")[0].value
  if(nombre!==undefined&&afiliacion!==undefined){
    async function Envio(){
      return await axios.post("https://dbjuego.herokuapp.com/crearUsuarios",{nombre:nombre,apodo:apodo,cartera:cartera,afiliacion:afiliacion})
      .then((a) => {
        console.log(a);
      }).catch((e) => {
        console.log(e);
      });
    }
    Envio()
  }
})
const nombreEnviar=document.getElementById("nombreEnviar")
const nombreBuscar=document.getElementById("nombreBuscar").addEventListener("keyup",(a)=>{
  nombreEnviar.addEventListener("click",()=>{
    async function dat(){
      return await axios
      .get('https://dbjuego.herokuapp.com/usuarios')
      .then(b => {
        document.getElementById("flechasCantidad").innerText=`Pagina N°${pagina}`
        contentB.innerHTML="";
        const filtr=b.data.filter(c=>String(c.Nombre).includes(a.target.value))
        rellenarA(filtr)
      })
      .catch(err => {
        console.log('error');
      });
    }
    dat()
  })
})
const buscador=document.getElementById("buscador")
const barraBuscador=document.getElementById("barraBuscador")
const barraBuscadorCampo=document.getElementById("barraBuscadorCampo")
barraBuscadorCampo.style.display="block"
barraBuscador.style.display="none"
buscador.addEventListener("click",()=>{
  barraBuscadorCampo.style.display="none"
  barraBuscador.style.display="grid"
})
buscador.addEventListener("dblclick",()=>{
  barraBuscadorCampo.style.display="block"
  barraBuscador.style.display="none"
})
/*extras*/