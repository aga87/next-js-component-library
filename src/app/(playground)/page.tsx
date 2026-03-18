import { type Metadata } from "next";
import {
  Divider,
  DotLoader,
  EmailLink,
  ExternalLink,
  Heading,
  Loader,
  Logo,
  NavLink,
  PhoneLink,
  SocialMediaIcon,
  TextOverlay,
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
        title="Social Media Icon"
        description={
          <>
            Icon component representing common social media platforms. Intended
            to be used inside links or social navigation components.
          </>
        }
        exampleClassName="flex items-center gap-3"
      >
        <SocialMediaIcon variant="instagram" />
        <SocialMediaIcon variant="facebook" />
        <SocialMediaIcon variant="linkedin" />
        <SocialMediaIcon variant="youtube" />
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

      <PlaygroundSection
        title="Logo"
        description={
          <>
            Brand logo rendered using Next.js Image for optimized loading and
            responsive scaling.
          </>
        }
        exampleClassName="flex items-center gap-8"
      >
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
      </PlaygroundSection>

      <PlaygroundSection
        title="Divider"
        description={
          <>
            Horizontal divider used to separate sections of content. Renders a
            styled <code>hr</code> element with the default design-system border
            color.
          </>
        }
        exampleClassName="flex flex-col gap-6"
      >
        <div className="space-y-3">
          <p className="text-sm text-text-secondary">
            Content above the divider
          </p>
          <Divider />
          <p className="text-sm text-text-secondary">
            Content below the divider
          </p>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Loader"
        description={
          <>
            Loading spinner used to indicate in-progress states such as data
            fetching, form submission, or background processing.
          </>
        }
      >
        <Loader />
      </PlaygroundSection>

      <PlaygroundSection
        title="DotLoader"
        description={
          <>
            Loader component that displays an animated horizontal sequence of
            dots. Used for lightweight loading states where a spinner feels too
            heavy.
          </>
        }
        exampleClassName="w-full max-w-2xl pt-2"
      >
        <DotLoader />
      </PlaygroundSection>

      <PlaygroundSection
        title="Text Overlay"
        description={
          <>
            Component that overlays centered text on top of existing content.
            Commonly used for states such as loading, locked, or unavailable
            items.
          </>
        }
        exampleClassName="flex flex-col gap-6 max-w-sm"
      >
        <TextOverlay label="Locked" isVisible>
          <div className="h-32 flex items-center justify-center border border-border-default">
            Content. Content. Content.
          </div>
        </TextOverlay>

        <TextOverlay label="Locked" isVisible={false}>
          <div className="h-32 flex items-center justify-center border border-border-default">
            Content. Content. Content.
          </div>
        </TextOverlay>
      </PlaygroundSection>
    </main>
  );
}
