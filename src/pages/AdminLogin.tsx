
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
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
      console.log("Admin login attempt with:", email);
      
      // For now, we'll simulate a successful login
      setTimeout(() => {
        navigate("/admin/dashboard");
        toast({
          title: "Welcome, Administrator",
          description: "You have successfully logged in",
        });
      }, 1000);
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

  const handleBackToFaculty = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-5xl font-bold text-[#A1B5BE] mb-2">HEALTH</h1>
        <h1 className="text-5xl font-bold text-[#A1B5BE] mb-6">INFORMATICS</h1>
        <p className="text-xl text-[#A1B5BE]/80">Exam Invigilation Management System</p>
        <p className="text-lg text-[#A1B5BE]/60 mt-2">Administrator Access</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="glass-card overflow-hidden p-6 rounded-xl">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Admin user name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-sidebar border-sidebar-border h-12"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-sidebar border-sidebar-border h-12"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-[#2A4653] hover:bg-[#2A4653]/90 text-white font-medium text-lg" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={handleBackToFaculty}
            className="text-sm text-[#A1B5BE] hover:text-white"
          >
            Back to faculty login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
