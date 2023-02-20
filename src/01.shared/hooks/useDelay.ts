import { useState } from "react";

interface ToggleProps {
  value: boolean;
  toggle: () => void;
}
export function useDelayWithSelect(delay: number, toggle: ToggleProps) {
  const [value, setValue] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  function onMouseLeave(e: React.MouseEvent) {
    if (!toggle.value) return;

    setValue(
      setTimeout(() => {
        toggle.toggle();
      }, 200)
    );
  }

  function onMouseEnter(e: React.MouseEvent) {
    if (!value) return;

    clearTimeout(value);
  }

  return { onMouseLeave, onMouseEnter };
}
