import { Tag } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";
import { playgroundSections } from "../config";

export const DataDisplayPlayground = () => {
  const section = playgroundSections.dataDisplay;
  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components used to represent structured or semantic data within the UI."
    >
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
    </PlaygroundGroup>
  );
};
