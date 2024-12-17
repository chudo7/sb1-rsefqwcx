import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Task } from '../types';
import { TaskAttachments } from './TaskAttachments';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
  onProgressChange: (id: string, progress: number) => void;
}

export function TaskCard({ task, onEdit, onDelete, onStatusChange, onProgressChange }: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-3">{task.description}</p>
      
      <div className="mb-3">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
          className="px-3 py-1 border rounded-md text-sm"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Progress</label>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="100"
            value={task.progress}
            onChange={(e) => onProgressChange(task.id, Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-sm font-medium">{task.progress}%</span>
        </div>
      </div>

      <TaskAttachments attachments={task.attachments} />
    </div>
  );
}