function addElement() {
  var input = document.getElementById('inp').value;
  localStorage.setItem("list", input);

  if (input !== '') {
      var ul = document.getElementById('enter');
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.innerHTML = input;

      li.appendChild(span);
      ul.appendChild(li).className = "opt";
      // console.log(li.firstChild);

      var edit = document.createElement('button');
      edit.innerHTML = 'Edit';
      li.appendChild(edit).className = "btn";

      var btn = document.createElement('button');
      btn.innerHTML = 'Delete';
      li.appendChild(btn).className = "dele";

      document.getElementById('inp').value = '';

      edit.addEventListener('click', function() {
          document.getElementById('fullChan').style.display = "flex";
      });

      btn.addEventListener('click', function() {
          li.remove();
      });
  } else {
      alert('Please enter a valid task.');
  }
}

function updateTask() {
  var newInput = document.getElementById('chang-input').value;
  var span = document.querySelector('.opt span');

  if (newInput !== '') {
      span.innerHTML = newInput;
      document.getElementById('chang-input').value = '';
      document.getElementById('fullChan').style.display = "none";
  } else {
      alert('Please enter a valid task.');
  }
}
