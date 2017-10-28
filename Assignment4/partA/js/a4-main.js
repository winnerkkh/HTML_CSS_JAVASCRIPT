var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


// window.onload function is needed to work the code in HTML file
window.onload = loadTableWithFilters;

function loadTableWithFilters (){
    var dataArray = document.querySelector("#main-table-body");
        dataArray.innerHTML = "";

    //filtering the data from data.js

    for (var i=0; i<petData.length; i++){
        
        //filtering the type of pets
        //if (petData[i].age>=filterAgeMin && petData[i].age<= filterAgeMax){
        if(((petData[i].type == filterType) || (filterType == "")) && (petData[i].age >= filterAgeMin) && (petData[i].age <= filterAgeMax)){
        //if((petData[i].type =="dog" && filterType=="dog") || (petData[i].type =="cat" && filterType=="cat") || (petData[i].type =="bird" && filterType=="bird") || (filterType=="")) {
           
           //create new variables to create new elements
            var tableRow = document.createElement("tr");
            var tableDetail = document.createElement("td");
            var imageData = document.createElement("img");

            //assign the values to the imgData
            imageData.setAttribute("src", petData[i].image.src);
            imageData.setAttribute("alt", petData[i].image.alt);
            imageData.setAttribute("width", petData[i].image.width);
            imageData.setAttribute("height", petData[i].image.height);

            // placing the image data into the <td>
            tableDetail.appendChild(imageData);

            //create the second table detail
            var secondTableDetail = document.createElement("td");
            var headName = document.createElement("h4");
            var paraGraph = document.createElement("p");

            // create text node
            var tempPlacingHead = document.createTextNode(petData[i].name);

            //combine inside h tag
            headName.appendChild(tempPlacingHead);

            // conbine data description
            paraGraph.innerHTML = petData[i].description;

            //
            var spanElement = document.createElement("span");
            var ageVariable = "Age: "+ petData[i].age+ " years old.";
            spanElement.innerHTML = ageVariable;

            //putting the data into td(table detail)
            secondTableDetail.appendChild(headName);
            secondTableDetail.appendChild(paraGraph);
            secondTableDetail.appendChild(spanElement);

            //putting the data into tr(table row)
            tableRow.appendChild(tableDetail);
            tableRow.appendChild(secondTableDetail);

            //putting the data into dataArray variable which is the global variable that can be used in HTML 
            dataArray.appendChild(tableRow);
        }
    }
};

// filtering dog
function filterDog () {
    
    filterType = "dog";
    loadTableWithFilters();
};

// filtering cat
function filterCat (){
    
    filterType = "cat";
    loadTableWithFilters();
};

// filtering bird
function filterBird (){

    filterType = "bird";
    loadTableWithFilters();
};

// filtering the age less than 1 year
function filter_zero_1 (){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1
    loadTableWithFilters();
};

// filtering the age between 1 and 3
function filter_1_3 (){
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();

};

// filtering the age more than 4
function filter_4_plus (){
    filterType = "";
    filterAgeMin = 4;

    // Number.MAX_VALUE is a built-in variable to express  
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};

// filtering all the pets
function filterAllPets (){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax  = Number.MAX_VALUE;
    loadTableWithFilters();
};

/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: KYUNGHOON KIM || Student ID: 056-845-100 || Date: July 20th, 2017 
* 
********************************************************************************/