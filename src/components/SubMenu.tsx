import {
  LucideChevronDown,
  LucideClock10,
  LucideEllipsisVertical,
  LucidePlus,
  LucideRotateCw,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SubMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="font-bold">CNAP Dashboard</div>
      <div className="flex space-x-3">
        <div
          onClick={() => setIsSidebarOpen(true)}
          className="flex bg-white/80 border-1 border-blue-200 rounded-sm px-3 py-2 cursor-pointer transform transition-transform duration-100 hover:scale-110"
        >
          <div className="text-sm">Add Widget</div>
          <div className="flex items-center ps-2">
            <LucidePlus className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="bg-white/80 py-2 px-2 rounded-sm border-1 border-blue-200 cursor-pointer transform transition-transform duration-100 hover:scale-110">
            <LucideRotateCw className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center bg-white/80 py-1 px-2 rounded-sm border-1 border-blue-200 cursor-pointer transform transition-transform duration-100 hover:scale-110">
          <LucideEllipsisVertical className="w-5 h-5" />
        </div>
        <div className="flex items-center rounded-sm space-x-1 px-2 bg-white/80 border border-blue-200 cursor-pointer transform transition-transform duration-100 hover:scale-110">
          <LucideClock10 className="w-5 h-5 mr-2 text-blue-800" />
          <div className="text-sm text-blue-800 font-semibold">Last 2 days</div>
          <LucideChevronDown className="w-5 h-5 text-blue-800" />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
