
function todoList() {

      var todoInput = document.getElementById('todoInput').value;
      
      var todoLi = document.createElement('li');
      
      var editInput = document.createElement('input');
       editInput.type='text';
       editInput.className='editInput';

      var textarea = document.createElement('textarea');
      textarea.innerText=document.getElementById('todoInput').value;
      textarea.id='text';
      textarea.className='checkbox__label';
     
      var checkBox=document.createElement('input');//checkbox
      checkBox.type='checkbox';
      checkBox.id='box';
      checkBox.className='checkbox__input';
     
      var delButton = document.createElement('Button');
      delButton.className='btn';
      delButton.innerHTML='<i class="material-icons">delete</i>';
      
      todoLi.appendChild(checkBox);
      todoLi.appendChild(textarea);
      todoLi.appendChild(delButton);
     document.getElementById('todoUl').appendChild(todoLi);
     document.getElementById('todoInput').value = '';
     TaskEvends(todoLi);
    }

function delTask (){
	var todoLi = this.parentNode;
	var  ul = todoLi.parentNode;
	ul.removeChild(todoLi);
    }

 function check(){
  var todoLi = this.parentNode;
  var checkBox = event.target;
  if (checkBox.checked){
  complete.appendChild(todoLi);}
  else {
    todoUl.appendChild(todoLi);
  }
}


function TaskEvends(todoLi){
    	var delButton=todoLi.querySelector('.btn');
    	delButton.onclick = delTask;
      var checkBox=todoLi.querySelector('.checkbox__input');
      checkBox.onclick = check;
     }

document.body.onkeydown = myKeyPress;
function myKeyPress(e){
   if (e.keyCode ===13) {
   	e.preventDefault();
    if (!todoInput.value) {
      return;
    }
    todoList();
    }
   }
 