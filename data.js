var list= document.getElementById("list");
var myFormData = [];
var count=0;
var flag=false;
function create()
{
    while(count>0){
        myFormData.push.apply(myFormData, data);
        count--;
    }
    var tsd = document.getElementById('myTable').getElementsByTagName('tbody')[0];
     if((document.getElementById("name").value!="")&&(document.getElementById("emid").value!="")&&(document.getElementById("de").value!=""))
    {
    var newRow   = tsd.insertRow();
    var ar=[];
    for(var i=0;i<3;i++){
        ar[i]=newRow.insertCell(i);
    }
    var newText0  = document.createTextNode(document.getElementById("name").value);
    if(document.getElementById("name").value!=""){
        ar[0].appendChild(newText0);
    }
    else{
        alert("Enter Name");
    }
    var newText1  = document.createTextNode(document.getElementById("emid").value);
     if(document.getElementById("emid").value!=""){
        ar[1].appendChild(newText1);
    }
    else{
        alert("Enter EMployee ID");
    }
    var newText2  = document.createTextNode(document.getElementById("de").value);
    if(document.getElementById("de").value!=""){
        ar[2].appendChild(newText2);
    }
    else{
        alert("Enter Designation");
    }
   
        myFormData.push({name:document.getElementById("name").value,
                  employeeID:document.getElementById("emid").value,
                  designation:document.getElementById("de").value});
    console.log(newText0);
    console.log(newText1);
    console.log(newText2);
    var removeButton = document.createElement('button');
    removeButton.className='btn btn-danger';
    removeButton.innerHTML='Delete';
    removeButton.setAttribute('onclick', 'removeMe(this)');

    newRow.appendChild(removeButton);
        
    var updateButton = document.createElement('button');
    updateButton.className ='btn btn-primary';
    updateButton.innerHTML='Update';
    updateButton.setAttribute('onclick', 'updateMe(this)');
    
    newRow.appendChild(updateButton);
         console.log(myFormData);
    }
    else{
        alert("Enter full details of employee");
    }
    document.getElementById("name").value='';
    document.getElementById("emid").value='';
    document.getElementById("de").value='';
    document.getElementById("name").focus();
       
}


function del(){
    list.innerHTML='';
    if(flag==false){        
 myFormData=[];
    }
    flag=false;
}

function removeMe(item){
    var p= item.parentElement;
    var nam,emply,desig;
    nam=p.children[0].innerText;
    emply=p.children[1].innerText;
    desig=p.children[2].innerText;
     var i;
    var x=document.getElementById("myTable").rows.length;
   
   for( i=0;i<x-1;i++){
       if(emply==myFormData[i].employeeID)
           break;  
   }  
    var another=[];
delete myFormData[i];
  another = myFormData.filter(function (el) {
 return el != null;
});
    
     myFormData = Array.from(another);
console.log(myFormData);

    p.parentElement.removeChild(p);
    
}

var na,em,de,x,i=-1;
function updateMe(item){
    
    var w=item.parentElement;
     x = document.getElementById("myTable").rows.length;
    
    na=w.children[0].innerText;
    em=w.children[1].innerText;    
    de=w.children[2].innerText;
    
    document.getElementById("name").value=na;
    document.getElementById("emid").value=em;
    document.getElementById("de").value=de;
    
    
    var z=w.children[3];
    z.parentElement.removeChild(z);
    var y=w.children[3];
    y.parentElement.removeChild(y);
}

function update(){
    var i;
   for( i=0;i<x-1;i++){
       
       if((myFormData[i]!=undefined)&&(em==myFormData[i].employeeID))
           break;  
   }
      if((document.getElementById("name").value!="")&&(document.getElementById("emid").value!="")&&(document.getElementById("de").value!=""))
    {
    myFormData[i]=
    {name:document.getElementById("name").value,
     employeeID:document.getElementById("emid").value,
     designation:document.getElementById("de").value};
        flag=true;
    del();

     var tsd = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var ar=[];
    for(var i=0;i<myFormData.length;i++){
        var newRow   = tsd.insertRow();
        for(var j=0;j<3;j++){
        ar[j]=newRow.insertCell(j);
    }
        var newText0  = document.createTextNode(myFormData[i].name);
          if(myFormData[i].name!=""){
                ar[0].appendChild(newText0);
                }
         else{
        alert("Enter Name");
            }
        var newText1  = document.createTextNode(myFormData[i].employeeID);
            if(myFormData[i].employeeID!=""){
                ar[1].appendChild(newText1);
    }
    else{
        alert("Enter EMployee ID");
    }
        var newText2  = document.createTextNode(myFormData[i].designation);
    if(myFormData[i].designation!=""){
        ar[2].appendChild(newText2);
    }
    else{
        alert("Enter Designation");
    }  
  
        
    var removeButton = document.createElement('button');
    removeButton.className='btn btn-danger';
    removeButton.innerHTML='Delete';
    removeButton.setAttribute('onclick', 'removeMe(this)');
    newRow.appendChild(removeButton);
    
    var updateButton = document.createElement('button');
    updateButton.className ='btn btn-primary';
    updateButton.innerHTML='Update';
    updateButton.setAttribute('onclick', 'updateMe(this)');  
    newRow.appendChild(updateButton);
    }
       console.log(myFormData);  
    }
    else{
        alert("Enter full details of employee");
    }
    document.getElementById("name").value='';
    document.getElementById("emid").value='';
    document.getElementById("de").value='';
    document.getElementById("name").focus();
    
   
}

  var data = [{
        name: "John",
        employeeID: 20,
        designation: "sada"
    }, {
        name: "Jack",
        employeeID: 50,
        designation: "xas"
    }, {
        name: "Son",
        employeeID: 45,
        designation: "vxc"
    }];
function read(){
    count++;
  
    
      var tsd = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var ar=[];
    for(var i=0;i<data.length;i++){
        var newRow   = tsd.insertRow();
        for(var j=0;j<3;j++){
        ar[j]=newRow.insertCell(j);
    }
        var newText0  = document.createTextNode(data[i].name);
          if(data[i].name!=""){
                ar[0].appendChild(newText0);
                }
         else{
        alert("Enter Name");
            }
        var newText1  = document.createTextNode(data[i].employeeID);
            if(data[i].employeeID!=""){
                ar[1].appendChild(newText1);
    }
    else{
        alert("Enter EMployee ID");
    }
        var newText2  = document.createTextNode(data[i].designation);
    if(data[i].designation!=""){
        ar[2].appendChild(newText2);
    }
    else{
        alert("Enter Designation");
    }  
  
        
    var removeButton = document.createElement('button');
    removeButton.className='btn btn-danger';
    removeButton.innerHTML='Delete';
    removeButton.setAttribute('onclick', 'removeMe(this)');
    newRow.appendChild(removeButton);
    
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
    }
  
    
