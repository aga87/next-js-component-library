import { Loader, DotLoader, TextOverlay } from "@/app/components";

import {
  PlaygroundGroup,
  PlaygroundPreview,
  PlaygroundSection,
} from "../components";

export const FeedbackPlayground = () => {
  return (
    <PlaygroundGroup
      title="Feedback"
      description="Components that communicate system state, progress, or availability to the user."
    >
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
          <div className="max-w-md">
            <TextOverlay label="Locked" isVisible>
              <div className="h-32 flex items-center justify-center border border-border-default">
                Content. Content. Content.
              </div>
            </TextOverlay>
          </div>

          <TextOverlay label="Locked" isVisible={false}>
            <div className="max-w-md h-32 flex items-center justify-center border border-border-default">
              Content. Content. Content.
            </div>
          </TextOverlay>
        </PlaygroundPreview>
      </PlaygroundSection>
    </PlaygroundGroup>
  );
};
