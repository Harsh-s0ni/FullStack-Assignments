async function fectchData() {
  const object = {};
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => (object.todo = data.title));
  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => (object.post = data.title));
  console.log(object);
}
fectchData();
