// app/people/[id]/page.tsx

// Sample people data (in a real app, fetch from an API)
const people = [
  { id: "1", name: "John Doe", bio: "Software Engineer at XYZ Corp." },
  { id: "2", name: "Jane Smith", bio: "Marketing Specialist at ABC Inc." },
  { id: "3", name: "Michael Johnson", bio: "Freelance Photographer and Designer." },
];

export default function PersonProfile({ params }: { params: { id: string } }) {
  const person = people.find((individual) => individual.id === params.id);

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.bio}</p>
    </div>
  );
}
