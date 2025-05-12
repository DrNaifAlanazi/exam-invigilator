
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  FileSpreadsheet, 
  Home, 
  Layout, 
  LogOut, 
  Menu, 
  Settings, 
  UserCog, 
  X 
} from "lucide-react";

interface SidebarProps {
  userRole: "admin" | "faculty";
  onLogout: () => void;
}

export const Sidebar = ({ userRole, onLogout }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: Home },
    { name: "Exam Schedule", path: "/admin/exam-schedule", icon: Calendar },
    { name: "Data Import", path: "/admin/data-import", icon: FileSpreadsheet },
    { name: "Assignments", path: "/admin/assignments", icon: Layout },
    { name: "Faculty Management", path: "/admin/faculty", icon: UserCog },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  const facultyLinks = [
    { name: "Dashboard", path: "/faculty/dashboard", icon: Home },
    { name: "My Schedule", path: "/faculty/schedule", icon: Calendar },
    { name: "Preferences", path: "/faculty/preferences", icon: UserCog },
    { name: "Swap Requests", path: "/faculty/swaps", icon: Layout },
    { name: "Settings", path: "/faculty/settings", icon: Settings },
  ];

  const links = userRole === "admin" ? adminLinks : facultyLinks;

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      <aside
        className={cn(
          "bg-sidebar min-h-screen w-64 flex-shrink-0 border-r border-border transition-all duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Health</h2>
          <h2 className="text-2xl font-bold text-white">Informatics</h2>
        </div>

        <Separator className="bg-sidebar-border" />
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.path
                      ? "bg-hail/20 text-white"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <Button
            variant="outline"
            className="w-full justify-start text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-foreground"
            onClick={onLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
