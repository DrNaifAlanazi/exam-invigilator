
import React from "react";
import { Sidebar } from "./Sidebar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "admin" | "faculty";
  pageTitle: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  userRole, 
  pageTitle 
}) => {
  const navigate = useNavigate();

  // Simulate logout functionality - will be replaced with Supabase auth
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        userRole={userRole} 
        onLogout={handleLogout}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-6 py-4 bg-sidebar shadow-md z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{pageTitle}</h1>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {userRole === "admin" ? "Administrator" : "Faculty Member"}
              </span>
            </div>
          </div>
        </header>
        <Separator className="bg-sidebar-border" />
        <main className="flex-1 overflow-auto p-6">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
