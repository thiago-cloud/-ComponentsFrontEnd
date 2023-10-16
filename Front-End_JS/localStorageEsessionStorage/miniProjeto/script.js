const nameForm = document.getElementById('name-form')
const welcomeContainer = document.getElementById('welcome')
const logoutBtn = document.getElementById('logout')

function checkUser(){
    const userName = localStorage.getItem("name")

    if(userName){
       nameForm.style.display = "none";
       welcomeContainer.style.display = "block"; 
        
       const userNameElement = document.querySelector('#username')
        userNameElement.textContent = userName;
    
    
    
    }else{
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";

    }
    
}



nameForm.addEventListener("submit", (e) => {
    e.preventDefault();//o prevent default cancela o comportamento do item que estar sendo vinculado

    const nameInput = document.getElementById('name')

    localStorage.setItem("name",nameInput.value)//A propriedade value serve para colocar o valor do input no localStorage

    nameInput.value = "";

    checkUser();

})

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name")

    checkUser();
})




checkUser();

