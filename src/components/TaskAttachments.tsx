import React from 'react';
import { Link, Image } from 'lucide-react';
import { TaskAttachment } from '../types';

interface TaskAttachmentsProps {
  attachments: TaskAttachment[];
}

export function TaskAttachments({ attachments }: TaskAttachmentsProps) {
  if (attachments.length === 0) return null;

  return (
    <div className="mt-4 space-y-2">
      <h4 className="text-sm font-medium text-gray-700">Attachments</h4>
      <div className="space-y-2">
        {attachments.map((attachment, index) => (
          <div key={index} className="flex items-center gap-2">
            {attachment.type === 'image' ? (
              <div className="relative group">
                <img
                  src={attachment.url}
                  alt={attachment.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center rounded-md transition-all"
                >
                  <Image className="w-5 h-5 text-white opacity-0 group-hover:opacity-100" />
                </a>
              </div>
            ) : (
              <a
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Link className="w-4 h-4" />
                <span className="text-sm">{attachment.title}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}