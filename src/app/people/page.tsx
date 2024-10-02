// app/people/page.tsx
import Link from "next/link";

// Sample people data
const people = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Michael Johnson" },
];

export default function PeopleList() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1>People List</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link href={`/people/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
