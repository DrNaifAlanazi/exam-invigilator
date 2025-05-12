
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-hail-dark p-4">
      <div className="w-full max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-hail-light to-hail">
            Exam Invigilation Management System
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A complete solution for managing faculty exam invigilation assignments for the Department of Health Informatics
        </p>
        
        <div className="mt-8 glass-card p-8 rounded-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-left">
              <h2 className="text-xl font-bold text-white">For Faculty</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  Submit availability and preferences
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  View your invigilation schedule
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  Request and manage duty swaps
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-left">
              <h2 className="text-xl font-bold text-white">For Administrators</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  Import exam schedules
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  Assign invigilators efficiently
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-hail">✓</span>
                  Monitor and approve swap requests
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              className="hail-gradient px-8 py-6 text-lg" 
              onClick={handleLoginClick}
            >
              Sign In to Dashboard
            </Button>
          </div>
        </div>
        
        <div className="text-sm text-gray-400 mt-8">
          &copy; 2025 Department of Health Informatics • University of Ha'il
        </div>
      </div>
    </div>
  );
};

export default Index;
