const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let myLeads = []
const inputEl = document.getElementById("input-el");
let deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const savetab = document.getElementById("sav-tab")

savetab.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderleads(myLeads)
  })
  
})

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderleads(myLeads)
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderleads(myLeads);
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  inputEl.value = ''
});
function renderleads(arr) {
  let listitems = "";

  for (let i = 0; i < arr.length; i++) {
    listitems += `
    <li>
        <a target = "_blank" href = "${arr[i]}">${arr[i]}</a>
    </li>`
  }
  ulEl.innerHTML = listitems;
} 

deleteBtn.addEventListener("click", function(){
  localStorage.clear()
  myLeads = []
  ulEl.innerHTML = null
})

