import { HiSun, HiMoon } from "react-icons/hi";
import useDarkMode from "@/lib/hooks/useDarkMode";

export default function DarkModeButton() {
  const [darkMode, handleThemeChange] = useDarkMode();

  return (
    <button onClick={handleThemeChange}>
      {!darkMode ? (
        <HiSun className="text-3xl text-yellow-400 " />
      ) : (
        <HiMoon className="text-3xl text-sky-800" />
      )}
    </button>
  );
}
