const wrapper = document.getElementById("wrapper");

for (let i = 1; i < 81; i++) {
  let div = document.createElement("div");
  animeCircle = wrapper.appendChild(div);
  animeCircle.classList.add("anime-circle");
}

let circles = document.querySelectorAll(".anime-circle");

circles.forEach(function(circle, index) {
    let durationTime = Math.floor(Math.random() * (5000 - 3000 + 1) + 3000)
    setTimeout(function() {
  
        let hue = Math.floor(Math.random() * 360) + 1
        let saturation = 100;
        let lum = 70;
        
        let radius = Math.floor(Math.random() * (50 - 25 + 1) + 25)
        
        let horizontal = Math.floor(Math.random() * 81) * (Math.round(Math.random()) ? 1 : -1)
        let vertical = Math.floor(Math.random() * 81) * (Math.round(Math.random()) ? 1 : -1)
        let newSize = Math.random() * (1.75 - 0.45) + 0.45;

        circle.animate([
            {
                transform: "translate(" + 0 + "vh" + "," + 0 + "vh" + ")" + "scale(1)", 
                offset: 0},
            {
                transform: "translate(" + horizontal + "vh" + "," + vertical + "vh" + ")" + "scale(" + newSize + ")", 
                backgroundColor: "hsl(" + hue + "," + saturation + "%" + "," + lum + "%" + ")", 
                borderRadius: radius + "%",
                offset: 1},
        ], {
            duration: 2000, //milliseconds
            // cubic-bezier(.27,1.01,.88,.46)
            easing: 'ease-out', //'linear', a bezier curve, etc.
            delay: 10, //milliseconds
            iterations: Infinity, //or a number
            direction: 'alternate', //'normal', 'reverse', etc.
            fill: 'forwards'
        })
  
    }, index + durationTime)

})



console.log(circles);