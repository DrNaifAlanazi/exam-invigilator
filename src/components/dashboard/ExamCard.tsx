
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

interface ExamCardProps {
  examCode: string;
  subject: string;
  date: string;
  time: string;
  venue: string;
  invigilator?: string;
  status?: "assigned" | "unassigned" | "pending";
}

const statusStyles = {
  assigned: "bg-green-500/20 text-green-500 border-green-500/20",
  unassigned: "bg-red-500/20 text-red-500 border-red-500/20",
  pending: "bg-yellow-500/20 text-yellow-500 border-yellow-500/20",
};

const ExamCard = ({
  examCode,
  subject,
  date,
  time,
  venue,
  invigilator,
  status = "unassigned",
}: ExamCardProps) => {
  return (
    <Card className="glass-card overflow-hidden hover:shadow-lg transition-all">
      <CardHeader className="border-b border-border p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-white">{subject}</h3>
            <p className="text-sm text-muted-foreground">{examCode}</p>
          </div>
          <Badge className={statusStyles[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-4">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 opacity-70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 opacity-70" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 opacity-70" />
            <span>{venue}</span>
          </div>
        </div>
      </CardContent>
      {invigilator && (
        <CardFooter className="border-t border-border bg-muted/30 p-3">
          <div className="w-full">
            <p className="text-xs text-muted-foreground">Invigilator</p>
            <p className="text-sm font-medium">{invigilator}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ExamCard;
