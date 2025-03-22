
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample flashcard data
const flashcardSets = [
  {
    id: 1,
    title: "Data Structures Basics",
    description: "Learn the fundamentals of arrays, linked lists, stacks, and queues",
    cardCount: 24,
    category: "Data Structures",
    difficulty: "Beginner",
    created: "2023-09-15",
    author: "NeuraCS Team"
  },
  {
    id: 2,
    title: "Sorting Algorithms",
    description: "Master bubble sort, insertion sort, merge sort, and quicksort",
    cardCount: 18,
    category: "Algorithms",
    difficulty: "Intermediate",
    created: "2023-10-22",
    author: "NeuraCS Team"
  },
  {
    id: 3,
    title: "Big O Notation",
    description: "Understanding time and space complexity in algorithm analysis",
    cardCount: 12,
    category: "Algorithms",
    difficulty: "Intermediate",
    created: "2023-08-05",
    author: "NeuraCS Team"
  },
  {
    id: 4,
    title: "Java Fundamentals",
    description: "Core concepts of Java programming language",
    cardCount: 30,
    category: "Programming",
    difficulty: "Beginner",
    created: "2023-11-12",
    author: "NeuraCS Team"
  },
  {
    id: 5,
    title: "Graph Theory",
    description: "Understanding graphs, traversals, and common algorithms",
    cardCount: 22,
    category: "Data Structures",
    difficulty: "Advanced",
    created: "2023-07-28",
    author: "NeuraCS Team"
  },
  {
    id: 6,
    title: "Python for Data Science",
    description: "Essential Python concepts for data analysis and machine learning",
    cardCount: 27,
    category: "Programming",
    difficulty: "Intermediate",
    created: "2023-10-03",
    author: "NeuraCS Team"
  },
];

const FlashcardSetCard: React.FC<{ set: any }> = ({ set }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] border border-stone-100 dark:border-stone-700">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="bg-stone-50 text-stone-600 dark:bg-stone-700 dark:text-stone-300">
            {set.category}
          </Badge>
          <Badge variant="outline" className={`
            ${set.difficulty === 'Beginner' ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300' : ''}
            ${set.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300' : ''}
            ${set.difficulty === 'Advanced' ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300' : ''}
          `}>
            {set.difficulty}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">{set.title}</h3>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">{set.description}</p>
        
        <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400 mb-4">
          <div>
            {set.cardCount} cards
          </div>
          <div>
            by {set.author}
          </div>
        </div>
        
        <Button className="w-full bg-neura-600 hover:bg-neura-700 text-white">
          Study Now
        </Button>
      </div>
    </div>
  );
};

const Flashcards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  // Filter logic
  const filteredCards = flashcardSets.filter(set => {
    const matchesSearch = set.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           set.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || set.category === category;
    const matchesDifficulty = difficulty === 'all' || set.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Computer Science Flashcards
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Browse our collection of CS flashcards or create your own to master complex concepts effectively.
            </p>
          </div>
          
          {/* Filters & Search */}
          <div className="bg-white dark:bg-stone-800 rounded-xl p-6 mb-10 shadow-sm border border-stone-100 dark:border-stone-700 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
                <Input 
                  placeholder="Search flashcards..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Data Structures">Data Structures</SelectItem>
                    <SelectItem value="Algorithms">Algorithms</SelectItem>
                    <SelectItem value="Programming">Programming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Create Button */}
          <div className="flex justify-end mb-6 animate-fade-in">
            <Button className="bg-neura-600 hover:bg-neura-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Create Flashcard Set
            </Button>
          </div>
          
          {/* Flashcard Sets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredCards.map((set, index) => (
              <div key={set.id} className="animate-scale-in" style={{ animationDelay: `${0.05 * (index + 1)}s` }}>
                <FlashcardSetCard set={set} />
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 animate-fade-in">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8 bg-neura-50 text-neura-600 border-neura-200 dark:bg-neura-900/30 dark:text-neura-400 dark:border-neura-700">1</Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8">2</Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8">3</Button>
            <span>...</span>
            <Button variant="outline" size="sm" className="h-8 min-w-8">8</Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Flashcards;
