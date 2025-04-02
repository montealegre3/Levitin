

const body = document.querySelector("body")

function header() {

    const div = document.createElement("div")
    div.classList.add("container")

    if (window.location.pathname.endsWith("index.html")) {
        console.log("Estás en index")
        div.innerHTML = `  
        <div class="row" id="menu">
          <div class="col-lg-12 menu">
              <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3">
                  <div class="container">
                    <a class="navbar-brand" href="./index.html">
                      <img src="../assets/logo-azul.png" alt="LogoLevitin">
                    </a>
    
                    <div class="user-menu-container">
                      <a href="#" id="icon">
                          <img src="./assets/user-icon.webp" alt="Usuario" class="user-icon">
                          <h3>Mi perfil</h3>
                      </a>
                    </div>
  
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-underline justify-content-end" id="navbarNav">
                      <ul class="navbar-nav">               
                        <li class="nav-item">
                          <a id="btnRegistro" class="nav-link" aria-current="page" href="./vistas/registro.html">Registrarse</a>
                        </li>
                        <li class="nav-item">
                          <a id="btnIniciar" class="nav-link" href="./vistas/iniciaSesion.html">Iniciar sesión</a>
                        </li>
                        <li class="nav-item dropdown">
                          <a id="btnModulos" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Módulos
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li class="dropdown-submenu">
                              <a class="dropdown-item dropdown-toggle" href="#">Módulo 1: introducción a la psicología de la música</a>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li><a href="./vistas/modulo1/animacion1.html" class="dropdown-item">Introducción</a></li>
                                <li><a href="./vistas/modulo1/tema1.html" class="dropdown-item">Tema 1</a></li>
                                <li><a href="./vistas/modulo1/tema2.html" class="dropdown-item">Tema 2</a></li>
                                <li><a href="./vistas/modulo1/tema3.html" class="dropdown-item">Tema 3</a></li>
                              </ul>
                            </li>
                            <li class="dropdown-submenu">
                              <a class="dropdown-item dropdown-toggle" href="#">Módulo 2: percepción musical</a>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li><a href="./vistas/modulo2/animacion2.html" class="dropdown-item">Introducción</a></li>
                                <li><a href="./vistas/modulo2/tema1.html" class="dropdown-item">Tema 1</a></li>
                                <li><a href="./vistas/modulo2/tema2.html" class="dropdown-item">Tema 2</a></li>
                                <li><a href="./vistas/modulo2/tema3.html" class="dropdown-item">Tema 3</a></li>
                              </ul>
                            </li>
                            <li class="dropdown-submenu">
                              <a class="dropdown-item dropdown-toggle" href="#">Módulo 3: música y emociones</a>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li><a href="./vistas/modulo3/animacion3.html" class="dropdown-item">Introducción</a></li>
                                <li><a href="./vistas/modulo3/tema1.html" class="dropdown-item">Tema 1</a></li>
                                <li><a href="./vistas/modulo3/tema2.html" class="dropdown-item">Tema 2</a></li>
                                <li><a href="./vistas/modulo3/tema3.html" class="dropdown-item">Tema 3</a></li>
                                <li><a href="./vistas/modulo3/tema4.html" class="dropdown-item">Tema 4</a></li>
                              </ul>
                            </li>
                            <li class="dropdown-submenu">
                              <a class="dropdown-item dropdown-toggle" href="#">Módulo 4: música y memoria</a>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li><a href="./vistas/modulo4/animacion4.html" class="dropdown-item">Introducción</a></li>
                                <li><a href="./vistas/modulo4/tema1.html" class="dropdown-item">Tema 1</a></li>
                                <li><a href="./vistas/modulo4/tema2.html" class="dropdown-item">Tema 2</a></li>
                                <li><a href="./vistas/modulo4/tema3.html" class="dropdown-item">Tema 3</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </nav>
          </div>
        </div>
        <!-- Menú lateral -->
        <div id="user-menu" class="user-menu p-3">
          <ul class="list-unstyled">
              <li class="mb-3">
                  <h6>Mi perfil</h6>
                  <p id="titulo">Nombre: usuario</p>
                  <p id="correoTitulo">Correo: </p>
              </li>
              <li class="mb-3">
                  <h6>Tu progreso:</h6>
                  <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div id="progreso" class="progress-bar">25%</div>
                  </div>
              </li>
              <li class="mb-3">
                  <h6>Módulos aprobados</h6>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo1/animacion1.html"><p>Módulo 1</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo2/animacion2.html"><p>Módulo 2</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo3/animacion3.html"><p>Módulo 3</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo4/animacion4.html"><p>Módulo 4</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
              </li>
              <li class="mb-3">
                  <h6>Formularios aprobados</h6>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo1/formularioM1.html"><p>Formulario 1</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo2/formularioM2.html"><p>Formulario 2</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo3/formularioM3.html"><p>Formulario 3</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo4/formularioM4.html"><p>Formulario 4</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
              </li>
          </ul>
  
        <!-- Botones finales -->
        <div class="d-flex flex-column align-items-center gap-2">
          <button class="btn1 btn-sm">Reclamar certificado</button>
          <a class="btnCerrar" href="./vistas/cerrar.html"><button class="btn1 btn-sm">Cerrar sesión</button></a>
        </div>
      </div>
  
        <!-- Fondo oscuro cuando el menú está abierto -->
        <div id="overlay"></div>
      `
    }else{
        console.log("No estás en index")
        div.innerHTML = ` <div class="row" id="menu">
        <div class="col-lg-12 menu">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3">
                <div class="container">
                  <a class="navbar-brand" href="../../index.html">
                    <img src="../../assets/logo-azul.png" alt="LogoLevitin">
                  </a>
  
                  <div class="user-menu-container">
                    <a href="#" id="icon">
                        <img src="../../assets/user-icon.webp" alt="Usuario" class="user-icon">
                        <h3>Mi perfil</h3>
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse nav-underline justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">               
                      <li class="nav-item">
                        <a id="btnRegistro" class="nav-link" aria-current="page" href="../../vistas/registro.html">Registrarse</a>
                      </li>
                      <li class="nav-item">
                        <a id="btnIniciar" class="nav-link" href="../../vistas/iniciaSesion.html">Iniciar sesión</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a id="btnModulos" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Módulos
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li class="dropdown-submenu">
                            <a class="dropdown-item dropdown-toggle" href="#">Módulo 1: introducción a la psicología de la música</a>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a href="../../vistas/modulo1/animacion1.html" class="dropdown-item">Introducción</a></li>
                              <li><a href="../../vistas/modulo1/tema1.html" class="dropdown-item">Tema 1</a></li>
                              <li><a href="../../vistas/modulo1/tema2.html" class="dropdown-item">Tema 2</a></li>
                              <li><a href="../../vistas/modulo1/tema3.html" class="dropdown-item">Tema 3</a></li>
                            </ul>
                          </li>
                          <li class="dropdown-submenu">
                            <a class="dropdown-item dropdown-toggle" href="#">Módulo 2: percepción musical</a>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a href="../../vistas/modulo2/animacion2.html" class="dropdown-item">Introducción</a></li>
                              <li><a href="../../vistas/modulo2/tema1.html" class="dropdown-item">Tema 1</a></li>
                              <li><a href="../../vistas/modulo2/tema2.html" class="dropdown-item">Tema 2</a></li>
                              <li><a href="../../vistas/modulo2/tema3.html" class="dropdown-item">Tema 3</a></li>
                            </ul>
                          </li>
                          <li class="dropdown-submenu">
                            <a class="dropdown-item dropdown-toggle" href="#">Módulo 3: música y emociones</a>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a href="../../vistas/modulo3/animacion3.html" class="dropdown-item">Introducción</a></li>
                              <li><a href="../../vistas/modulo3/tema1.html" class="dropdown-item">Tema 1</a></li>
                              <li><a href="../../vistas/modulo3/tema2.html" class="dropdown-item">Tema 2</a></li>
                              <li><a href="../../vistas/modulo3/tema3.html" class="dropdown-item">Tema 3</a></li>
                              <li><a href="../../vistas/modulo3/tema4.html" class="dropdown-item">Tema 4</a></li>
                            </ul>
                          </li>
                          <li class="dropdown-submenu">
                            <a class="dropdown-item dropdown-toggle" href="#">Módulo 4: música y memoria</a>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><a href="../../vistas/modulo4/animacion4.html" class="dropdown-item">Introducción</a></li>
                              <li><a href="../../vistas/modulo4/tema1.html" class="dropdown-item">Tema 1</a></li>
                              <li><a href="../../vistas/modulo4/tema2.html" class="dropdown-item">Tema 2</a></li>
                              <li><a href="../../vistas/modulo4/tema3.html" class="dropdown-item">Tema 3</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </nav>
        </div>
      </div>
      <!-- Menú lateral -->
        <div id="user-menu" class="user-menu p-3">
          <ul class="list-unstyled">
              <li class="mb-3">
                  <h6>Mi perfil</h6>
                  <p id="titulo">Nombre: usuario</p>
                  <p id="correoTitulo">Correo: </p>
              </li>
              <li class="mb-3">
                  <h6>Tu progreso:</h6>
                  <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div id="progreso" class="progress-bar">25%</div>
                  </div>
              </li>
              <li class="mb-3">
                  <h6>Módulos aprobados</h6>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo1/animacion1.html"><p>Módulo 1</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo2/animacion2.html"><p>Módulo 2</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo3/animacion3.html"><p>Módulo 3</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo4/animacion4.html"><p>Módulo 4</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
              </li>
              <li class="mb-3">
                  <h6>Formularios aprobados</h6>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo1/formularioM1.html"><p>Formulario 1</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo2/formularioM2.html"><p>Formulario 2</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo3/formularioM3.html"><p>Formulario 3</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <a href="./vistas/modulo4/formularioM4.html"><p>Formulario 4</p></a><i class="bi bi-check-circle-fill text-success fs-5"></i>
                  </div>
              </li>
          </ul>
  
        <!-- Botones finales -->
        <div class="d-flex flex-column align-items-center gap-2">
          <button class="btn1 btn-sm">Reclamar certificado</button>
          <a class="btnCerrar" href="./vistas/cerrar.html"><button class="btn1 btn-sm">Cerrar sesión</button></a>
        </div>
      </div>
  
        <!-- Fondo oscuro cuando el menú está abierto -->
        <div id="overlay"></div>
      `
    }


   
    return div
       
}


body.prepend(header())