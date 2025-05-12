
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This is where we'll add Supabase auth later
      console.log("Login attempt with:", email);
      
      // For now, we'll simulate a successful login
      // Role selection will be based on actual user data later
      
      // Temporary simulation: Redirect based on email domain
      if (email.endsWith("admin.edu")) {
        setTimeout(() => {
          navigate("/admin/dashboard");
          toast({
            title: "Welcome, Admin",
            description: "You have successfully logged in",
          });
        }, 1000);
      } else {
        setTimeout(() => {
          navigate("/faculty/dashboard");
          toast({
            title: "Welcome, Faculty",
            description: "You have successfully logged in",
          });
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-border"
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a 
            href="#" 
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background border-border"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full hail-gradient font-medium" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Need access? Contact your department administrator.
      </p>
    </form>
  );
};

export default LoginForm;
