/*
This is simple demonstration of how Promisses work and its flow execution.
*/

const start = (argumento) =>{
    console.log(argumento)
    return new Promise((resolve, reject) => {
        resolve("Then it is executed.")
    });
}

console.log("***Let's get started!***")
start("This is gonna be executed first,")
.then((res) => {
    console.log(res)
    return new Promise( (resolve, reject) => {
		if(1>2){
			resolve("This one is not gonna be resolved")
		} else {
			reject("This first one is gonna be rejected")
		}
	})
})
.then(()=>{
    console.log("This one is not gonna be called")
})
.catch(res => {
    console.log(res)
    return new Promise( (resolve) => {
        resolve("This \"then\" is executed only if the resolve where this expression is written is executed.")
    })
})
.then((resolved) => {
    console.log(resolved)
	console.log("Now, we have to wait for the setTimeout be fired...")
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log("That is it! it was fired, we now can proceed with the execution")
		if("PHP">"Node.js"){
			resolve("To be resolved before finally execution")
		} else {
			reject("How come? How do you dare?")
		}},2000)}
    )
})
.then((received) => {
	console.log(received)
})
.catch((received) => {
	console.log(received)
})
.finally(() => {
    console.log("The \"finally\" is always executed.")
    return new Promise( (resolve, reject) => {
		//ternary operator down bellow
        "blue" == "white" ? resolve("No, definitely it is not. ") : reject("sent from finally") 
    })
})
.catch((resolved) => {
    console.log("Oohh, we just got here! ",resolved)
    return new Promise( (resolve, reject) => {
		if ("Maradona" > "Pele"){
			console.log("No way...")
			resolve()
		} else {
			console.log("So now it is ready to be rejected.")
			rejected()
		}
    })
}) 
.then(() => {
    console.log("It is not possible to be called")
})
.then(() => {
    console.log("This one neither...")
})
.then(() => {
    console.log("Nevermind!")
})
.catch( () => {
    return new Promise( (resolve, reject) => {
        console.log("This rejected is executed")
        reject()
    }) 
})
.then( () => {
    return new Promise( (resolve, reject) => {
        console.log("unfortunally, the execution flow does not let this part to be executed")
    })
})
.catch(() => {console.log("Last catch and...")})
.finally(() => {
    console.log("Last finally! \n ***end of execution***")
})