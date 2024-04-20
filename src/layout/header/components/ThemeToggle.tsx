import { useTheme } from "./../../../contextApi/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
