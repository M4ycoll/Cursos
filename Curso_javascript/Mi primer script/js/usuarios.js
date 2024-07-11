// Importar las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyB9eDUb5MsGQT-oDSqdalVfccdvOfSXRHc",
  authDomain: "proyectoadm-bd.firebaseapp.com",
  projectId: "proyectoadm-bd",
  storageBucket: "proyectoadm-bd.appspot.com",
  messagingSenderId: "222319189464",
  appId: "1:222319189464:web:567d195eb319137626e6ad"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usuariosRef = collection(db, 'usuarios');
const datosUsuarios = [];

// Función para generar datos de usuario únicos
function generarDatosUsuario() {
  const nombres = ['Juan', 'Pedro', 'Maria', 'Laura', 'Ana', 'Jose', 'Carlos', 'Sofia', 'Miguel', 'Daniel'];
  const apellidos = ['Garcia', 'Rodriguez', 'Lopez', 'Martinez', 'Hernandez', 'Gomez', 'Perez', 'Sanchez', 'Martin', 'Gonzalez'];
  const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Malaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'];
  const paises = ['España', 'Francia', 'Alemania', 'Italia', 'Reino Unido', 'Portugal', 'Países Bajos', 'Bélgica', 'Suecia', 'Noruega'];

  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
  const pais = paises[Math.floor(Math.random() * paises.length)];

  const email = `${nombre.toLowerCase()}.${apellido.toLowerCase()}@example.com`;
  const telefono = Math.floor(Math.random() * 1000000000) + '';
  const direccion = `${nombre} ${apellido} ${Math.floor(Math.random() * 1000)} Calle ${Math.floor(Math.random() * 100)} ${ciudad} ${pais}`;
  const edad = Math.floor(Math.random() * 100);
  const genero = ['hombre', 'mujer'][Math.floor(Math.random() * 2)];
  const fechaRegistro = new Date();
  const estado = ['activo', 'inactivo'][Math.floor(Math.random() * 2)];

  return {
    nombre,
    email,
    telefono,
    direccion,
    ciudad,
    pais,
    edad,
    genero,
    fechaRegistro,
    estado
  };
}

// Generar datos de usuario únicos y agregarlos a la matriz
for (let i = 0; i < 1000000; i++) {
  const datosUsuario = generarDatosUsuario();

  // Verificar que el correo electrónico no esté repetido
  if (!datosUsuarios.some(usuario => usuario.email === datosUsuario.email)) {
    datosUsuarios.push(datosUsuario);
  } else {
    i--;
  }
}

// Agregar los documentos a la colección
datosUsuarios.forEach(async datosUsuario => {
  try {
    await addDoc(usuariosRef, datosUsuario);
  } catch (e) {
    console.error("Error añadiendo documento: ", e);
  }
});
