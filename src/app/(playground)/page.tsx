import { type Metadata } from "next";
import { Heading, NavLink } from "@/app/components";
import { PlaygroundSection } from "./components";

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
    <main className="py-10">
      <h1 className="text-3xl font-bold mb-4">Playground</h1>

      <PlaygroundSection
        title="Navigation Link"
        description={
          <>
            Internal navigation link component used for building application
            menus and navigation structures. Wraps Next.js <code>Link</code> and
            provides consistent styling for in-app navigation.
          </>
        }
      >
        <NavLink href="/">Home</NavLink>
      </PlaygroundSection>

      <PlaygroundSection
        title="Heading"
        description={
          <>
            Semantic heading component used for page and section titles.
            Typography size and weight are defined in the global Tailwind
            <code> base </code> layer.
          </>
        }
        exampleClassName="flex flex-col gap-3"
      >
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
        <Heading level={4}>Heading level 4</Heading>
      </PlaygroundSection>
    </main>
  );
}
