
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExamScheduleTable from "@/components/faculty/ExamScheduleTable";

// Mock data for the faculty dashboard
const assignedExams = [
  {
    id: 1,
    day: "Monday",
    date: "22/5/2025",
    time: "09:00 - 11:00",
    location: "F-190",
    students: 22,
    courseCode: "HIIM122",
    courseTitle: "Computer Eng",
    preferred: false,
  },
  {
    id: 2,
    day: "Monday",
    date: "22/5/2025",
    time: "09:00 - 11:00",
    location: "F-190",
    students: 22,
    courseCode: "TTGH01",
    courseTitle: "Medical Terminology",
    preferred: false,
  },
  {
    id: 3,
    day: "Monday",
    date: "22/5/2025",
    time: "09:00 - 11:00",
    location: "F-190",
    students: 22,
    courseCode: "",
    courseTitle: "",
    preferred: false,
  },
  {
    id: 4,
    day: "Monday",
    date: "22/5/2025",
    time: "09:00 - 11:00",
    location: "F-190",
    students: 22,
    courseCode: "",
    courseTitle: "",
    preferred: true,
  },
  {
    id: 5,
    day: "Monday",
    date: "22/5/2025",
    time: "09:00 - 11:00",
    location: "F-190",
    students: 22,
    courseCode: "",
    courseTitle: "",
    preferred: false,
  },
];

// Mock data for the exam schedule
const examScheduleData = [
  {
    id: 1,
    examCode: "HIIM122",
    subject: "Computer Eng",
    students: 7,
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    invigilator: "Freeeh AlGhamdi",
    status: "preferred",
  },
  {
    id: 2,
    examCode: "TTGH01",
    subject: "Medical Terminology",
    students: 12,
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    invigilator: "Dr. Sarah Ahmed",
    status: "preferred",
  },
  {
    id: 3,
    examCode: "MTTQ 121",
    subject: "Math",
    students: 18,
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    invigilator: "",
    status: "",
  },
  {
    id: 4,
    examCode: "IT350",
    subject: "Computer Networks",
    students: 15,
    date: "May 17, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 3",
    invigilator: "Dr. Mohammed Ali",
    status: "",
  },
  {
    id: 5,
    examCode: "HIIM122",
    subject: "Computer Eng",
    students: 11,
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall C",
    invigilator: "Not assigned",
    status: "preferred",
  },
  {
    id: 6,
    examCode: "IS340",
    subject: "Health Informatics",
    students: 12,
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall C",
    invigilator: "Not assigned",
    status: "",
  },
  {
    id: 7,
    examCode: "MTTQ 121",
    subject: "Math",
    students: 14,
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall C",
    invigilator: "Not assigned",
    status: "",
  },
  {
    id: 8,
    examCode: "CS210",
    subject: "Data Structures",
    students: 20,
    date: "May 21, 2025",
    time: "1:00 PM - 3:00 PM",
    venue: "Hall B",
    invigilator: "Not assigned",
    status: "",
  },
  {
    id: 9,
    examCode: "IS360",
    subject: "Healthcare Analytics",
    students: 16,
    date: "May 23, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Lab 2",
    invigilator: "Dr. Fatima Hassan",
    status: "preferred",
  },
];

// Mock data for swap requests
const swapRequests = [
  {
    id: 1,
    examCode: "HIIM122",
    subject: "Computer Eng",
    date: "May 15, 2025",
    time: "09:00 - 11:00",
    status: "pending",
  },
  {
    id: 2,
    examCode: "TTGH01",
    subject: "Medical Terminology",
    date: "May 18, 2025",
    time: "13:00 - 15:00",
    status: "accepted",
  },
  {
    id: 3,
    examCode: "MTTQ 121",
    subject: "Math",
    date: "May 20, 2025",
    time: "09:00 - 11:00",
    status: "rejected",
  },
];

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState<number | null>(null);
  const [selectedTableExam, setSelectedTableExam] = useState<number | null>(null);
  
  const handleRequestSwap = () => {
    navigate("/faculty/swaps");
  };

  const handleSelectExam = (id: number) => {
    setSelectedExam(id === selectedExam ? null : id);
  };

  const handleSelectTableExam = (id: number) => {
    setSelectedTableExam(id === selectedTableExam ? null : id);
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20';
      case 'accepted':
        return 'bg-green-500/20 text-green-500 border-green-500/20';
      case 'rejected':
        return 'bg-red-500/20 text-red-500 border-red-500/20';
      default:
        return '';
    }
  };

  return (
    <DashboardLayout userRole="faculty" pageTitle="Faculty Dashboard">
      <div className="space-y-8">
        {/* Assigned Exams Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {assignedExams.map((exam) => (
            <Card 
              key={exam.id} 
              className={`bg-[#1A262E] ${selectedExam === exam.id ? 'border-[#7E69AB] border-2' : exam.preferred ? 'border-[#7E69AB] border' : 'border-[#A1B5BE]/10 border'} hover:border-[#7E69AB]/80 transition-colors cursor-pointer`}
              onClick={() => handleSelectExam(exam.id)}
            >
              <CardContent className="p-4 relative">
                {exam.preferred && (
                  <Badge className="absolute top-2 right-2 bg-[#7E69AB] text-white">
                    Preferred
                  </Badge>
                )}
                <div className="space-y-2">
                  <div className="text-center space-y-1">
                    <div className="text-sm text-white font-medium">{exam.day}</div>
                    <div className="text-sm text-gray-300">{exam.date}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Time</span>
                      <span className="text-sm text-white">{exam.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Location</span>
                      <span className="text-sm text-white">{exam.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Students</span>
                      <span className="text-sm text-white">{exam.students}</span>
                    </div>
                  </div>
                  {exam.courseCode && (
                    <div className="space-y-1 pt-2 border-t border-[#A1B5BE]/10">
                      <div className="text-xs text-gray-400">{exam.courseCode}</div>
                      <div className="text-sm text-white">{exam.courseTitle}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Exam Schedule</h2>
              <Button 
                onClick={handleRequestSwap}
                disabled={!selectedExam}
                className={`${selectedExam ? 'bg-[#7E69AB] hover:bg-[#6E59A5]' : 'bg-[#7E69AB]/50 cursor-not-allowed'} text-white`}
              >
                Request a swap
              </Button>
            </div>

            {/* Exam Schedule Table */}
            <div className="overflow-x-auto rounded-lg border border-[#A1B5BE]/10">
              <ExamScheduleTable 
                data={examScheduleData} 
                selectedExam={selectedTableExam}
                onSelectExam={handleSelectTableExam}
              />
            </div>
          </div>
          
          {/* Swap Requests Summary */}
          <div className="bg-[#1A262E] rounded-lg p-4 border border-[#A1B5BE]/10">
            <h2 className="text-lg font-semibold text-white mb-4">My swap requests</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {swapRequests.map((request) => (
                <div key={request.id} className="p-3 bg-[#141E26] rounded-lg border border-[#A1B5BE]/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm font-medium text-white">{request.subject}</div>
                      <div className="text-xs text-gray-400">{request.examCode}</div>
                    </div>
                    <Badge 
                      className={getStatusBadgeClass(request.status)}
                    >
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-400 flex justify-between">
                    <span>{request.date}</span>
                    <span>{request.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* We'll remove the old My Swap Requests section since we've added it to the right side */}
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
