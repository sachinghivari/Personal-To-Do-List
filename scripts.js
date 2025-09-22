 
 let inputText = document.getElementById('input-text');
 let addBtn = document.querySelector('.add-btn');
 let newTask = document.querySelector('.new-task');



   function getTask(){
     let task = document.createElement('div');
    task.classList.add('task');


     let checkBtn = document.createElement('button');
     checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
     checkBtn.classList.add('check');
     task.appendChild(checkBtn);

     let li = document.createElement('li');
     li.innerText = `${inputText.value}`;
     task.appendChild(li);

    let editBtn = document.createElement('button');
     editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
     editBtn.classList.add('edit');
     task.appendChild(editBtn);

     let deleteBtn = document.createElement('button');
     deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
     deleteBtn.classList.add('delete');
     task.appendChild(deleteBtn);

    
       checkBtn.addEventListener('click', function(){
    li.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener('click', function(){
    task.remove();
  });
      
    if(inputText.value === ""){
        alert("Please Enter Text!");
    }else{
       
         newTask.appendChild(task);
              inputText.value ="";
    }
  }


  addBtn.addEventListener('click', function(){
        getTask();
  });

    document.addEventListener('keydown', function(e){
    if(e.key === "Enter"){
         getTask();
    }
  });

 

  



   
