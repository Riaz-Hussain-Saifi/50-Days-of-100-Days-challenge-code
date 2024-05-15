// Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(
  item1: string,
  item2: string,
  item3: string,
  item4: string,
  item5: string
) {
  console.log(
    `Your sandwich has ${item1}, ${item2}, ${item3}, ${item4}, and ${item5}.`
  );
}

sandwich("ham", "cheese", "lettuce", "tomato", "mayo");

function sandwich2(item1: string, item2: string, item3: string, item4: string) {
  console.log(`Your sandwich has ${item1}, ${item2}, ${item3}, and ${item4}.`);
}

sandwich2("ham", "cheese", "lettuce", "tomato");

function sandwich3(item1: string, item2: string, item3: string) {
  console.log(`Your sandwich has ${item1}, ${item2}, and ${item3}.`);
}

sandwich3("ham", "cheese", "lettuce");
