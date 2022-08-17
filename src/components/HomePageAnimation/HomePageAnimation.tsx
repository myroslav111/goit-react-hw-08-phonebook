import { Text } from "./HomePageAnimation.styled";
import { useTranslation } from "react-i18next";

function HomePageAnimation() {
  const { t } = useTranslation();
  return <Text>{t("phonebook")}</Text>;
}

export default HomePageAnimation;
