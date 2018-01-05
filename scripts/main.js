"use strict";

const $ = require('jquery');


const getApiKey = (file) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: './key.json'
    }).done((key) => {
      resolve(key);
    });
  });
};

const getNasaData = (key) => {
  return new Promise((resolve, reject)=>{
    console.log(key);
    $.ajax({
      // url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-13&api_key=${key.apiKey}`
      url: 'sampledata.json'
    }).done(data => {
      resolve(data);
    });
  });
};

const displayHazardous = (data => {
  console.log('data: ', data);
  let days = Object.keys(data.near_earth_objects);
  console.log('data.near_earth_objects: ', days);
  days.forEach(day=>{
    console.log('rocks: ',data.near_earth_objects[day]);
    console.log('','');
  });
});

getApiKey()
.then(key=>{
  getNasaData(key)
.then( (data) =>{
    displayHazardous(data);
  });
});

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
//9DjDuSoLfwwxjxHX67Nq14pcCLMnypyQEnt6cEBr