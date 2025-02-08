

function api(formData) {
    console.log("📤 Enviando datos a la API:", formData);
    return fetch("https://dev.adalab.es/api/projectCard", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json()
      .then(data => {
        console.log("📥📥 Respuesta convertida a JSON:", data);
        if (!res.ok) {
          return Promise.reject(data);
        }
        return data;
      }))
      .catch(error => {
        console.error("❌ Error en la API:", error);
        return Promise.reject(error);
      });
   
}





export default api