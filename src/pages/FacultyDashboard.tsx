
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data for the faculty dashboard
const upcomingExams = [
  {
    examCode: "CSE101",
    room: "Room 203",
    date: "May 15, 2024",
    time: "10:00 AM",
  },
  {
    examCode: "BIO201",
    room: "Lecture Hall A",
    date: "May 18, 2024",
    time: "1:00 PM",
  },
  {
    examCode: "MATH301",
    room: "Room 110",
    date: "May 20, 2024",
    time: "9:00 AM",
  },
];

const swapRequests = [
  {
    requestor: "Fatima",
    examCode: "BIO201",
    date: "May 13, 2024",
    time: "1:00 AM",
  },
  {
    requestor: "Ahmed",
    examCode: "CSE101",
    date: "May 15, 2024",
    time: "10:00 AM",
  },
];

const FacultyDashboard = () => {
  return (
    <DashboardLayout userRole="faculty" pageTitle="Faculty Dashboard">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left and middle sections (span 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Exam Invigilation Section */}
          <Card className="glass-card">
            <CardHeader>
              <h2 className="text-xl font-semibold">Upcoming Exam Invigilation</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingExams.map((exam) => (
                  <div key={`${exam.examCode}-${exam.date}`} className="glass-card p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">{exam.examCode}</h3>
                      <p className="text-sm text-muted-foreground">{exam.room}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p>{exam.date}</p>
                      </div>
                      <div>
                        <p>{exam.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right section (preferences and swap requests) */}
        <div className="space-y-6">
          {/* Preferences Section */}
          <Card className="glass-card">
            <CardHeader>
              <h2 className="text-xl font-semibold">Preferences</h2>
            </CardHeader>
            <CardContent>
              <div className="w-full mb-4">
                <Link to="/faculty/preferences">
                  <Button className="w-full">
                    Submit Preferences
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Swap Requests Section */}
          <Card className="glass-card">
            <CardHeader>
              <h2 className="text-xl font-semibold">Swap Requests</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {swapRequests.map((request, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md">
                    <div>
                      <p className="font-medium">
                        {request.requestor} – {request.examCode}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {request.date}, {request.time}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <span className="text-right text-sm">انتظار الرد</span>
                    </Button>
                  </div>
                ))}
                <div className="pt-2">
                  <Link to="/faculty/swaps">
                    <Button variant="ghost" size="sm" className="w-full flex justify-between">
                      <span>View All Requests</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
