import { FiAirplay, FiMoon, FiSun } from "react-icons/fi";

const ThemeSelector = () => {
  return (
    <ul
      tabIndex={0}
      className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm font-semibold dark:ring-0 dark:highlight-white/5 mt-4"
    >
      <li className="py-1 px-2 flex items-center cursor-pointer hover:bg-neutral-200">
        <FiSun />
        <span className="px-4">Light</span>
      </li>
      <li className="py-1 px-2 flex items-center cursor-pointer hover:bg-neutral-200">
        <FiMoon />
        <span className="px-4">Dark</span>
      </li>
      <li className="py-1 px-2 flex items-center cursor-pointer hover:bg-neutral-200">
        <FiAirplay />
        <span className="px-4">Sistema</span>
      </li>
    </ul>
  );
};

export default ThemeSelector;
