import LoginForm from "@/Components/LoginForm";
import { Navigate } from "react-router-dom";

function LoginPage({ isAuthenticated }: { isAuthenticated :boolean}) {
  // if (isAuthenticated) return <Navigate to="/" replace />;
  return (
    <div>
      {/* <LoginForm /> */}
    </div>
  );
}

export default LoginPage