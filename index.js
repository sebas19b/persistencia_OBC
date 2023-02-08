// - Crea una variable con tu nombre
const name =  "SebastianB"
// - Crea una variable con tu apellido
const last = "BarretoF"
// - Crea un objeto con tu nombre y tu apellido
const obj = {name, last}
// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("sessionObj", obj)
// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("localObj", obj)
//Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

document.cookie = obj + ';expires=' + new Date('February 8, 2023 18:44:00').toUTCString()

// -Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado