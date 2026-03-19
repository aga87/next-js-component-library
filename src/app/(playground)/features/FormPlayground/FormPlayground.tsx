import {
  PlaygroundGroup,
  PlaygroundSection,
  PlaygroundPreview,
} from "../../components";
import { playgroundSections } from "../../config";
import {
  ColorPickerExampleBasic,
  ColorPickerExampleWithDefaultValue,
  ColorPickerExampleWithDescription,
} from "./components";

export const FormPlayground = () => {
  const section = playgroundSections.form;

  return (
    <PlaygroundGroup
      id={section.id}
      title={section.label}
      description="Components used to capture, validate, and submit user input."
    >
      <PlaygroundSection
        title="Color Picker"
        description={
          <>
            Multi-select color input built with checkbox semantics. Supports
            selecting one or more options and is intended for product, filter,
            or preference selection flows.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <ColorPickerExampleBasic />
          <ColorPickerExampleWithDefaultValue />
          <ColorPickerExampleWithDescription />
        </PlaygroundPreview>
      </PlaygroundSection>
    </PlaygroundGroup>
  );
};
