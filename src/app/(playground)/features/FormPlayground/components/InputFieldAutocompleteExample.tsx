"use client";

import {
  InputFieldWithAutocomplete,
  useTextInputWithAutocomplete,
} from "@/app/components";

type City = {
  id: string;
  value: string;
};

const cities: City[] = [
  { id: "1", value: "Amsterdam" },
  { id: "2", value: "Rotterdam" },
  { id: "3", value: "Utrecht" },
  { id: "4", value: "Eindhoven" },
  { id: "5", value: "Groningen" },
];

export const InputFieldAutocompleteExample = () => {
  const {
    value,
    showSuggestions,
    setShowSuggestions,
    handleChange,
    handleSuggestionClick,
    handleBlur,
  } = useTextInputWithAutocomplete<City>("");

  // 🔁 You control the matching strategy here
  const filterFn = (item: City, query: string) =>
    item.value.toLowerCase().startsWith(query.toLowerCase());

  const filteredSuggestions = cities.filter((city) => filterFn(city, value));

  return (
    <InputFieldWithAutocomplete
      name="city"
      label="City"
      value={value}
      isRequired={false}
      placeholder="Start typing a city..."
      autocompleteSuggestions={filteredSuggestions}
      showSuggestions={showSuggestions}
      setShowSuggestions={setShowSuggestions}
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSuggestionClick={handleSuggestionClick}
    />
  );
};
