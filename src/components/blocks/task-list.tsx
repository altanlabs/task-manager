import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Complete project report",
    category: "Work",
    dueDate: "2024-06-15",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Buy groceries",
    category: "Shopping",
    dueDate: "2024-06-10",
    priority: "Medium",
    completed: true,
  },
];

export const TaskList = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <Checkbox checked={task.completed} />
            </TableCell>
            <TableCell className="font-medium">{task.title}</TableCell>
            <TableCell>
              <Badge variant="outline">{task.category}</Badge>
            </TableCell>
            <TableCell>{task.dueDate}</TableCell>
            <TableCell>
              <Badge variant={task.priority === "High" ? "destructive" : "secondary"}>
                {task.priority}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
