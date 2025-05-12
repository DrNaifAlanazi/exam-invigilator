
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const FacultySettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    notifyEmail: true,
    notifyApp: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setUserData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSaveChanges = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings saved",
        description: "Your profile settings have been updated successfully.",
      });
    }, 1000);
  };

  return (
    <DashboardLayout userRole="faculty" pageTitle="Settings">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="glass-card bg-white shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[#1A1F2C]">Profile Information</h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled
                  />
                  <p className="text-xs text-[#8E9196]">Email address cannot be changed</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="glass-card bg-white shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[#1A1F2C]">Notification Settings</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium text-[#1A1F2C]">Email Notifications</h3>
                  <p className="text-sm text-[#8E9196]">Receive swap requests and updates via email</p>
                </div>
                <Switch
                  checked={userData.notifyEmail}
                  onCheckedChange={(checked) => handleSwitchChange("notifyEmail", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium text-[#1A1F2C]">In-App Notifications</h3>
                  <p className="text-sm text-[#8E9196]">Receive notifications in the application</p>
                </div>
                <Switch 
                  checked={userData.notifyApp}
                  onCheckedChange={(checked) => handleSwitchChange("notifyApp", checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveChanges} 
            disabled={isLoading}
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultySettings;
