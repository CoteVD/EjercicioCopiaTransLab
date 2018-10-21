window.onload = () => {
document.getElementById('btnEnter').addEventListener('click', () =>{
  let password = document.getElementById('userPassword').value;
  if(password.length <= 8 && typeof parseInt(password) === 'number'){
    document.getElementById('options').style.display = 'block';
    document.getElementById('logIn').style.display = 'none';
  } else {
    alert('La contraseña debe tener máximo 8 caracteres y acepta sólo números.')
  }
})
const user = document.getElementById('userPassword').value;
window.localStorage.setItem('User', user);
console.log('User')
}

//Ésta promesa se activa cuando se apreta el botón de btnEnter.
/*fetch('http://www.psep.cl/api/Bip.php?&numberBip=666')
.then(response => response.json())
.then(dataJSON => {
  card = dataJSON;
  cardData();
})
.catch(error => {
  alert('Conexión fallida.');
});

cardData = () =>{
  for (var i in card) {
    console.log(i); 
 }
}*/