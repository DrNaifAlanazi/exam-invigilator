
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileCheck, Mail, PenLine, UserCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data for exams
const exams = [
  {
    examCode: "CS301",
    subject: "Database Systems",
    date: "May 15, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall A",
    invigilator: "Dr. Sarah Ahmed",
    status: "assigned",
  },
  {
    examCode: "IT350",
    subject: "Computer Networks",
    date: "May 17, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 3",
    invigilator: "Dr. Mohammed Ali",
    status: "assigned",
  },
  {
    examCode: "IS340",
    subject: "Health Informatics",
    date: "May 20, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Hall C",
    invigilator: null,
    status: "unassigned",
  },
  {
    examCode: "CS210",
    subject: "Data Structures",
    date: "May 21, 2025",
    time: "1:00 PM - 3:00 PM",
    venue: "Hall B",
    invigilator: null,
    status: "unassigned",
  },
  {
    examCode: "IS360",
    subject: "Healthcare Analytics",
    date: "May 23, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Lab 2",
    invigilator: "Dr. Fatima Hassan",
    status: "assigned",
  },
];

// Mock data for activity feed
const activities = [
  {
    type: "swap_request",
    user: "Dr. Ahmed Khalid",
    target: "Dr. Fatima Hassan",
    exam: "CS210",
    timestamp: "2 hours ago",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    type: "swap_approved",
    user: "Dr. Mohammed Ali",
    target: "Dr. Sarah Ahmed",
    exam: "IS380",
    timestamp: "5 hours ago",
    icon: <UserCheck className="h-4 w-4" />,
  },
  {
    type: "preference_submitted",
    user: "Dr. Layla Omar",
    timestamp: "Yesterday",
    icon: <PenLine className="h-4 w-4" />,
  },
  {
    type: "pdf_generated",
    user: "System",
    description: "Swap agreement between Dr. Mohammed Ali and Dr. Sarah Ahmed",
    timestamp: "Yesterday",
    icon: <FileCheck className="h-4 w-4" />,
  },
  {
    type: "notification_sent",
    user: "System",
    description: "Reminder emails sent to 5 faculty members",
    timestamp: "2 days ago",
    icon: <Mail className="h-4 w-4" />,
  },
];

// Status badge styling
const statusStyles = {
  assigned: "bg-green-500/20 text-green-500 border-green-500/20",
  unassigned: "bg-red-500/20 text-red-500 border-red-500/20",
  pending: "bg-yellow-500/20 text-yellow-500 border-yellow-500/20",
};

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin" pageTitle="Admin Dashboard">
      <div className="grid gap-6">
        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Button className="h-auto py-4 glass-card flex flex-col items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>Manage Exams</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
            <PenLine className="h-6 w-6" />
            <span>Import Data</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex flex-col items-center gap-2">
            <UserCheck className="h-6 w-6" />
            <span>Assign Invigilators</span>
          </Button>
        </div>

        {/* Exam Schedule Table */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Exam Schedule</h2>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Code</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Venue</TableHead>
                    <TableHead>Invigilator</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exams.map((exam) => (
                    <TableRow key={exam.examCode}>
                      <TableCell className="font-medium">{exam.examCode}</TableCell>
                      <TableCell>{exam.subject}</TableCell>
                      <TableCell>
                        {exam.date}
                        <br />
                        <span className="text-sm text-muted-foreground">{exam.time}</span>
                      </TableCell>
                      <TableCell>{exam.venue}</TableCell>
                      <TableCell>
                        {exam.invigilator || <span className="text-muted-foreground">Not assigned</span>}
                      </TableCell>
                      <TableCell>
                        <Badge className={statusStyles[exam.status as keyof typeof statusStyles]}>
                          {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/5">
                  <div className="bg-accent/10 p-2 rounded-full">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">
                        {activity.user}
                        {activity.type === "swap_request" && ` requested a swap with ${activity.target}`}
                        {activity.type === "swap_approved" && ` swapped with ${activity.target}`}
                        {activity.type === "preference_submitted" && ` submitted preferences`}
                      </p>
                      <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                    </div>
                    {activity.exam && (
                      <p className="text-sm text-muted-foreground">Exam: {activity.exam}</p>
                    )}
                    {activity.description && (
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    )}
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

export default AdminDashboard;
