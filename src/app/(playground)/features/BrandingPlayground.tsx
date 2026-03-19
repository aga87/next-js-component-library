import { Logo, SocialMediaIcon } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";
import { playgroundSections } from "../config";

export const BrandingPlayground = () => {
  const section = playgroundSections.branding;

  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components that represent brand identity or external platforms."
    >
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
    </PlaygroundGroup>
  );
};
