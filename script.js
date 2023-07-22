"use strict";
// Unsplash API
const count = 10;
const apiKey = "chr7JTzTB2GUxCtaILMuQG2iIblTlu3L3pAKvBTntfw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

// on load
getPhotos();
