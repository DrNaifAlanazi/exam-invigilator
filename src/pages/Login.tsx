
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout 
      title="Sign In" 
      subtitle="Access the Exam Invigilation Management System"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
