//This is a simple object visualizer. Take it for granted by now.
const visualizer = {
	description: "This object is intended to display third party object content",
	warnings: (message) => {
		console.log(message);
	},
	viewObject: (object) => {
		console.log("Object overview: ", object);
	}
}



//inline object creation:
const person = {
	name: "Hugo",
	spoken_languages: ["English, Portuguese, Spanish"],
	academic_background:{
		masters_Degree: "Computer Science",
		B_SC: "Engeneering"
	},
	salute: () =>{
		console.log("hello there!")
	}
}

visualizer.warnings("This is the original object created above")
visualizer.viewObject(person)
delete person.academic_background // field deletion
visualizer.warnings("This is the after \"academic_background\" deletion")
visualizer.viewObject(person)
person.salute()




