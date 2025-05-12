
import React from 'react';
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <Card className="glass-card overflow-hidden">
          <div className="p-6">
            {children}
          </div>
        </Card>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Department of Health Informatics</p>
          <p className="mt-1">Exam Invigilation Management System</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
