import { Link } from "../Navigation/Navigation.styled";
import { useTranslation } from "react-i18next";

export default function AuthNavigation() {
  const { t } = useTranslation();
  return (
    <div>
      <Link to="/login">
        <span>{t("login")}</span>
      </Link>
      <Link to="/register">
        <span>{t("sign_in")}</span>
      </Link>
    </div>
  );
}
