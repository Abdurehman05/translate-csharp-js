function main() {
  // Put your code here
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  console.log("All Place Names");

  for (let name of names) {
    console.log(name)
  }
  console.log("")

  const namesStartWithThe = names.filter(name => {
    if (name.includes("The")) {
      return name
    }
  })

  console.log("'The' Place Names")
  for (name of namesStartWithThe) {
    console.log(name)
  }

}

main();