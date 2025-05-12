
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { FileSpreadsheet, Upload } from "lucide-react";

const ExamImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sheetUrl, setSheetUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSheetUrl(e.target.value);
  };

  const handleFileUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an Excel file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate file processing
    setTimeout(() => {
      // This will be replaced with actual processing logic
      console.log("Processing file:", file.name);
      
      toast({
        title: "File uploaded successfully",
        description: "Your exam schedule has been imported and processed",
      });
      
      setIsLoading(false);
      setFile(null);
    }, 2000);
  };

  const handleSheetImport = () => {
    if (!sheetUrl) {
      toast({
        title: "No URL provided",
        description: "Please enter a Google Sheet URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate sheet processing
    setTimeout(() => {
      // This will be replaced with actual processing logic
      console.log("Processing Google Sheet:", sheetUrl);
      
      toast({
        title: "Sheet imported successfully",
        description: "Your exam schedule has been imported and processed",
      });
      
      setIsLoading(false);
      setSheetUrl("");
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue="excel">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="excel">Excel File</TabsTrigger>
          <TabsTrigger value="google">Google Sheet</TabsTrigger>
        </TabsList>
        
        <TabsContent value="excel">
          <Card>
            <CardHeader>
              <CardTitle>Import Excel File</CardTitle>
              <CardDescription>
                Upload an Excel file containing the exam schedule and faculty list
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 text-center">
                <FileSpreadsheet className="h-8 w-8 mb-4 text-muted-foreground" />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Upload Excel File</h3>
                  <p className="text-sm text-muted-foreground">
                    The file should contain two sheets: Exam Schedule and Faculty List
                  </p>
                </div>
                <div className="mt-6 w-full max-w-xs">
                  <Input
                    id="fileUpload"
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                </div>
                {file && (
                  <p className="mt-2 text-sm text-primary">
                    Selected: {file.name}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleFileUpload} 
                className="w-full" 
                disabled={!file || isLoading}
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload and Process
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="google">
          <Card>
            <CardHeader>
              <CardTitle>Import Google Sheet</CardTitle>
              <CardDescription>
                Connect to a Google Sheet containing the exam schedule and faculty list
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Enter the URL of your Google Sheet. Make sure the sheet is accessible.
                </p>
                <Input
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  value={sheetUrl}
                  onChange={handleUrlChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSheetImport} 
                className="w-full" 
                disabled={!sheetUrl || isLoading}
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Import and Process
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExamImport;
