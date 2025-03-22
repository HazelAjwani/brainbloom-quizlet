
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Lightbulb } from 'lucide-react';

const sampleQuizzes = [
  {
    id: 1,
    title: "Algorithms Fundamentals",
    description: "Test your knowledge of sorting algorithms, search techniques, and algorithmic complexity.",
    questions: 15,
    time: "20 mins",
    difficulty: "Medium",
    topics: ["Algorithms", "Big O", "Sorting"]
  },
  {
    id: 2,
    title: "Data Structures Deep Dive",
    description: "From arrays to trees - explore the fundamental building blocks of computer science.",
    questions: 20,
    time: "25 mins",
    difficulty: "Hard",
    topics: ["Arrays", "Trees", "Graphs", "Stacks"]
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Master Python syntax, features, and common programming patterns.",
    questions: 12,
    time: "15 mins",
    difficulty: "Easy",
    topics: ["Python", "Syntax", "Functions"]
  }
];

const QuizCard: React.FC<{ quiz: any }> = ({ quiz }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-md border border-stone-100 dark:border-stone-700 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="bg-neura-600 dark:bg-neura-700 h-2" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">{quiz.title}</h3>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">{quiz.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {quiz.topics.map((topic: string) => (
            <Badge key={topic} variant="secondary" className="bg-stone-100 text-stone-700 dark:bg-stone-700 dark:text-stone-300">
              {topic}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.time}</span>
          </div>
          <div className="flex items-center">
            <Lightbulb className="h-4 w-4 mr-1" />
            <span>{quiz.questions} questions</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            <span>{quiz.difficulty}</span>
          </div>
        </div>
        
        <Link to="/quizzes">
          <Button className="w-full bg-neura-50 hover:bg-neura-100 text-neura-700 dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-neura-300">
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
};

const QuizSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Test Your Knowledge with Interactive Quizzes
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            Challenge yourself with our extensive collection of CS quizzes designed to test and reinforce your understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleQuizzes.map((quiz, index) => (
            <div key={quiz.id} className="animate-scale-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <QuizCard quiz={quiz} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Link to="/quizzes">
            <Button className="bg-neura-600 hover:bg-neura-700 text-white">
              Browse All Quizzes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
