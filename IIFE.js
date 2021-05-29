/*
This is a Immediatly Invoked Function Expression example, i.e.,
the function declared in this way are immediatly call but its attributes doest belong to gloval scope.
*/
(function(){
	let localVariable =  "does not belong to the global scope"
	console.log("This code is immediatly called when this file is executed, but the \"localVariable\"", localVariable  )
})()

