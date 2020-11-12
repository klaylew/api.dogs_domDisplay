'use strict';

function getDogImages() {
  // console.log("Running get dog images")
  fetch(html)
    .then((res) => res.json())
    .then((resJson) => {
      let output = "";
      resJson.message.forEach(function(html){
        console.log(html);
        output += 
        `
        <div class="gallery">
          <img src=${html} alt="Img" height="400">
        </div>      
        `;
      });
      document.getElementById('photos').innerHTML = output;
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

/* function generateGalleryHtml(){
  let galleryHtml = "";
  
  for(let i=0, i < ${responseJson.message).length, i++) {
    html = 
    `
      <div class="gallery">
          <a target="_blank" href="img_5terre.jpg">
          <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
          </a>
      </div>      
    `
  }
}

function displayResults(responseJson) {
  console.log(responseJson);

  $('.photos').html(

    // `<img src="${responseJson.message}" class="results-img">`
    `
    <div class="gallery">
        <a target="_blank" href="img_5terre.jpg">
        <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
        </a>
    </div>
    `
  )
  //display the results section
  $('.results').removeClass('hidden');
} */

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    // html = "";
    html = address + $("#number").val();
    console.log(html);
    // console.log("watchForm ran");
    getDogImages();
  });
}

//function to create API fetch string with entered number of pics
let html = ""
let address = 'https://dog.ceo/api/breeds/image/random/';


/* function makeFetch(){
  let address = "https://dog.ceo/api/breeds/image/random/";
  address = address + $("#number").val();
  console.log(address);
  return address;  
} */

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


/** 
 * 
 * need to hold data for number of pictures with a default value of 3
 * 
 * retrieve photo addresses and print to the console
 *  
 * 
 */