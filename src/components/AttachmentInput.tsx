import React, { useState } from 'react';
import { Link, Image, X } from 'lucide-react';
import { TaskAttachment } from '../types';

interface AttachmentInputProps {
  onAdd: (attachment: TaskAttachment) => void;
}

export function AttachmentInput({ onAdd }: AttachmentInputProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [type, setType] = useState<'image' | 'link'>('link');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!url || !title) return;
    onAdd({ type, url, title });
    setUrl('');
    setTitle('');
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setType('image');
            setIsAdding(true);
          }}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
        >
          <Image className="w-4 h-4" />
          Add Image
        </button>
        <button
          type="button"
          onClick={() => {
            setType('link');
            setIsAdding(true);
          }}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
        >
          <Link className="w-4 h-4" />
          Add Link
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">
          Add {type === 'image' ? 'Image' : 'Link'}
        </h4>
        <button
          type="button"
          onClick={() => setIsAdding(false)}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <input
          type="url"
          placeholder={`Enter ${type} URL`}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-3 py-1.5 text-sm border rounded-md"
          required
        />
        <input
          type="text"
          placeholder={type === 'image' ? 'Image description' : 'Link title'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-1.5 text-sm border rounded-md"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!url || !title}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add {type === 'image' ? 'Image' : 'Link'}
        </button>
      </div>
    </div>
  );
}