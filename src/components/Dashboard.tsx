import { useSelector } from "react-redux";
import AppBar from "./AppBar";
import CspmWidgets from "./CspmWidgets";
import CwppWidgets from "./CwppWidgets";
import SubMenu from "./SubMenu";

export default function Dashboard() {
  const categories = useSelector((state: any) => state.widgets.categories);

  const cspmCategory = categories.find(
    (cat: any) => cat.name === "CSPM Executive Dashboard"
  );
  const cwppCategory = categories.find(
    (cat: any) => cat.name === "CWPP Executive Dashboard"
  );

  return (
    <div>
      <AppBar />
      <div className="mt-9 px-9">
        <SubMenu />
      </div>
      <div className="mt-5 bg-gray-200/70 mx-9 px-5 py-5 rounded-xl">
        <div className="font-semibold mb-2 ml-2">CSPM Executive Dashboard</div>
        <div className="flex space-x-3 overflow-auto">
          {cspmCategory?.widgets.map((w: any) => (
            <CspmWidgets
              key={w.id}
              widgetName={w.name}
              widgetDescription={w.text}
            />
          ))}
        </div>
      </div>
      <div className="mt-5 bg-gray-200/70 mx-9 px-5 py-5 rounded-xl">
        <div className="font-semibold mb-2 ml-2">CWPP Executive Dashboard</div>
        <div className="flex space-x-3 overflow-auto">
          {cwppCategory?.widgets.map((w: any) => (
            <CwppWidgets
              key={w.id}
              widgetName={w.name}
              widgetDescription={w.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
