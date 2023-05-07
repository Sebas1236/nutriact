import { FiAirplay, FiMoon, FiSun } from "react-icons/fi";

const ThemeSelector = () => {
  return (
    <ul
      tabIndex={0}
      className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4"
    >
      <li className="py-1 px-2 flex items-center cursor-pointer text-sky-500">
        <FiSun />
        <span className="px-4">Light</span>
      </li>
      <li className="py-1 px-2 flex items-center cursor-pointer text-sky-500">
        <FiMoon />
        <span className="px-4">Dark</span>
      </li>
      <li className="py-1 px-2 flex items-center cursor-pointer text-sky-500">
        <FiAirplay />
        <span className="px-4">System</span>
      </li>
    </ul>
  );
};

export default ThemeSelector;
