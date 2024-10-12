// app/todos/page.tsx
import Link from "next/link";

// Fetch data on the server-side (SSR)
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos = await res.json();
  return todos.slice(0, 20); // limit to 10 todos
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo: { id: number, title: string, completed: boolean }) => (
          <li key={todo.id}>
            <strong>ID : {todo.id}--</strong>
            <Link href={`/todos/${todo.id}`}>
              {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
