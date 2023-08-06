   // Récupérer le jour
let weekday =['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
let day = (new Date().getDay());
 for ( day = 0; day < weekday.length ; day++) {
    let dayd = weekday[day];
    document.getElementById('day').innerHTML = dayd;
 }
   // Récupérer la date
let date = (new Date().getDate());
document.getElementById('date').innerHTML = date;
   // Récupérer le mois
let months =['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
let monthIndex  = (new Date().getMonth());
let month = months[monthIndex];
document.getElementById('month').innerHTML= month;

 // Récupérer l'année
let year = (new Date().getFullYear());
document.getElementById('year').innerHTML = year;
// Récupérer les heures et les minutes
// let hour = (new Date().getHours());
// let minute = (new Date().getMinutes());
// let second = (new Date().getSeconds());

// Affichage to-do qu'on vient d'ajouter avec le déclencheur ajouter
let btnAdd = document.getElementById('btn-add');
let todoList = document.getElementById('todo-list');
btnAdd.addEventListener('click', function(){
   let myTodo = document.getElementById('input-todo').value;
   let myList = document.createElement('tr');
    myList.innerHTML = `<td class="sticky" id="my-todo">`+myTodo+` </td>
                        <td><button class=" btn btn-edit"><span class="bi bi-stickies"></span></button></td>
                        <td><button class="btn btn-delete"> <span class="bi bi-archive"></span></button></td>`
todoList.appendChild(myList);
});

