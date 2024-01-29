
// insertando dinamicamente el menu estactico de las redes

const crear1 = document.createElement('div');
const nuevo1 = document.querySelector('.align-content-center');

crear1.innerHTML =`

    <div class="fixed-bottom">
        <div class="sidebar" style="background-color: rgba(4, 16, 20, 0.376); margin-left: auto; margin-top: -15rem; border-radius: 8%;">
            <h5 style="color: blue;">Visitanos...</h5>
            <ul>
                <li><a href="https://WhatsApp.com"><img src="images/wredes2.png" width="50px" height="50px" style="border-radius: 10%;"alt=""></a></li> 
                <li><a href="https://facebook.com"><img src="images/Fredes1.png" width="50px" height="50px" style="border-radius: 10%;"alt=""></a></li> 
                <li><a href="https://twitter.com"><img src="images/tredes1.png" width="50px" height="50px" style="border-radius: 10%;"alt=""></a></li> 
                <li><a href="https://instagram.com"><img src="images/iredes5.png" width="50px" height="50px" style="border-radius: 10%;"alt=""></a></li> 
                <!-- Agrega más redes sociales según sea necesario -->
            </ul>
        </div>
    </div>
`;
nuevo1.appendChild(crear1);

//   paso 2
//  carousel desde javascript

const crear3 = document.createElement('div');
const nuevo3 = document.querySelector('.align-content-center');

crear3.innerHTML =`
     <!-- section de carousel de comentarios o con posibilidad de ser cambiado a solo carousel de imagenes informativas-->
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="height: fit-content;padding: 2rem; background-color: rgb(1, 5, 33)">
        <div class="carousel-inner" >
            <div class="carousel-item active">
                <img src="images/meditacion .jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="images/vista-lateral-personas-gafas-vr_23-2150603813.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../proyecto-minverse/images/collage-entrenamiento-inmersivo_23-2150675737.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
        </button>
    </div>
       <!-- fin carousel-->
`;
nuevo3.appendChild(crear3);


const crear2 = document.createElement('div');
const nuevo2 = document.querySelector('.align-content-center');

crear2.innerHTML =`

    <div class="accesores"  style="width: 100%;margin: auto;height: auto;background: linear-gradient(rgb(1, 5, 33), rgb(15, 1, 29))">
        <br>
        <div class="registro">
            <p>
            Unete A Nuestra Lista De Correo Y Este Al Dia Con Nuestros Nuevos<br>
            Proyectos, NFT Drops, Staking Y Mas...
            </p>           
        </div>
        <!-- btn acceder -->
        <h5 id="r" style="display: flex;justify-content: center; gap: 8px;align-items: center;">registrate :  <a type="button" href="http://127.0.0.1:5501/contacto.html" class="btn btn-outline-info onclik" style="border-radius: 10px;"> acceder</a></h5>
        <br>
    </div>
    <hr style="padding:0% ;background-color:black; margin:0%;">
    <div style="background: linear-gradient(rgb(15, 1, 29), black)">
        <!-- inicio footer -->
        <footer style="background: linear-gradient(rgb(15, 1, 29), black)">
    
            <div class="position-absolute">
                <i>Desarrolladores : <hr></i>
                <ul>
                    <li>Cristian correa <a href="#" class="link-danger" style="height: 20px;margin-left: 20px;">contactar</a></li>
                    <li>Miguel tabares<a href="#" class="link-primary" style="height: 20px;margin-left: 20px;">contactar</a></li>
                    <li>Daniel lopez<a href="#" class="link-success" style="height: 20px;margin-left: 20px;">contactar</a></li>
                </ul>
            </div>
            <div>
                <i> todos los derechos reservados |  2024  &copy;|  Riwi | Grupo B1 | Equipo 3</i>
                <!-- <i> todos los derechos reservados |  2024  &copy;|  Riwi | Grupo B1 | cristian manco</i> -->
            </div>
            <br>
            <i>Nuestras redes sociales :</i>
            <div class="footer-icons" style="display: flex;gap: 20px;justify-content: center;margin-top: 40px;">
                <a href="https://WhatsApp.com"><img src="images/wredes2.png" width="30px" height="30px" style="border-radius: 10%;"alt=""></a>
                <a href="https://facebook.com"><img src="images/Fredes1.png" width="30px" height="30px" style="border-radius: 10%;"alt=""></a>
                <a href="https://twitter.com"><img src="images/tredes1.png" width="30px" height="30px" style="border-radius: 10%;"alt=""></a> 
                <a href="https://Instagram.com"><img src="images/iredes5.png" width="30px" height="30px" style="border-radius: 10%;"alt=""></a>
                <a href="https://linkedin.com"><img src="images/lredes1.png" width="30px" height="30px" style="border-radius: 10%;"alt=""></a> 
            
            </div>
        
        </footer>
    
    </div>
`;
nuevo2.appendChild(crear2);

// fin 



























let ruleta = document.getElementById('ruleta');
let flecha = document.getElementById('flecha');
let girando = false;
let opciones = document.getElementById('opciones');
let numOpciones = opciones.children.length;

function girarRuleta() {
    if (!girando) {
        girando = true;

        // Genera un número aleatorio para la rotación
        let grados = Math.floor(Math.random() * 360) + 1800;

        ruleta.style.transition = 'transform 3s ease-out';
        ruleta.style.transform = `rotate(${grados}deg)`;

        // flecha.style.transition = 'transform 3s ease-out';
        // flecha.style.transform = `rotate(${grados}deg)`;

        // Restablece la transición después de que termine la animación
        setTimeout(() => {
            ruleta.style.transition = 'none';
            flecha.style.transition = 'none';
            girando = false;

            // Muestra la opción seleccionada
            let opcionSeleccionada = Math.floor((360 - (grados % 360)) / (360 / numOpciones));
            alert(`Opción seleccionada: ${opciones.children[opcionSeleccionada].textContent}`);
        }, 3000);
    }
}

