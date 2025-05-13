
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Clock, Calendar, Swap } from "lucide-react";

// Mock data for available swap options by date and time
const availableSwapSlots = [
  {
    date: "25/5/2025",
    slots: [
      {
        time: "09:00 - 11:00",
        invigilators: [
          { id: 1, name: "Fatima H" },
          { id: 2, name: "Iodao" },
        ],
      },
      {
        time: "01:00 - 03:00",
        invigilators: [
          { id: 3, name: "DR.Freeh Alghamdi" },
          { id: 4, name: "Tahi sfsq" },
          { id: 5, name: "Iodao" },
        ],
      },
    ],
  },
  {
    date: "26/5/2025",
    slots: [
      {
        time: "09:00 - 11:00",
        invigilators: [
          { id: 6, name: "Fatima H" },
          { id: 7, name: "Tahi sfsq" },
          { id: 8, name: "Iodao" },
        ],
      },
      {
        time: "01:00 - 03:00",
        invigilators: [
          { id: 9, name: "DR.Freeh Alghamdi" },
        ],
      },
    ],
  },
];

// Mock data for my current exam
const myExam = {
  day: "Monday",
  date: "22/5/2025",
  time: "09:00 - 11:00",
  location: "F-190",
  students: 22,
};

const FacultySwaps = () => {
  const [selectedInvigilator, setSelectedInvigilator] = useState<{
    id: number;
    name: string;
    date: string;
    time: string;
  } | null>(null);
  const { toast } = useToast();

  const handleSelectInvigilator = (invigilator: { id: number; name: string }, date: string, time: string) => {
    setSelectedInvigilator({
      id: invigilator.id,
      name: invigilator.name,
      date,
      time,
    });
  };

  const handleConfirmSwap = () => {
    if (selectedInvigilator) {
      // In a real app, this would send the swap request to the backend
      toast({
        title: "Swap request sent",
        description: `Your swap request with ${selectedInvigilator.name} has been submitted.`,
      });
      // Reset selection
      setSelectedInvigilator(null);
    }
  };

  return (
    <DashboardLayout userRole="faculty" pageTitle="Swap Requests">
      <div className="grid gap-6">
        <h2 className="text-xl font-semibold text-white">Request New Swap</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Schedule Table - 2/3 width */}
          <div className="md:col-span-2">
            <div className="bg-[#1A262E] border border-[#A1B5BE]/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 text-white text-center p-4 bg-[#141E26]">
                <div>Date</div>
                <div>Time</div>
                <div>Swappable Slot</div>
              </div>
              
              {availableSwapSlots.map((dateSlot) => (
                <React.Fragment key={dateSlot.date}>
                  {dateSlot.slots.map((timeSlot, timeIndex) => (
                    <div key={`${dateSlot.date}-${timeSlot.time}`} className="grid grid-cols-3 border-t border-[#A1B5BE]/10">
                      {/* Date column - only show on first row of each date */}
                      <div className="flex items-center justify-center p-4 text-white">
                        {timeIndex === 0 && (
                          <span className="text-lg">{dateSlot.date}</span>
                        )}
                      </div>
                      
                      {/* Time column */}
                      <div className="flex items-center justify-center p-4 text-white">
                        {timeSlot.time}
                      </div>
                      
                      {/* Invigilators column */}
                      <div className="flex flex-wrap items-center justify-center gap-2 p-4">
                        {timeSlot.invigilators.map((invigilator) => (
                          <button
                            key={invigilator.id}
                            onClick={() => handleSelectInvigilator(invigilator, dateSlot.date, timeSlot.time)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              selectedInvigilator?.id === invigilator.id
                                ? "bg-[#7E69AB] text-white"
                                : "bg-[#2A3942] text-gray-300 hover:bg-[#3A4952]"
                            }`}
                          >
                            {invigilator.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Add separator between dates */}
                  <Separator className="bg-[#A1B5BE]/20" />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Selection Summary - 1/3 width */}
          <div>
            <div className="sticky top-4 space-y-4">
              {/* My Exam Card */}
              <Card className="bg-[#1A262E] border border-[#A1B5BE]/10">
                <CardContent className="p-6 relative">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-white font-medium">{myExam.day}</div>
                      <div className="text-white">{myExam.date}</div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between items-center">
                        <div className="text-gray-400 flex items-center gap-1">
                          <Clock className="h-4 w-4" /> Time
                        </div>
                        <div className="text-white">{myExam.time}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-400">Location</div>
                        <div className="text-white">{myExam.location}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-400">Students</div>
                        <div className="text-white">{myExam.students}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow indicator */}
              <div className="flex justify-center">
                <div className="h-10 border-l-2 border-[#7E69AB]"></div>
              </div>

              {/* Selected Swap Card */}
              {selectedInvigilator ? (
                <>
                  <Card className="bg-[#1A262E] border border-[#7E69AB]">
                    <CardContent className="p-6 relative">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="text-white font-medium">Selected Slot</div>
                          <div className="text-white">{selectedInvigilator.date}</div>
                        </div>
                        <div className="space-y-2 mt-2">
                          <div className="flex justify-between items-center">
                            <div className="text-gray-400 flex items-center gap-1">
                              <Clock className="h-4 w-4" /> Time
                            </div>
                            <div className="text-white">{selectedInvigilator.time}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-gray-400">Invigilator</div>
                            <div className="text-white">{selectedInvigilator.name}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-gray-400">Location</div>
                            <div className="text-white">{myExam.location}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-gray-400">Students</div>
                            <div className="text-white">{myExam.students}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button
                    onClick={handleConfirmSwap}
                    className="w-full h-12 bg-[#7E69AB] hover:bg-[#6E59A5] text-white"
                  >
                    <Swap className="mr-2 h-4 w-4" /> Confirm Swap Request
                  </Button>
                </>
              ) : (
                <Card className="bg-[#1A262E] border border-[#A1B5BE]/10 border-dashed">
                  <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center">
                    <div className="rounded-full bg-[#1E2D39] p-3 mb-3">
                      <Calendar className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="text-white font-medium">Select a Timeslot</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Choose an available slot from the schedule
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* We'll remove the existing swap requests section since we're focusing on the new design */}
      </div>
    </DashboardLayout>
  );
};

export default FacultySwaps;
