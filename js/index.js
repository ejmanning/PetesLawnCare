  let info = ["Heading: ", "Paragraph: "]

	let jsonFile = ["js/home.json", "js/about.json", "js/services.json", "js/testimonials.json"]


function pageDisplay(jsonArray) {
  let h1 = "";


	fetch(jsonFile[`${jsonArray}`])
		.then(function(resp){
			return resp.json();
		})

		.then(function(data){
			let y;
			let x = 0;

				while(x < info.length){
					for (x in data){
            h1 += data[x] + "</h1><p>";
						x++;
					}
          h1 += "</p>"

				}
      document.getElementById("h").innerHTML = h1;

		})
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("Service worker registered"))
      .catch(err => console.log("Service worker not registered", err));
  });
}
