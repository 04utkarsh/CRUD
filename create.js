
var list= document.getElementById("list");
var q=0;
 //var myFormData = [];
//myFormData.push([]);
var myFormData = [[]];
//var removeAll= document.getElementById("removeall");
function func()
{
    //document.getElementById("displayname").innerHTML=document.getElementById("name").value;
    // document.getElementById("displayemid").innerHTML=document.getElementById("emid").value;
    //document.getElementById("displayde").innerHTML=document.getElementById("de").value;
    
    
    var tsd = document.getElementById('myTable').getElementsByTagName('tbody')[0];
var newRow   = tsd.insertRow();
    var ar=[];
   
   
    
    for(var i=0;i<3;i++){
        ar[i]=newRow.insertCell(i);
    }
var newText  = document.createTextNode(document.getElementById("name").value);
          if(document.getElementById("name").value!=""){
    

ar[0].appendChild(newText);
   
    myFormData[q][0]=document.getElementById("name").value;
    }
    else{
        alert("Enter Name");
    }
var newText  = document.createTextNode(document.getElementById("emid").value);
     if(document.getElementById("emid").value!=""){
ar[1].appendChild(newText);
   
    myFormData[q][1]=document.getElementById("emid").value;
    }
    else{
        alert("Enter EMployee ID");
    }
var newText  = document.createTextNode(document.getElementById("de").value);
    if(document.getElementById("de").value!=""){
ar[2].appendChild(newText);
    myFormData[q][2]=document.getElementById("de").value;
    }
    else{
        alert("Enter Designation");
    }
    
    if((document.getElementById("name").value!="")&&(document.getElementById("emid").value!="")&&(document.getElementById("de").value!=""))
    {
    var removeButton = document.createElement('button');
    removeButton.className='btn btn-danger';
    removeButton.innerHTML='Delete';
    removeButton.setAttribute('onclick', 'removeMe(this)');

    newRow.appendChild(removeButton);
   // var myFormData = [];  
//var value1 = document.getElementsByTagName("tbody")[0].value;
//myFormData.push(value1);
    
    var updateButton = document.createElement('button');
    updateButton.className ='btn btn-primary';
    updateButton.innerHTML='Update';
    updateButton.setAttribute('onclick', 'updateMe(this)');
    
    newRow.appendChild(updateButton);
    }
    document.getElementById("name").value='';
    document.getElementById("emid").value='';
    document.getElementById("de").value='';
    document.getElementById("name").focus();
    
    q++;
    console.log(myFormData);
    myFormData.push([]);
}


function del(){
    list.innerHTML='';
}


function removeMe(item){
    var p= item.parentElement;
    p.parentElement.removeChild(p);
}
var na,em,de,x;
function updateMe(item){
   // document.getElementById("name").innerHTML=item;
   // var c = document.getElementById("mySelect").childNodes;
  //document.getElementById("demo").innerHTML = c[2].text;
   
    var w=item.parentElement;
     //var length=w.rows;
     x = document.getElementById("myTable").rows.length;
    
 na=w.children[0].innerText;

 em=w.children[1].innerText;
de=w.children[2].innerText;
    
    document.getElementById("name").value=na;
    document.getElementById("emid").value=em;
    document.getElementById("de").value=de;
    
  // w.parentElement.removeChild
   // w.removeChild(w.childNodes[4]);
  // w.parentElement.removeChild(w);
   console.log(x);
  // console.log(na);
// console.log(em);
   // console.log(de);
    
    //upd(na,em,de,x);
   
}

function upd(){
    
    //func();
    //var x=document.getElementById('myTable').rows;
    //var y=x[0].cells
    //y[0].innerHTML="NEW CONTENT"
    //console.log(x);
    var i;
   for( i=0;i<x-1;i++){
       if(em==myFormData[i][1])
           break;
       
   }
    myFormData[i][0]=document.getElementById("name").value;
    myFormData[i][1]=document.getElementById("emid").value;
    myFormData[i][2]=document.getElementById("de").value;
    
   //document.getElementById("name").innerText=document.getElementById("name").value;
    //document.getElementById("emid").innerHTML=myFormData[i][1];
    //document.getElementById("de").innerHTML=myFormData[i][2];
    
    console.log(myFormData);
    del();
    var row;
    var tsd = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    
    myFormData.forEach(function(rowData) {
        if(rowData!=''){
    row = document.createElement('tr');
    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
       
    });
        var removeButton = document.createElement('button');
    removeButton.className='btn btn-danger';
    removeButton.innerHTML='Delete';
    removeButton.setAttribute('onclick', 'removeMe(this)');

    row.appendChild(removeButton);
 
    
    var updateButton = document.createElement('button');
    updateButton.className ='btn btn-primary';
    updateButton.innerHTML='Update';
    updateButton.setAttribute('onclick', 'updateMe(this)');
    
    row.appendChild(updateButton);
    tsd.appendChild(row);
        }
  });
  
  //table.appendChild(tableBody);
  //document.body.appendChild(table);
    
    
    
/*var newRow   = tsd.insertRow();
    var ar=[];    
    for(var i=0;i<3;i++){
        ar[i]=newRow.insertCell(i);
    }
var newText  = document.createTextNode(document.getElementById("name").value);
       
ar[0].appendChild(newText);
   

var newText  = document.createTextNode(document.getElementById("emid").value);
   
ar[1].appendChild(newText);
   
     
var newText  = document.createTextNode(document.getElementById("de").value);
   
ar[2].appendChild(newText);
*/
    
   
     document.getElementById("name").value='';
    document.getElementById("emid").value='';
    document.getElementById("de").value='';
    document.getElementById("name").focus();
   
    
   
    console.log(myFormData);
}

