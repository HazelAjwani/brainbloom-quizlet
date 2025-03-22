
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sampleFlashcards = [
  {
    id: 1,
    question: "What is Big O Notation?",
    answer: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity, used to classify algorithms according to their time or space complexity."
  },
  {
    id: 2,
    question: "Explain the concept of recursion",
    answer: "A method where the solution to a problem depends on solutions to smaller instances of the same problem. In programming, a recursive function is one that calls itself."
  },
  {
    id: 3,
    question: "What is a Binary Search Tree?",
    answer: "A binary tree data structure where each node has at most two children, which are referred to as the left child and the right child. The left subtree contains only nodes with keys lesser than the node's key, while the right subtree contains only nodes with keys greater than the node's key."
  }
];

const FlashcardItem: React.FC<{ card: { question: string; answer: string } }> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[280px] w-full max-w-md mx-auto perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full rounded-xl preserve-3d transition-all duration-500 ${isFlipped ? 'animate-flip' : 'animate-flip-back'}`}>
        {/* Front - Question */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-white dark:bg-stone-800 p-6 shadow-md flex flex-col justify-between border border-stone-100 dark:border-stone-700">
          <div className="flex-1 flex items-center justify-center">
            <h3 className="text-xl font-medium text-stone-800 dark:text-white text-center">{card.question}</h3>
          </div>
          <div className="text-xs text-stone-400 dark:text-stone-500 text-center mt-4">Click to flip</div>
        </div>
        
        {/* Back - Answer */}
        <div className="absolute inset-0 backface-hidden flip-y-180 rounded-xl bg-neura-50 dark:bg-stone-900 p-6 shadow-md flex flex-col justify-between border border-stone-100 dark:border-stone-700">
          <div className="flex-1 flex items-center justify-center overflow-auto">
            <p className="text-base text-stone-700 dark:text-stone-300 text-center">{card.answer}</p>
          </div>
          <div className="text-xs text-stone-400 dark:text-stone-500 text-center mt-4">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

const FlashcardSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 dark:bg-stone-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
            Master CS Concepts with Interactive Flashcards
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            Create your own flashcards or choose from our extensive library covering algorithms, data structures, programming languages, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleFlashcards.map((card, index) => (
            <div key={card.id} className="animate-scale-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <FlashcardItem card={card} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Link to="/flashcards">
            <Button className="bg-neura-600 hover:bg-neura-700 text-white">
              Browse All Flashcards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashcardSection;
