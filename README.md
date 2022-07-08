## Social Network: Movie Mate

MovieMate es una aplicación enfocada para personas mayores de 18 que sean fanáticos del cine y estén dispuestos a dar sus comentarios acerca de películas que hayan visto.
En esta aplicación cada usuario tendrá un perfil donde podrá crear sus post, editarlos y eliminarlos, estos post irán a un feed compartido donde otros usuarios puedan leer sus post y dar like a estos.holis

## Accede a la App (Link del proyecto)


## Índice

* [1. Usuario](#1-Usuario)
* [2. Encuestas para prototipado](#2-Encuestas-para-prototipado)
* [3. Diseño de Interfaz de Usuario](#3-Diseño-de-Interfaz-de-Usuario)
* [4. Test de Usabilidad](#4-Test-de-Usabilidad)
* [5. MOVIE MATE](#5-MOVIE-MATE)


## 1. Usuario:

Amantes del cine mayores de 18 años, que buscan compartir con nuevos amigos referencias y opiniones de sus películas favoritas.

## Historias de usuario:

**Historia de usuario 1:**

Yo como: Cinéfilo (+18)
Quiero: poder decidir iniciar sesión o crear una cuenta en la red social.
Para: poder interactuar con la comunidad interesada en el cine

Criterio de aceptación:

 - Visibilizar dos botones: Sing in / Login
 - verificar mayoría de edad
 - Crearse una cuenta
 - Iniciar sesión con su cuenta ya existente

**Historia de usuario 2:**

Yo como: Cinéfilo (+18) que ya está en la base de datos (usuario)
Quiero: poder ver a otros usuarios comentando sobre peliculas, organizados según popularidad.
Para: poder interactuar con la comunidad interesada en el cine.

Criterio de aceptación:

Visibilizar un scroll con un "ranking" de películas
 -  4-5 películas fijas (imágenes) a las que se les pueda dar tap (like-popcorn).
 -  Según cantidad de likes, se realiza un sort descendente (mayor-menor).
 -  Poder acceder a un menú que me permita dirigirme a mi propio perfil.
 -  Crear menú
 -  Ruta desde botón profile dentro de menú, que redireccione a profile
 -  Según ID de user, que se cree un perfil y se muestre en el template profile
 -  Crear post en el perfil del usuario
 -  CRUD Firebase

**Historia de usuario 3:**

Yo como: Cinéfilo (+18) que ya está en la base de datos (usuario).
Quiero: poder ver mi propio perfil, crear mis propios post (editables/borrables) y llevar un conteo de usuarios
Para: poder interactuar con mis propias publicaciones.

Criterio de aceptación:

 - visualización de perfil(followers amount/ follow account)
 - crear post
 - editar mis post
 - borrar mis post

**Historia de usuario 4:**

Yo como: Cinéfilo (+18) que ya está en la base de datos (usuario).
Quiero: cerrar sesión
Para: que otras personas no accedan a mi cuenta.

Criterio de aceptación:

 - Boton logout

## 2. Encuestas para prototipado
Para comenzar a crear la app, realizamos una encuesta que nos ayudó a definir la vista y enfoque que le dariamos en base a lo que el usuario busca. Algunos de estos resultados fueron los siguientes: 
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/encuesta/01_encuesta.png?raw=true)
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/encuesta/login.png?raw=true)
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/encuesta/tematica.png?raw=true)
## 3. Diseño de Interfaz de Usuario
Prototipo de baja:
Para comenzar creamos un prototipo de baja donde nos enfocamos primeramente en una versión mobile de la app, donde acogimos los resultados de la encuesta realizada en un comienzo para que esta sea amigable con el usuario y enfocada a lo que ellos buscan.
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/baja%20mobile.png?raw=true)


Prototipo de alta:
Finalmente luego de muchos cambios en nuestro prototipo inicial, acogiendo los distintos feedback recibidos, llegamos a crear a través de Figma (herramienta de generación de prototipos) lo que sería nuestro prototipo final de cómo se visualizaría la aplicación tanto en versión mobile como web.
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/alta%20mobile.png)
<br></br>
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/alta%20web.png)

## 4. Test de Usabilidad 

Se realizaron pruebas de usabilidad a 9 usuarios que cumplen con el perfil definido, lo cual ayudo a complementar nuestras historias de usuario, logrando una mejor experiencia para este.

Algunos de los comentarios recibidos fueron:
<br></br> 
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/encuesta.png)



## 5. MOVIE MATE 
Nuestra aplicación finalmente logra que los usuarios mayores de 18 puedan crear una cuenta o iniciando sesión con Google. Una vez logeado el usuario tendrá un scroll donde se visualizarán los últimos estrenos en cartelera, encontrará post creados por distintos usuarios donde podrá dar y quitar likes. Cada usuario contará con un perfil donde tendrá una sección para crear post, eliminarlos y editarlos. Contará con un botón que permitirá al usuario poder cerrar sesión.

Imagenes del resultado de nuestra app. 

Imágenes de la versión movil:

![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/01_home-view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/02_age_confirmation_view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/03_age_redirect-view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/04_welcome-view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/05_login-view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/06_feed-view.jpg?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/mobile-v/07_profile-view.jpg?raw=true)
<<<<<<< HEAD
=======


Imagenes de la versión web:

![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/01_Home%20View.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/02_age_confirmation-view.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/03_age_redirect-view.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/04_signin-view.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/05_login-view.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/06_feed-view.png?raw=true)
![alt text](https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/web-v/07_profile-view.png?raw=true)
>>>>>>> ac94a460e8a66465dd376db3e2ae494b886f8382
