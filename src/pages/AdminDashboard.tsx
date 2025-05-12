
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExamCard from "@/components/dashboard/ExamCard";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Clock, FileSpreadsheet, Users } from "lucide-react";

// Mock data for the admin dashboard
const stats = [
  { title: "Total Exams", value: 24, icon: <Calendar className="h-4 w-4" /> },
  { title: "Assigned Invigilators", value: "18/24", icon: <CheckCircle className="h-4 w-4" />, variant: "accent" as const },
  { title: "Faculty Members", value: 32, icon: <Users className="h-4 w-4" /> },
  { title: "Pending Swaps", value: 5, icon: <Clock className="h-4 w-4" /> },
];

const upcomingExams = [
  {
    examCode: "CS301",
    subject: "Database Systems",
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    invigilator: "Dr. Ahmed Khan",
    status: "assigned" as const,
  },
  {
    examCode: "CS401",
    subject: "Software Engineering",
    date: "May 16, 2025",
    time: "12:00 PM - 2:00 PM",
    venue: "Hall B",
    status: "unassigned" as const,
  },
  {
    examCode: "IT350",
    subject: "Computer Networks",
    date: "May 17, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 3",
    invigilator: "Dr. Maria Khalid",
    status: "assigned" as const,
  },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin" pageTitle="Admin Dashboard">
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              variant={stat.variant}
            />
          ))}
        </div>

        {/* Actions Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button className="h-auto py-4 glass-card flex flex-col items-center gap-2">
            <FileSpreadsheet className="h-6 w-6" />
            <span>Import Exam Schedule</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <Users className="h-6 w-6" />
            <span>Manage Faculty</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex flex-col items-center gap-2">
            <CheckCircle className="h-6 w-6" />
            <span>Assign Invigilators</span>
          </Button>
        </div>

        {/* Upcoming Exams Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Exams</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingExams.map((exam) => (
              <ExamCard
                key={exam.examCode}
                examCode={exam.examCode}
                subject={exam.subject}
                date={exam.date}
                time={exam.time}
                venue={exam.venue}
                invigilator={exam.invigilator}
                status={exam.status}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
