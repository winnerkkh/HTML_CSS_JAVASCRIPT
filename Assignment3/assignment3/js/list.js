// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload=function(){

    var listContainer=document.querySelector("#favouriteList");
    var myListFruits ="<ol>";
   
    for(var i=0; i<fruits.length; i++){
       myListFruits +="<li>" + fruits[i]+"</li>";
    }

    myListFruits +="</ol>";
    listContainer.innerHTML=myListFruits ;
    

    var dir=document.querySelector("#directory");
    var directoryOrderList ="<ul>";
        for(var i=0;i<directory.length;i++){
            directoryOrderList +="<li>";

            if(directory[i].type==="file"){
            directoryOrderList += directory[i].name;}
            
            else{
                directoryOrderList += directory[i].name+"<ul>";

                for (var j=0;j<directory[i].files.length;j++){
                    directoryOrderList+="<li>"+directory[i].files[j].name+"</li>";
            }
            
           directoryOrderList+="</ul>";
       }
         directoryOrderList+="</li>";
    }
    directoryOrderList += "</ul>";
    dir.innerHTML=directoryOrderList;
};


