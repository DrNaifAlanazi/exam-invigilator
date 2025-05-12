
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FacultySwaps = () => {
  // Placeholder data for swap requests
  const swapRequests = [
    {
      id: 1,
      examName: "Introduction to Health Informatics",
      examCode: "HI101",
      date: "2025-06-15",
      time: "09:00 - 11:00",
      venue: "Hall A",
      status: "pending",
    },
    {
      id: 2,
      examName: "Medical Terminology",
      examCode: "HI204",
      date: "2025-06-18",
      time: "13:00 - 15:00",
      venue: "Hall B",
      status: "approved",
    }
  ];

  return (
    <DashboardLayout userRole="faculty" pageTitle="Swap Requests">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Swap Requests</h2>
          <Button className="bg-[#2A4653] hover:bg-[#2A4653]/90">
            Request New Swap
          </Button>
        </div>

        <div className="grid gap-4">
          {swapRequests.map((swap) => (
            <Card key={swap.id} className="bg-sidebar border-sidebar-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-medium">
                  {swap.examName}
                </CardTitle>
                <Badge 
                  variant={swap.status === "approved" ? "hail" : "default"}
                  className={swap.status === "approved" ? "bg-[#2A4653]" : "bg-hail"}
                >
                  {swap.status === "approved" ? "Approved" : "Pending"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Exam Code:</span>
                    <span className="text-sm">{swap.examCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date:</span>
                    <span className="text-sm">{swap.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Time:</span>
                    <span className="text-sm">{swap.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Venue:</span>
                    <span className="text-sm">{swap.venue}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Cancel Request
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-[#2A4653] hover:bg-[#2A4653]/90"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultySwaps;
