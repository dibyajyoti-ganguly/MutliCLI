const fs = require("fs");
const { Command } = require("commander");
const { parse } = require("path");
const program = new Command();

program.name("todo").description("CLI to add,delete todos").version("0.8.0");

program
  .command("add") //CLI to add items to todo
  .description("Adds a string to the json")
  .argument("<string...>", "string to add")
  .action((strArray) => {
    const str = strArray.join(" ");
    fs.readFile("./todos.json", "utf-8", (err, data) => {
      if (err) {
        console.error("Failed to read file:", err);
        return;
      } else {
        const parsedData = JSON.parse(data);
        const obj = {
          id: parsedData.length + 1,
          title: str,
        };
        parsedData.push(obj);
        fs.writeFile(
          "./todos.json",
          JSON.stringify(parsedData, null, 2),
          (err) => {
            if (err) {
              console.error("An error occurred:", err);
            } else {
              console.log("File written successfully!");
            }
          }
        );
      }
    });
  });

program
  .command("delete") //CLI to remove items from todo
  .description("Delets an item from the json")
  .argument("<string...>", "string to delete")
  .action((strArray) => {
    const str = strArray.join(" ");
    fs.readFile("./todos.json", "utf-8", (err, data) => {
      if (err) {
        console.error("Failed to read file:", err);
        return;
      } else {
        const parsedData = JSON.parse(data);

        let c = 0;

        parsedData.map((item, index) => {
          if (str === item.title) {
            parsedData.splice(index, 1);
            c = 1;
            return;
          }
        });

        if (c === 0) console.log("Todo doesn't exist");
        else {
          parsedData.map((item, index) => {
            item.id = index + 1;
          });

          fs.writeFile(
            "./todos.json",
            JSON.stringify(parsedData, null, 2),
            (err) => {
              if (err) {
                console.error("An error occurred:", err);
              } else {
                console.log("File written successfully!");
              }
            }
          );
        }
      }
    });
  });

program
  .command("mark") //CLI to mark a todo as completed
  .description("Marks a todo as done")
  .argument("<string...>", "string to mark as done")
  .action((strArray) => {
    const str = strArray.join(" ");
    fs.readFile("./todos.json", "utf-8", (err, data) => {
      if (err) {
        console.error("Failed to read file:", err);
        return;
      } else {
        const parsedData = JSON.parse(data);

        parsedData.map((item, index) => {
          if (str === item.title) {
            item.status = "completed";
            return;
          }
        });

        fs.writeFile(
          "./todos.json",
          JSON.stringify(parsedData, null, 2),
          (err) => {
            if (err) {
              console.error("An error occurred:", err);
            } else {
              console.log("File written successfully!");
            }
          }
        );
      }
    });
  });

program.parse();
