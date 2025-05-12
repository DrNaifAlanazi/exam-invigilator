
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PreferenceForm from "@/components/faculty/PreferenceForm";

const FacultyPreferences = () => {
  return (
    <DashboardLayout userRole="faculty" pageTitle="Update Preferences">
      <PreferenceForm />
    </DashboardLayout>
  );
};

export default FacultyPreferences;
