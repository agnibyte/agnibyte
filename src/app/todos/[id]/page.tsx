// app/todos/[id]/page.tsx
export async function generateStaticParams() {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos = await res.json();
  return todos.map((post) => ({
    id: post.id.toString(),
  }))
}

// Fetch a specific todo based on ID
async function getTodoById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todo = await res.json();
  return todo;
}

interface TodoDetailsProps {
  params: { id: string };
}

export default async function TodoDetailsPage({ params }: TodoDetailsProps) {
  const todo = await getTodoById(params.id);

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}
