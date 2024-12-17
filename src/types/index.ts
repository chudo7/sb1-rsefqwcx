export interface TaskAttachment {
  type: 'image' | 'link';
  url: string;
  title: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  progress: number;
  createdAt: Date;
  attachments: TaskAttachment[];
}

export interface Project {
  tasks: Task[];
  totalProgress: number;
}