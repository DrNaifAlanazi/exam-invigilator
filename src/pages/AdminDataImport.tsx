
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ExamImport from "@/components/admin/ExamImport";

const AdminDataImport = () => {
  return (
    <DashboardLayout userRole="admin" pageTitle="Data Import">
      <ExamImport />
    </DashboardLayout>
  );
};

export default AdminDataImport;
