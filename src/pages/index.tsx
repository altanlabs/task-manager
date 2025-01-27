import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TaskList } from "@/components/blocks/task-list";
import { TaskForm } from "@/components/blocks/task-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const categories = ["Work", "Personal", "Shopping", "Other"];
const priorities = ["High", "Medium", "Low"];

const IndexPage = () => {
  import { useState } from "react";
const [date, setDate] = useState<Date | undefined>(new Date());
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Button onClick={() => setIsTaskFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <TaskList />
        </TabsContent>

        <TabsContent value="calendar">
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </TabsContent>
      </Tabs>

      <TaskForm
        isOpen={isTaskFormOpen}
        onClose={() => setIsTaskFormOpen(false)}
        categories={categories}
        priorities={priorities}
      />
    </div>
  );
};

export default IndexPage;
