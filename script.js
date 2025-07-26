fetch("cars.json")
    .then(response => response.json())
    .then(values => {document.getElementById("p1").textContent = "Brand :" + values[0].brand
        document.getElementById("p1_nextline").textContent = "Model : " + values[0].model + " // " + "Year :" + values[0].year + " // " + "Color :" + values[0].color + " // "+"Price : " + values[0].price + "$"
    
    document.getElementById("p2").textContent = "Brand :" + values[1].brand
    document.getElementById("p2_nextline").textContent = "Model : " + values[1].model + " // " + "Year :" + values[1].year + " // " + "Color :" + values[1].color + " // "+"Price : " + values[1].price + "$"

    document.getElementById("p3").textContent = "Brand :" + values[2].brand
    document.getElementById("p3_nextline").textContent = "Model : " + values[2].model + " // " + "Year :" + values[2].year + " // " + "Color :" + values[2].color + " // "+"Price : " + values[2].price + "$"

    document.getElementById("p4").textContent = "Brand :" + values[3].brand
    document.getElementById("p4_nextline").textContent = "Model : " + values[3].model + " // " + "Year :" + values[3].year + " // " + "Color :" + values[3].color + " // "+"Price : " + values[3].price + "$"

    document.getElementById("p5").textContent = "Brand :" + values[4].brand
    document.getElementById("p5_nextline").textContent = "Model : " + values[4].model + " // " + "Year :" + values[4].year + " // " + "Color :" + values[4].color + " // "+"Price : " + values[4].price + "$"
    })