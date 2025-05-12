
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

type WeekDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday";

const daysOfWeek: { id: WeekDay; label: string }[] = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
];

const timeSlots = ["9:00 AM - 11:00 AM", "12:00 PM - 2:00 PM", "3:00 PM - 5:00 PM"];

const PreferenceForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [preferredDays, setPreferredDays] = useState<WeekDay[]>([]);
  const [availability, setAvailability] = useState<Record<string, string[]>>({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });
  const [maxExams, setMaxExams] = useState<number>(2);
  const { toast } = useToast();

  const handlePreferredDayChange = (day: WeekDay) => {
    setPreferredDays((current) => {
      if (current.includes(day)) {
        return current.filter((d) => d !== day);
      } else {
        return [...current, day];
      }
    });
  };

  const handleAvailabilityChange = (day: WeekDay, slot: string) => {
    setAvailability((current) => {
      const currentSlots = current[day] || [];
      if (currentSlots.includes(slot)) {
        return {
          ...current,
          [day]: currentSlots.filter((s) => s !== slot),
        };
      } else {
        return {
          ...current,
          [day]: [...currentSlots, slot],
        };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // This will be replaced with actual API call when connected to Supabase
    console.log({
      preferredDays,
      availability,
      maxExams,
    });

    toast({
      title: "Preferences submitted",
      description: "Your availability and preferences have been saved",
    });

    // Reset form to step 1
    setCurrentStep(1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue="step1" value={`step${currentStep}`}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="step1" disabled={currentStep !== 1}>
            <span className="flex items-center">
              <span className="w-6 h-6 rounded-full border border-current inline-flex items-center justify-center mr-2">
                {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
              </span>
              Preferred Days
            </span>
          </TabsTrigger>
          <TabsTrigger value="step2" disabled={currentStep !== 2}>
            <span className="flex items-center">
              <span className="w-6 h-6 rounded-full border border-current inline-flex items-center justify-center mr-2">
                {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : "2"}
              </span>
              Availability
            </span>
          </TabsTrigger>
          <TabsTrigger value="step3" disabled={currentStep !== 3}>
            <span className="flex items-center">
              <span className="w-6 h-6 rounded-full border border-current inline-flex items-center justify-center mr-2">
                3
              </span>
              Preferences
            </span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="step1">
          <Card>
            <CardHeader>
              <CardTitle>Select Preferred Days</CardTitle>
              <CardDescription>
                Choose the days you would prefer to invigilate exams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {daysOfWeek.map((day) => (
                  <div key={day.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`preferred-${day.id}`} 
                      checked={preferredDays.includes(day.id)}
                      onCheckedChange={() => handlePreferredDayChange(day.id)}
                    />
                    <label
                      htmlFor={`preferred-${day.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {day.label}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="step2">
          <Card>
            <CardHeader>
              <CardTitle>Set Your Availability</CardTitle>
              <CardDescription>
                Select the time slots when you are available to invigilate exams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {daysOfWeek.map((day) => (
                  <div key={day.id} className="space-y-2">
                    <h3 className="font-medium">{day.label}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <div key={slot} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`${day.id}-${slot}`} 
                            checked={(availability[day.id] || []).includes(slot)}
                            onCheckedChange={() => handleAvailabilityChange(day.id, slot)}
                          />
                          <label
                            htmlFor={`${day.id}-${slot}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {slot}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="step3">
          <Card>
            <CardHeader>
              <CardTitle>Additional Preferences</CardTitle>
              <CardDescription>
                Configure your additional invigilation preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <FormField
                  name="maxExams"
                  render={() => (
                    <FormItem>
                      <FormLabel>Maximum Exams Per Week</FormLabel>
                      <FormControl>
                        <Input 
                          type="number"
                          value={maxExams}
                          onChange={(e) => setMaxExams(Number(e.target.value))}
                          min={1}
                          max={10}
                        />
                      </FormControl>
                      <FormDescription>
                        Set the maximum number of exams you can invigilate in a week
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleSubmit}>Submit Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PreferenceForm;
