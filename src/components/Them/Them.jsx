import { BsBrightnessHigh, BsFillMoonStarsFill } from "react-icons/bs";
import { Sun, Moon, Wrap } from "./Theme.styled";
import { useTheme } from "./useTheme";

export default function Them() {
  const { setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  return (
    <Wrap>
      <Sun onClick={handleLightThemeClick}>
        <BsBrightnessHigh />
      </Sun>
      <Moon onClick={handleDarkThemeClick}>
        <BsFillMoonStarsFill />
      </Moon>
    </Wrap>
  );
}
