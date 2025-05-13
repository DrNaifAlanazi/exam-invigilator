
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Mock data for available swap options
const availableExams = [
  {
    id: 1,
    examName: "Introduction to Health Informatics",
    examCode: "HI101",
    date: "2025-05-15",
    time: "09:00 - 11:00",
    venue: "Hall A",
    invigilator: "Dr. Mohammed Ali",
  },
  {
    id: 2,
    examName: "Medical Terminology",
    examCode: "HI204",
    date: "2025-05-18",
    time: "13:00 - 15:00",
    venue: "Hall B",
    invigilator: "Dr. Fatima Hassan",
  },
  {
    id: 3,
    examName: "Healthcare Analytics",
    examCode: "IS360",
    date: "2025-05-20",
    time: "09:00 - 11:00",
    venue: "Lab 2",
    invigilator: "Dr. Sarah Ahmed",
  },
];

// Mock data for my current exams
const myExams = [
  {
    id: 1,
    examName: "Data Structures",
    examCode: "CS210",
    date: "2025-05-21",
    time: "13:00 - 15:00",
    venue: "Hall B",
  },
  {
    id: 2,
    examName: "Computer Networks",
    examCode: "IT350",
    date: "2025-05-17",
    time: "15:00 - 17:00",
    venue: "Lab 3",
  },
];

// Mock data for swap requests
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
    status: "accepted",
  }
];

const FacultySwaps = () => {
  const [selectedMyExam, setSelectedMyExam] = useState<number | null>(null);
  const [selectedSwapExams, setSelectedSwapExams] = useState<number[]>([]);

  const handleSelectMyExam = (id: number) => {
    setSelectedMyExam(id === selectedMyExam ? null : id);
  };

  const handleSelectSwapExam = (id: number) => {
    setSelectedSwapExams(prev => 
      prev.includes(id) 
        ? prev.filter(examId => examId !== id)
        : [...prev, id]
    );
  };

  const handleRequestSwap = () => {
    // In a real app, this would send the swap request to the backend
    console.info("Requesting swap between exams:", { 
      myExam: selectedMyExam, 
      swapExams: selectedSwapExams 
    });
    
    // Reset selections
    setSelectedMyExam(null);
    setSelectedSwapExams([]);
  };

  return (
    <DashboardLayout userRole="faculty" pageTitle="Swap Requests">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Request New Swap</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* My Exams */}
          <Card className="bg-[#1A262E] border border-[#A1B5BE]/10">
            <CardHeader>
              <CardTitle className="text-white">My Exams</CardTitle>
              <p className="text-sm text-gray-400">Select the exam you want to swap</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myExams.map((exam) => (
                  <div 
                    key={exam.id} 
                    className={`p-4 border ${selectedMyExam === exam.id ? 'border-[#7E69AB]' : 'border-[#A1B5BE]/10'} 
                      rounded-lg cursor-pointer hover:border-[#7E69AB]/60 transition-colors`}
                    onClick={() => handleSelectMyExam(exam.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{exam.examName}</h3>
                          <p className="text-sm text-gray-400">{exam.examCode}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-400">Date</p>
                          <p className="text-white">{exam.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Time</p>
                          <p className="text-white">{exam.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Venue</p>
                          <p className="text-white">{exam.venue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Swaps */}
          <Card className="bg-[#1A262E] border border-[#A1B5BE]/10">
            <CardHeader>
              <CardTitle className="text-white">Available Swaps</CardTitle>
              <p className="text-sm text-gray-400">Select one or more exams to request for swap</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {availableExams.map((exam) => (
                  <div 
                    key={exam.id} 
                    className={`p-4 border ${selectedSwapExams.includes(exam.id) ? 'border-[#7E69AB]' : 'border-[#A1B5BE]/10'} 
                      rounded-lg cursor-pointer hover:border-[#7E69AB]/60 transition-colors`}
                    onClick={() => handleSelectSwapExam(exam.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{exam.examName}</h3>
                          <p className="text-sm text-gray-400">{exam.examCode}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-400">Date</p>
                          <p className="text-white">{exam.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Time</p>
                          <p className="text-white">{exam.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Venue</p>
                          <p className="text-white">{exam.venue}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Invigilator</p>
                          <p className="text-white">{exam.invigilator}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleRequestSwap}
            disabled={!selectedMyExam || selectedSwapExams.length === 0}
            className="bg-[#7E69AB] hover:bg-[#6E59A5] text-white"
          >
            Submit Swap Request
          </Button>
        </div>

        <Separator className="bg-[#A1B5BE]/10 my-6" />

        {/* My Swap Requests */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">My Swap Requests</h2>
          <div className="grid gap-4">
            {swapRequests.map((swap) => (
              <Card key={swap.id} className="bg-[#1A262E] border border-[#A1B5BE]/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-medium text-white">
                    {swap.examName}
                  </CardTitle>
                  <Badge 
                    variant={swap.status === "accepted" ? "default" : "secondary"}
                    className={swap.status === "accepted" 
                      ? "bg-green-500/20 text-green-500 border-green-500/20" 
                      : "bg-yellow-500/20 text-yellow-500 border-yellow-500/20"
                    }
                  >
                    {swap.status === "accepted" ? "Accepted" : "Pending"}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Exam Code:</span>
                      <span className="text-sm text-white">{swap.examCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Date:</span>
                      <span className="text-sm text-white">{swap.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Time:</span>
                      <span className="text-sm text-white">{swap.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Venue:</span>
                      <span className="text-sm text-white">{swap.venue}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#A1B5BE]/10 text-gray-300 hover:text-white hover:bg-[#1A262E]/80"
                    >
                      Cancel Request
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#7E69AB] hover:bg-[#6E59A5] text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultySwaps;
