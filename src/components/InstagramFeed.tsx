
import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

// Mock Instagram data - in a real app, you'd fetch this from Instagram API
const INSTAGRAM_POSTS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    likes: 142,
    comments: 12
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    likes: 89,
    comments: 5
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    likes: 223,
    comments: 18
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    likes: 76,
    comments: 2
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    likes: 156,
    comments: 9
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZSUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    likes: 102,
    comments: 7
  }
];

const InstagramFeed = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {INSTAGRAM_POSTS.map((post) => (
        <a 
          key={post.id}
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group aspect-square overflow-hidden rounded"
        >
          <img 
            src={post.image} 
            alt="Instagram post" 
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-cafe-brown/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
            <div className="text-center">
              <Instagram className="mx-auto mb-1" />
              <div className="flex items-center space-x-2 text-sm">
                <span>♥ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
