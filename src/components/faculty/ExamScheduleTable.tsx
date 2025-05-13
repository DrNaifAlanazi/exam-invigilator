
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ExamScheduleItem = {
  id: number;
  examCode: string;
  subject: string;
  students: number;
  date: string;
  time: string;
  venue: string;
  invigilator: string;
  status: string;
};

interface ExamScheduleTableProps {
  data: ExamScheduleItem[];
  selectedExam: number | null;
  onSelectExam: (examId: number) => void;
}

const ExamScheduleTable = ({ data, selectedExam, onSelectExam }: ExamScheduleTableProps) => {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs uppercase bg-[#141E26] text-gray-300">
        <tr>
          <th scope="col" className="px-4 py-3">Exam Code</th>
          <th scope="col" className="px-4 py-3">Subject</th>
          <th scope="col" className="px-4 py-3">Students</th>
          <th scope="col" className="px-4 py-3">Date & Time</th>
          <th scope="col" className="px-4 py-3">Venue</th>
          <th scope="col" className="px-4 py-3">Invigilator</th>
          <th scope="col" className="px-4 py-3">Status</th>
          <th scope="col" className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((exam) => (
          <tr 
            key={exam.id} 
            className={`border-b ${selectedExam === exam.id ? 'border-[#7E69AB] bg-[#1A262E]/90' : 'border-[#A1B5BE]/10 bg-[#1A262E] hover:bg-[#1A262E]/80'} cursor-pointer`}
            onClick={() => onSelectExam(exam.id)}
          >
            <td className="px-4 py-3 text-white">{exam.examCode}</td>
            <td className="px-4 py-3 text-white">{exam.subject}</td>
            <td className="px-4 py-3 text-white">{exam.students}</td>
            <td className="px-4 py-3">
              <div className="text-white">{exam.date}</div>
              <div className="text-gray-400 text-xs">{exam.time}</div>
            </td>
            <td className="px-4 py-3 text-white">{exam.venue}</td>
            <td className="px-4 py-3 text-white">{exam.invigilator || "—"}</td>
            <td className="px-4 py-3">
              {exam.status === 'preferred' && (
                <Badge className="bg-[#7E69AB] text-white">
                  Preferred
                </Badge>
              )}
            </td>
            <td className="px-4 py-3">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExamScheduleTable;
