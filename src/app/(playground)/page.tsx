import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Component Library",
    description: "Component Library",
    alternates: {
      canonical: `/`,
    },
  };
}

export default async function Playground() {
  return (
    <>
      <h1>Playground</h1>
    </>
  );
}
