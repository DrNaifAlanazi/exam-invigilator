
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

// Group exams by date for timeline display
const groupExamsByDate = (exams) => {
  const groupedExams = {};
  
  exams.forEach(exam => {
    if (!groupedExams[exam.date]) {
      groupedExams[exam.date] = [];
    }
    groupedExams[exam.date].push(exam);
  });
  
  // Convert to array and sort by date
  return Object.entries(groupedExams)
    .map(([date, examsOnDate]) => ({
      date,
      exams: examsOnDate,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

const FacultySchedule = () => {
  const timelineData = groupExamsByDate(assignedExams);
  
  return (
    <DashboardLayout userRole="faculty" pageTitle="My Schedule">
      <div className="space-y-6">
        <Card className="bg-[#1A262E] border border-[#A1B5BE]/10 shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-white">My Assigned Exams</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {timelineData.map((dayGroup, index) => (
                <div key={dayGroup.date} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#7E69AB] flex items-center justify-center">
                      <span className="text-white text-xs">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{dayGroup.date}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dayGroup.exams.map((exam) => (
                      <div 
                        key={exam.id} 
                        className={`p-4 border ${exam.preferred ? 'border-[#7E69AB]' : 'border-[#A1B5BE]/10'} rounded-lg bg-[#141E26] hover:bg-[#141E26]/90 transition-colors`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge className={exam.preferred ? "bg-[#7E69AB]" : "bg-blue-500"}>
                              {exam.examCode}
                            </Badge>
                            {exam.preferred && (
                              <Badge variant="outline" className="border-[#7E69AB] text-[#7E69AB]">
                                Preferred
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-medium text-white">{exam.courseTitle}</h4>
                          
                          <div className="grid gap-1 text-sm text-gray-400">
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
                    ))}
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
