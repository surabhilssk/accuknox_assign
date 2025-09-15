import { LucideX } from "lucide-react";

interface WidgetProps {
  widgetName: string;
  widgetDescription: string;
  handleCwppOnclick: () => void;
}

export default function CwppWidgets({
  widgetName,
  widgetDescription,
  handleCwppOnclick,
}: WidgetProps) {
  return (
    <div>
      <div className="bg-white/50 w-[28rem] h-48 rounded-lg p-4 overflow-scroll">
        <div
          className="flex justify-end mb-2 cursor-pointer"
          onClick={handleCwppOnclick}
        >
          <LucideX />
        </div>
        <div className="bg-purple-300/50 py-1 rounded-lg text-center font-semibold text-xl">
          {widgetName}
        </div>
        <div className="px-2 mt-2">{widgetDescription}</div>
      </div>
    </div>
  );
}
