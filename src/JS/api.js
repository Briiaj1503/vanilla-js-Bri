async function post(text) {
  let response = await fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ id: text }),
    body: JSON.stringify(text),
  });
  return response.json();
}

async function get() {
  const response = await fetch(
    "http://localhost:3000/api/task",
    configuration("GET")
  );
  const tasks = await response.json();
  return tasks;
}

async function deleteTask(id) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "DELETE",
  });
  const deleteTask = await response.json();
  return deleteTask;
}

export { post, get, deleteTask };
