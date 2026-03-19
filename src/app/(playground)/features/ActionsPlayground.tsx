import { Button } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";

export const ActionsPlayground = () => {
  return (
    <PlaygroundGroup
      title="Actions"
      description="Components that trigger user-initiated operations or events."
    >
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
    </PlaygroundGroup>
  );
};
