
function addrow(inputName, inputAge, inputSubject, inputID) {
    let table = document.getElementById("tableid").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    let row1 = newRow.insertCell(0);
    row1.innerHTML = inputName;
    let row2 = newRow.insertCell(1);
    row2.innerHTML = inputAge;
    let row3 = newRow.insertCell(2);
    row3.innerHTML = inputSubject;
    let row4 = newRow.insertCell(3);
    row4.innerHTML = inputID;
    let row5 = newRow.insertCell(4);
    row5.innerHTML = '<button class="button2" onclick="onEdit(this)">Edit</button>';
    let row6 = newRow.insertCell(5);
    row6.innerHTML = '<button class="button3" onclick="onDelete(this)">Delete</button>';}

    function onEdit(button) {
        console.log(button)
        let row = button.parentNode.parentNode;
        let cells = row.getElementsByTagName('td');
    
        document.getElementById('input1').value = cells[0].innerHTML;
        document.getElementById('input2').value = cells[1].innerHTML;
        document.getElementById('input3').value = cells[2].innerHTML;
        document.getElementById('input4').value = cells[3].innerHTML;
    
        button.innerHTML = 'Update';
        button.setAttribute('onclick', 'onUpdate(this)');
    }
    
    function onUpdate(button) {
        let row = button.parentNode.parentNode;
        let cells = row.getElementsByTagName('td');
    
        cells[0].innerHTML = document.getElementById('input1').value;
        cells[1].innerHTML = document.getElementById('input2').value;
        cells[2].innerHTML = document.getElementById('input3').value;
        cells[3].innerHTML = document.getElementById('input4').value;
    
        button.innerHTML = 'Edit';
        button.setAttribute('onclick', 'onEdit(this)');
    }
    
    
    function onDelete(button) {
        let row = button.parentNode.parentNode;
        row.remove();
    }

function submittask() {
    const inputName = document.getElementById("input1").value;
    const inputAge = document.getElementById("input2").value;
    const inputSubject = document.getElementById("input3").value;
    const inputID = document.getElementById("input4").value;
console.log(inputName,typeof inputName);
    if (inputName === ''){
       console.log ("write something");
    }
    else if ( inputAge === '') {
        console.log("write something");
    } 
    else if(inputSubject === '') {
        console.log("write something");
    }
    else if (inputID === '') {
        console.log("write something");
    } else {
        addrow(inputName, inputAge, inputSubject, inputID);
        
       
    }
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("input3").value = '';
    document.getElementById("input4").value = '';
}

