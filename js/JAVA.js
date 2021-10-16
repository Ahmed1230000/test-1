let input1 = document.getElementById("username");
let btn1 = document.getElementById("btn");
let reposcontent = document.getElementById("repos-content")
let langbtns = document.querySelectorAll("lang")
btn1.addEventListener("click", getRepos);
function getRepos(){
    let uservl= input1.value;
    fetch("https://api.github.com/users/" + uservl + "/repos")
    .then((res) => {return res.json()})
    .then((repos) =>{
        repos.forEach(function(repo){
            reposcontent.innerHTML +=` <a href = ${repo.clone_url} target = "_blank"> ${repo.name} </a> `;
        })
    })
    .catch((err)=>{console.log(err)})
}
function getreposlang(){
    fetch("https://api.github.com/search/repositories?q=" + language)
    .then((res)=>{return res.json()})
    .then((repos)=>{console.log(repos.items)})
}
