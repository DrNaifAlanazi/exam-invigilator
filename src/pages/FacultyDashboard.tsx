
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExamCard from "@/components/dashboard/ExamCard";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, Clock, PenLine } from "lucide-react";

// Mock data for the faculty dashboard
const stats = [
  { title: "Assigned Exams", value: 3, icon: <Calendar className="h-4 w-4" /> },
  { title: "Pending Swaps", value: 1, icon: <Clock className="h-4 w-4" /> },
];

const assignedExams = [
  {
    examCode: "CS301",
    subject: "Database Systems",
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    status: "assigned" as const,
  },
  {
    examCode: "IT350",
    subject: "Computer Networks",
    date: "May 17, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 3",
    status: "assigned" as const,
  },
  {
    examCode: "IS340",
    subject: "Health Informatics",
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall C",
    status: "assigned" as const,
  },
];

const FacultyDashboard = () => {
  return (
    <DashboardLayout userRole="faculty" pageTitle="Faculty Dashboard">
      <div className="grid gap-6">
        {/* Alert for preference submission */}
        <Alert className="bg-hail/10 text-foreground border-hail/20">
          <PenLine className="h-4 w-4" />
          <AlertTitle>Action Required</AlertTitle>
          <AlertDescription>
            Please submit your availability and preferences for the upcoming exam period by May 1, 2025.
          </AlertDescription>
        </Alert>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Actions Section */}
        <div className="grid gap-4 md:grid-cols-3">
          <Button className="h-auto py-4 glass-card flex flex-col items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>View Schedule</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <PenLine className="h-6 w-6" />
            <span>Update Preferences</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex flex-col items-center gap-2">
            <Clock className="h-6 w-6" />
            <span>Request Swap</span>
          </Button>
        </div>

        {/* Assigned Exams Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Assigned Exams</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assignedExams.map((exam) => (
              <ExamCard
                key={exam.examCode}
                examCode={exam.examCode}
                subject={exam.subject}
                date={exam.date}
                time={exam.time}
                venue={exam.venue}
                status={exam.status}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
