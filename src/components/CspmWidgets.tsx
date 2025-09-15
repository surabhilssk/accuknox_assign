interface WidgetProps {
  widgetName: string;
  widgetDescription: string;
}

export default function CspmWidgets({
  widgetName,
  widgetDescription,
}: WidgetProps) {
  return (
    <div>
      <div className="bg-white/50 w-[28rem] h-48 rounded-lg p-4 overflow-scroll">
        <div className="bg-blue-300/50 py-1 rounded-lg text-center font-semibold text-xl">
          {widgetName}
        </div>
        <div className="px-2 mt-2">{widgetDescription}</div>
      </div>
    </div>
  );
}
