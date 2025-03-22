
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
import { Search, Clock, Award, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample quiz data
const quizzes = [
  {
    id: 1,
    title: "Data Structures Essentials",
    description: "Test your knowledge on arrays, linked lists, stacks, queues, and trees",
    questions: 20,
    time: "25 mins",
    category: "Data Structures",
    difficulty: "Intermediate",
    attempts: 1.2,
    avgScore: 78,
  },
  {
    id: 2,
    title: "Sorting & Searching Algorithms",
    description: "From bubble sort to binary search - test your algorithm knowledge",
    questions: 15,
    time: "20 mins",
    category: "Algorithms",
    difficulty: "Advanced",
    attempts: 0.8,
    avgScore: 65,
  },
  {
    id: 3,
    title: "Introduction to Python",
    description: "Basic syntax, data types, control flow, and functions in Python",
    questions: 25,
    time: "30 mins",
    category: "Programming",
    difficulty: "Beginner",
    attempts: 3.5,
    avgScore: 82,
  },
  {
    id: 4,
    title: "Java OOP Concepts",
    description: "Classes, objects, inheritance, polymorphism, encapsulation, and abstraction",
    questions: 18,
    time: "25 mins",
    category: "Programming",
    difficulty: "Intermediate",
    attempts: 1.7,
    avgScore: 74,
  },
  {
    id: 5,
    title: "Database Fundamentals",
    description: "SQL basics, normalization, transactions, and database design",
    questions: 22,
    time: "30 mins",
    category: "Databases",
    difficulty: "Intermediate",
    attempts: 1.4,
    avgScore: 71,
  },
  {
    id: 6,
    title: "Computer Networks",
    description: "OSI model, TCP/IP, routing protocols, and network security",
    questions: 30,
    time: "40 mins",
    category: "Networks",
    difficulty: "Advanced",
    attempts: 0.9,
    avgScore: 68,
  },
];

const QuizCard: React.FC<{ quiz: any }> = ({ quiz }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] border border-stone-100 dark:border-stone-700">
      <div className={`h-2 
        ${quiz.difficulty === 'Beginner' ? 'bg-green-500 dark:bg-green-600' : ''}
        ${quiz.difficulty === 'Intermediate' ? 'bg-yellow-500 dark:bg-yellow-600' : ''}
        ${quiz.difficulty === 'Advanced' ? 'bg-red-500 dark:bg-red-600' : ''}
      `} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="bg-stone-50 text-stone-600 dark:bg-stone-700 dark:text-stone-300">
            {quiz.category}
          </Badge>
          <Badge variant="outline" className={`
            ${quiz.difficulty === 'Beginner' ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300' : ''}
            ${quiz.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300' : ''}
            ${quiz.difficulty === 'Advanced' ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300' : ''}
          `}>
            {quiz.difficulty}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">{quiz.title}</h3>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">{quiz.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-stone-500 dark:text-stone-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.time}</span>
          </div>
          <div className="flex items-center text-sm text-stone-500 dark:text-stone-400">
            <Award className="h-4 w-4 mr-1" />
            <span>{quiz.questions} questions</span>
          </div>
          <div className="flex items-center text-sm text-stone-500 dark:text-stone-400">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{quiz.avgScore}% avg. score</span>
          </div>
          <div className="flex items-center text-sm text-stone-500 dark:text-stone-400">
            <span>{quiz.attempts}k attempts</span>
          </div>
        </div>
        
        <Button className="w-full bg-neura-600 hover:bg-neura-700 text-white">
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

const Quizzes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  // Filter logic
  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || quiz.category === category;
    const matchesDifficulty = difficulty === 'all' || quiz.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Computer Science Quizzes
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Test your knowledge with our collection of quizzes across various computer science topics.
            </p>
          </div>
          
          {/* Filters & Search */}
          <div className="bg-white dark:bg-stone-800 rounded-xl p-6 mb-10 shadow-sm border border-stone-100 dark:border-stone-700 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
                <Input 
                  placeholder="Search quizzes..." 
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
                    <SelectItem value="Databases">Databases</SelectItem>
                    <SelectItem value="Networks">Networks</SelectItem>
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
          
          {/* Quiz Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredQuizzes.map((quiz, index) => (
              <div key={quiz.id} className="animate-scale-in" style={{ animationDelay: `${0.05 * (index + 1)}s` }}>
                <QuizCard quiz={quiz} />
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
            <span>...</span>
            <Button variant="outline" size="sm" className="h-8 min-w-8">4</Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quizzes;
