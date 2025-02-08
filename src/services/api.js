

function api(formData) {
    console.log (formData);
    return fetch("https://dev.adalab.es/api/projectCard", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
   
}





export default api