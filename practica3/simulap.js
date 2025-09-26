function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); 
  });
}


async function obtenerDatos() {
  console.log("Esperando datos...");


  const resultado = await simularPeticionAPI();


  console.log(resultado);
}

obtenerDatos();
