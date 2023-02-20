import { useState } from "react";

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(state => (state = !value));
  }

  return { value, toggle: toggleValue };
}
