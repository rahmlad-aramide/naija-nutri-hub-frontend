"use client";

import { useState } from "react";

export function Tabs({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-neutral-900 rounded-2xl p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-colors ${
              active === tab
                ? "bg-neutral-100 text-black"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
