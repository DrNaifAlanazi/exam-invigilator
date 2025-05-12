
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

// Mock data for the faculty schedule
const assignedExams = [
  {
    id: 1,
    examCode: "CSE101",
    courseTitle: "Introduction to Computer Science",
    date: "May 15, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Room 203",
    studentCount: 45,
  },
  {
    id: 2,
    examCode: "BIO201",
    courseTitle: "Cell Biology",
    date: "May 18, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Lecture Hall A",
    studentCount: 60,
  },
  {
    id: 3,
    examCode: "MATH301",
    courseTitle: "Advanced Calculus",
    date: "May 20, 2024",
    time: "9:00 AM - 11:00 AM",
    location: "Room 110",
    studentCount: 35,
  },
];

const FacultySchedule = () => {
  return (
    <DashboardLayout userRole="faculty" pageTitle="My Schedule">
      <div className="space-y-6">
        <Card className="glass-card bg-white shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[#1A1F2C]">My Assigned Exams</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignedExams.map((exam) => (
                <div 
                  key={exam.id} 
                  className="p-4 border border-[#E5DEFF] rounded-lg bg-white hover:bg-[#F6F6F7] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="hail" className="bg-[#9b87f5] text-white">
                          {exam.examCode}
                        </Badge>
                        <h3 className="font-medium text-[#1A1F2C]">{exam.courseTitle}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#8E9196]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-[#9b87f5]" />
                          <span>{exam.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-[#9b87f5]" />
                          <span>{exam.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-[#9b87f5]" />
                          <span>{exam.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-[#9b87f5]" />
                          <span>{exam.studentCount} Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FacultySchedule;
