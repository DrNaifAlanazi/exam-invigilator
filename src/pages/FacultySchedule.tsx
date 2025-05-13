
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

// Mock data for the faculty schedule
const assignedExams = [
  {
    id: 1,
    examCode: "HIIM122",
    courseTitle: "Computer Engineering",
    date: "May 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Room F-190",
    studentCount: 22,
    preferred: true,
  },
  {
    id: 2,
    examCode: "TTGH01",
    courseTitle: "Medical Terminology",
    date: "May 18, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "Hall A",
    studentCount: 12,
    preferred: false,
  },
  {
    id: 3,
    examCode: "MTTQ 121",
    courseTitle: "Math",
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Hall C",
    studentCount: 18,
    preferred: false,
  },
  {
    id: 4,
    examCode: "IS360",
    courseTitle: "Healthcare Analytics",
    date: "May 23, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Lab 2",
    studentCount: 16,
    preferred: true,
  },
];

const FacultySchedule = () => {
  return (
    <DashboardLayout userRole="faculty" pageTitle="My Schedule">
      <div className="space-y-6">
        <Card className="bg-[#1A262E] border border-[#A1B5BE]/10 shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-white">My Assigned Exams</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignedExams.map((exam) => (
                <div 
                  key={exam.id} 
                  className={`p-4 border ${exam.preferred ? 'border-[#7E69AB]' : 'border-[#A1B5BE]/10'} rounded-lg bg-[#141E26] hover:bg-[#141E26]/90 transition-colors`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={exam.preferred ? "bg-[#7E69AB]" : "bg-blue-500"}>
                          {exam.examCode}
                        </Badge>
                        {exam.preferred && (
                          <Badge variant="outline" className="border-[#7E69AB] text-[#7E69AB]">
                            Preferred
                          </Badge>
                        )}
                        <h3 className="font-medium text-white">{exam.courseTitle}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
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
