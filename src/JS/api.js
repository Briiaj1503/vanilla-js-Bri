function post(text) {
  fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ id: text }),
    body: JSON.stringify({ task: text }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

export { post };



