// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  const params = new URLSearchParams(document.location.search)
  // input
  const radius = params.get("radius")
  console.log(radius)
  // calculate
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  // output
  document.getElementById("answer").innerHTML = "Volume is: " + volume.toFixed(5)
}