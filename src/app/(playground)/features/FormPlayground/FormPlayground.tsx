import { ErrorMessage, Label, MailIcon } from "@/app/components";
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
  InputFieldAutocompleteExample,
  InputFieldBasicInsideLabelExample,
  InputFieldBasicOutsideLabelExample,
  InputFieldDecimalBasicExample,
  InputFieldDigitsBasicExample,
  InputFieldIntegerBasicExample,
  InputFieldWithBlurValidationExample,
  InputFieldDateMaskAndValidationExample,
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
        title="Label"
        description={
          <>
            Form label used for single input controls. Supports required
            indicator and optional icon.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <Label inputId="example-basic" label="Full name" isRequired={false} />
          <Label inputId="example-required" label="Email" isRequired />
          <Label
            inputId="example-icon"
            label="Email"
            isRequired
            icon={<MailIcon className="h-3 w-3 text-text-secondary" />}
          />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Error Message"
        description={
          <>
            Displays validation feedback for form fields. Typically used in
            combination with inputs and referenced via{" "}
            <code>aria-describedby</code>.
          </>
        }
      >
        <PlaygroundPreview>
          <ErrorMessage errorMsg="This field is required" />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Input Field"
        description={
          <>
            Controlled input field using <code>useTextInput</code> for state
            management and validation on blur.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <InputFieldBasicInsideLabelExample />
          <InputFieldBasicOutsideLabelExample />
          <InputFieldDigitsBasicExample />
          <InputFieldIntegerBasicExample />
          <InputFieldDecimalBasicExample />
          <InputFieldWithBlurValidationExample />
          <InputFieldDateMaskAndValidationExample />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Input Field with Autocomplete"
        description={
          <>
            Input with autocomplete suggestions. Filters options based on user
            input and supports keyboard navigation.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <InputFieldAutocompleteExample />
        </PlaygroundPreview>
      </PlaygroundSection>

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
