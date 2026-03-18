import { type Metadata } from "next";
import {
  EmailLink,
  ExternalLink,
  Heading,
  NavLink,
  PhoneLink,
} from "@/app/components";
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
        title="External Link"
        description={
          <>
            External link component for navigation to third-party pages. Renders
            an anchor element with <code>target=&quot;_blank&quot;</code> and
            secure <code>rel</code> attributes.
          </>
        }
      >
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>
      </PlaygroundSection>

      <PlaygroundSection
        title="Email Link"
        description={
          <>
            Link component for sending emails using the <code>mailto:</code>{" "}
            protocol. Accepts an email address and optionally custom link text.
          </>
        }
        exampleClassName="flex flex-col gap-3"
      >
        {/* default rendering */}
        <EmailLink email="hello@example.com" />

        {/* custom label */}
        <EmailLink email="support@example.com">Email support</EmailLink>
      </PlaygroundSection>

      <PlaygroundSection
        title="Phone Link"
        description={
          <>
            Link component for initiating phone calls using the{" "}
            <code>tel:</code> protocol.
          </>
        }
        exampleClassName="flex flex-col gap-3"
      >
        <PhoneLink tel="+31612345678" />

        <PhoneLink tel="+31612345678">Call us</PhoneLink>
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
