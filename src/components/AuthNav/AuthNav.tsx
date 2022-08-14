import { Link } from "../Navigation/Navigation.styled";

export default function AuthNavigation() {
  return (
    <div>
      <Link to="/login">
        <span>Log in</span>
      </Link>
      <Link to="/register">
        <span>Sign Up</span>
      </Link>
    </div>
  );
}
