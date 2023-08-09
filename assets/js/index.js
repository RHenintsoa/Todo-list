   // Récupérer le jour
const date = new Date();
const display = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
let moment =(date.toLocaleString('fr-IN', display));
document.getElementById('date').innerHTML = moment;


// Affichage 
let btnAdd = document.getElementById('btn-add');
let todoList = document.getElementById('todo-list');
let inputTodo =document.getElementById('input-todo');
btnAdd.addEventListener('click', function(){
   // Add
   let myTodo = document.getElementById('input-todo').value;
   if (myTodo.length == 0) {
      alert('Veuillez remplir le champ');
      return false;
   }
   else{
      let myList = document.createElement('tr');
      myList.innerHTML = `<td class="sticky" id="my-todo">`+myTodo+` </td>
                          <td><button class=" btn btn-edit"><span class="bi bi-stickies"></span></button></td>
                          <td><button class="btn btn-delete"> <span class="bi bi-archive"></span></button></td>`
  todoList.appendChild(myList);
  document.getElementById('input-todo').value ="";

   }

   // Delete
let deleteButtons = document.getElementsByClassName('btn btn-delete');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
        this.closest('tr').remove();
    });
}
   // Edit 
  let editButtons = document.getElementsByClassName('btn btn-edit');
  for (let i = 0; i< editButtons.length; i++){
   editButtons[i].onclick = function(){         
      document.getElementById('line-add').style.display="none";
      document.getElementById('line-edit').style.display="block"; 
      let test =document.getElementById('line-edit');
      // Pour récupérer la valeur myTodo dans la <td qui a de la classe sticky>
      let row = this.closest('tr');
      let todoOriginal = row.querySelector('.sticky').textContent;
      let inputEdit = document.getElementById('input-edit');
      inputEdit.value = todoOriginal;
      // Exécution Edit
      let btnConfirm = document.getElementById('btn-confirm');
      btnConfirm.addEventListener('click',function() {
         let todoNew = document.getElementById('input-edit').value;
         // Affichage HTML (On ne crée plus de nouvelle row, on a juste besoin de cibler la colonne qui contient l'élement modifié)
         // l'élément modifié s'affiche dans la class sticky
         let todoCell = row.querySelector('.sticky');
         todoCell.textContent = todoNew;
         // remettre la disposition de la page comme au début
         document.getElementById('line-add').style.display="block";
         document.getElementById('line-edit').style.display="none";
         document.getElementById('input-edit').value=''; 
      });
      
   }
  }

});




