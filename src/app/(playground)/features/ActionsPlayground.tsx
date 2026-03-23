import { Button } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";
import { playgroundSections } from "../config";

export const ActionsPlayground = () => {
  const section = playgroundSections.actions;
  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components that trigger user-initiated operations or events."
    >
      <PlaygroundSection
        title="Button"
        description={
          <>
            Interactive button component used to trigger actions. Supports
            primary and secondary variants, solid and outline appearances, as
            well as disabled and full-width states.
          </>
        }
      >
        <PlaygroundPreview>
          <Button>Primary</Button>
          <Button variant="primary" appearance="outline">
            Primary (outline)
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" appearance="outline">
            Secondary (outline)
          </Button>
          <Button disabled>Primary disabled</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
        </PlaygroundPreview>

        <Button full>Full width</Button>
      </PlaygroundSection>
    </PlaygroundGroup>
  );
};
