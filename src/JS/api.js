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
  const response = await fetch("http://localhost:3000/api/task", {
    method: "GET",
  });

  const getTasks = await response.json();
  return getTasks;
}

async function deleteTask(id) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "DELETE",
  });
  const deleteTask = await response.json();
  return deleteTask;
}

async function updateTask(task_id, task) {
  const response = await fetch("http://localhost:3000/api/task/" + task_id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postTask = await response.json();
  return postTask;
}

export { post, get, deleteTask, updateTask };
