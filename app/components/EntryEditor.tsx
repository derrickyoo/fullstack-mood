"use client";

import { updateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

function EntryEditor({ entry }) {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);

  useAutosave({
    data: value,
    // _value is the changed value (see how React does rendering and batching)
    // this guarantees the latest value
    onSave: async (_value) => {
      const updated = await updateEntry(entry.id, _value);

      setIsLoading(false);
    },
    interval: 5000,
  });

  return (
    <div className="w-full h-full">
      {isLoading && <div>loading...</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default EntryEditor;
