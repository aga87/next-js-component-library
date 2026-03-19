import { Tooltip } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";

export const OverlaysPlayground = () => {
  return (
    <PlaygroundGroup
      title="Overlays"
      description="Components that render layered UI elements above the main interface, typically triggered by interaction."
    >
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
    </PlaygroundGroup>
  );
};
