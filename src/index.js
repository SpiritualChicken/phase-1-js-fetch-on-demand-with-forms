const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#searchByID")
    if (input.value > 3 ) {
        alert ("Please enter valid id");
    }
    
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector("#movieDetails h4");
            const summary = document.querySelector("#movieDetails p");
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
  })
}

document.addEventListener('DOMContentLoaded', init);