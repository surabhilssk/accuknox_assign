import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../features/widgets/widgetsSlice";
import { LucideX } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 1, name: "CSPM Executive Dashboard" },
  { id: 2, name: "CWPP Executive Dashboard" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setWidgetDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (!widgetName || !widgetDescription) return;
    dispatch(
      addWidget({
        categoryId: selectedCategory,
        widget: {
          id: Date.now(),
          name: widgetName,
          text: widgetDescription,
        },
      })
    );
    setWidgetName("");
    setWidgetDescription("");
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Add Widget</h2>
        <button onClick={onClose}>
          <LucideX className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Body (form for new widget) */}
      <div className="p-4">
        <select
          className="border p-2 w-full mb-3 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          className="border p-2 w-full mb-3 rounded"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Description"
          className="border p-2 w-full mb-3 rounded"
          value={widgetDescription}
          onChange={(e) => setWidgetDescription(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          onClick={handleAddWidget}
        >
          Add Widget
        </button>
      </div>
    </div>
  );
}
