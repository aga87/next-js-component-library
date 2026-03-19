import { Heading, Divider } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";
import { playgroundSections } from "../config";

export const TypographyPlayground = () => {
  const section = playgroundSections.typography;

  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components responsible for text structure, hierarchy, and readable content presentation."
    >
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
    </PlaygroundGroup>
  );
};
