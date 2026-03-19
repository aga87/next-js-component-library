import { type Metadata } from "next";
import {
  Button,
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
  Tag,
  TextOverlay,
  Tooltip,
} from "@/app/components";
import { PlaygroundPreview, PlaygroundSection } from "./components";

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
    <main className="py-10 max-w-2xl">
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
      >
        <PlaygroundPreview orientation="vertical">
          <EmailLink email="hello@example.com" />
          <EmailLink email="support@example.com">Email support</EmailLink>
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Phone Link"
        description={
          <>
            Link component for initiating phone calls using the{" "}
            <code>tel:</code> protocol.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <PhoneLink tel="+31612345678" />
          <PhoneLink tel="+31612345678">Call us</PhoneLink>
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Social Media Icon"
        description={
          <>
            Icon component representing common social media platforms. Intended
            to be used inside links or social navigation components.
          </>
        }
      >
        <PlaygroundPreview>
          <SocialMediaIcon variant="instagram" />
          <SocialMediaIcon variant="facebook" />
          <SocialMediaIcon variant="linkedin" />
          <SocialMediaIcon variant="youtube" />
        </PlaygroundPreview>
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
      >
        <PlaygroundPreview orientation="vertical">
          <Heading level={1}>Heading level 1</Heading>
          <Heading level={2}>Heading level 2</Heading>
          <Heading level={3}>Heading level 3</Heading>
          <Heading level={4}>Heading level 4</Heading>
          <Heading level={5}>Heading level 5</Heading>
          <Heading level={6}>Heading level 6</Heading>
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Logo"
        description={
          <>
            Brand logo rendered using Next.js Image for optimized loading and
            responsive scaling.
          </>
        }
      >
        <PlaygroundPreview>
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
        </PlaygroundPreview>
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
      >
        <div className="pt-2">
          <DotLoader />
        </div>
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
      >
        <PlaygroundPreview orientation="vertical">
          <TextOverlay label="Locked" isVisible>
            <div className="max-w-md h-32 flex items-center justify-center border border-border-default">
              Content. Content. Content.
            </div>
          </TextOverlay>

          <TextOverlay label="Locked" isVisible={false}>
            <div className="max-w-md h-32 flex items-center justify-center border border-border-default">
              Content. Content. Content.
            </div>
          </TextOverlay>
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Tag"
        description={
          <>
            Small inline label used to highlight metadata such as status,
            category, or feature flags.
          </>
        }
      >
        <PlaygroundPreview>
          <Tag>New</Tag>
          <Tag>Beta</Tag>
          <Tag>Featured</Tag>
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Tooltip"
        description={
          <>
            Generic tooltip component used to display contextual information
            when hovering or focusing an element. If no trigger is provided, the
            component defaults to rendering an information icon.
          </>
        }
      >
        <PlaygroundPreview>
          <Tooltip
            content={
              <div className="space-y-2">
                <p>Account balance</p>
                <p>Includes pending transactions.</p>
                <a className="underline" href="#">
                  Learn more
                </a>
              </div>
            }
          >
            <span>Balance</span>
          </Tooltip>

          <Tooltip content="This value includes pending transactions." />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Button"
        description={
          <>
            Interactive button component used to trigger actions. Supports
            primary and secondary variants as well as disabled and full-width
            states.
          </>
        }
      >
        <PlaygroundPreview>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button disabled>Primary disabled</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
        </PlaygroundPreview>

        <Button full>Full width</Button>
      </PlaygroundSection>
    </main>
  );
}
