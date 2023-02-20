import React, { ReactEventHandler, useState } from "react";

export function useInput<S>(initialValue: S) {
  const [value, setValue] = useState<S>(initialValue);

  function onChange(e: React.ChangeEvent<any>) {
    setValue(state => (state = e.target.value));
  }

  return { value, onChange };
}
