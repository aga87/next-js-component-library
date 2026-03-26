import { ErrorMessage, Label, MailIcon } from "@/app/components";
import {
  PlaygroundGroup,
  PlaygroundSection,
  PlaygroundPreview,
} from "../../components";
import { playgroundSections } from "../../config";
import {
  CheckboxExampleBasic,
  CheckboxExampleRequired,
  CheckboxExampleDisabled,
  CheckboxGroupExampleBasic,
  CheckboxGroupExampleDefaultValues,
  CheckboxGroupExampleRequired,
  CheckboxGroupExampleWithDescription,
  CheckboxGroupExampleDisabledOptions,
  ColorPickerExampleBasic,
  ColorPickerExampleRequiredWithValidation,
  ColorPickerExampleWithDefaultValue,
  ColorPickerExampleWithDescription,
  DropdownInputExample,
  DropdownInputExampleWithDefault,
  DropdownInputExampleWithValidation,
  DropdownInputExampleInsideLabel,
  InputFieldAutocompleteExample,
  InputFieldBasicInsideLabelExample,
  InputFieldBasicOutsideLabelExample,
  InputFieldDecimalBasicExample,
  InputFieldDigitsBasicExample,
  InputFieldIntegerBasicExample,
  InputFieldWithBlurValidationExample,
  InputFieldDateMaskAndValidationExample,
  MultiRangeSliderExample,
  RadioGroupExampleBasic,
  RadioGroupExampleWithDescriptions,
  RadioGroupExampleWithValidation,
  SubmitButtonExampleBasic,
  SubmitButtonExampleExternal,
  SubmitButtonExampleLoading,
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
        title="Dropdown Input"
        description={
          <>
            Select input component built with <code>Listbox</code> for
            accessible option selection. Supports validation, error states, and
            consistent styling with other form fields.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <DropdownInputExample />
          <DropdownInputExampleWithDefault />
          <DropdownInputExampleWithValidation />
          <DropdownInputExampleInsideLabel />
        </PlaygroundPreview>
      </PlaygroundSection>
      <PlaygroundSection
        title="Radio Group"
        description={
          <>
            Single-select input built with radio semantics. Allows users to
            choose exactly one option from a list and supports default values,
            descriptions, and validation.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <RadioGroupExampleBasic />
          <RadioGroupExampleWithDescriptions />
          <RadioGroupExampleWithValidation />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Checkbox"
        description={
          <>
            Boolean input allowing users to toggle a single value. Commonly used
            for confirmations such as accepting terms and conditions.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <CheckboxExampleBasic />
          <CheckboxExampleRequired />
          <CheckboxExampleDisabled />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Checkbox Group"
        description={
          <>
            A set of related checkboxes allowing users to select multiple
            values. Typically used when more than one option can be chosen
            within a group.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <CheckboxGroupExampleBasic />
          <CheckboxGroupExampleRequired />
          <CheckboxGroupExampleWithDescription />
          <CheckboxGroupExampleDisabledOptions />
          <CheckboxGroupExampleDefaultValues />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multi Range Slider"
        description={
          <>
            Dual-thumb range input used for selecting a minimum and maximum
            value within a bounded interval.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <MultiRangeSliderExample />
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
          <ColorPickerExampleRequiredWithValidation />
        </PlaygroundPreview>
      </PlaygroundSection>

      <PlaygroundSection
        title="Submit Button"
        description={
          <>
            Button specialised for form submission. Supports loading states and
            can be linked to a form via <code>formId</code>. Supports primary
            and secondary variants, solid and outline appearances, as well as
            disabled and full-width states.
          </>
        }
      >
        <PlaygroundPreview orientation="vertical">
          <SubmitButtonExampleBasic />
          <SubmitButtonExampleLoading />
          <SubmitButtonExampleExternal />
        </PlaygroundPreview>
      </PlaygroundSection>
    </PlaygroundGroup>
  );
};
