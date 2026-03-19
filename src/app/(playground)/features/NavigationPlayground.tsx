import { EmailLink, ExternalLink, NavLink, PhoneLink } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";
import { playgroundSections } from "../config";

export const NavigationPlayground = () => {
  const section = playgroundSections.navigation;

  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components that enable movement between pages, routes, or external resources."
    >
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
    </PlaygroundGroup>
  );
};
