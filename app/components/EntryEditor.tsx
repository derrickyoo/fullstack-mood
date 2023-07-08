"use client";

import { useState } from "react";

function EntryEditor({ entry }) {
  const [value, setValue] = useState(entry.content);

  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default EntryEditor;
