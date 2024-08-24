let todo = [];

// main menu -- options
let req = prompt("TODO APP \n Select Options: add, edit, remove, list, quit");

while (true) {
  // quit option
  if (req == "quit") {
    console.log("You've quit the app!");
    break;
  }

  // add option
  if (req == "add") {
    let addTask = prompt("Enter to Add a Task.");
    todo.push(addTask);
    console.log("task added");
  }

  // edit option
  if (req == "edit") {
    let editTask = prompt("Enter index of task to edit");
    if(editTask >=0 && editTask < todo.length){
      let newTask = prompt("Enter a new name for task");
      todo[editTask] = newTask;
      console.log("task edited");
    }else{
      console.log("incorrect selection");
    }
  }

  // remove option
  if (req == "remove") {
    let remTask = prompt("Enter a Task to Remove.");
    todo.splice(remTask, 1);
    console.log("task removed");
  }

  // list option
  if (req == "list") {
    console.log(" <---- TODO ITEMS ---- > ");
    for (i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------------");
  }

  req = prompt("TODO APP \n Select Options: add, remove, list, quit");
}
