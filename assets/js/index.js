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
btnAdd.addEventListener('click', function(){
   // Add
   let myTodo = document.getElementById('input-todo').value;
   let myList = document.createElement('tr');
    myList.innerHTML = `<td class="sticky" id="my-todo">`+myTodo+` </td>
                        <td><button class=" btn btn-edit"><span class="bi bi-stickies"></span></button></td>
                        <td><button class="btn btn-delete"> <span class="bi bi-archive"></span></button></td>`
todoList.appendChild(myList);
document.getElementById('input-todo').value ="";
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
      console.log(this.closest(myTodo[i]));
   }
  }

});




