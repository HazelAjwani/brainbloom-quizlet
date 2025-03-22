
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neura-50/60 to-transparent dark:from-neura-900/20 dark:to-transparent -z-10"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#0c4a6e10_1px,transparent_1px),linear-gradient(to_bottom,#0c4a6e10_1px,transparent_1px)] -z-20"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-slide-down">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-neura-100 dark:bg-neura-900/30 text-neura-700 dark:text-neura-300 text-xs font-medium">
              Revolutionizing Computer Science Learning
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Master <span className="text-neura-600 dark:text-neura-400">Computer Science</span> with Intelligent Flashcards
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            NeuraCS helps you remember complex CS concepts through interactive flashcards and quizzes, 
            optimized with spaced repetition algorithms for maximum retention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/flashcards">
              <Button size="lg" className="bg-neura-600 hover:bg-neura-700 text-white">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-neura-600 text-neura-600 hover:bg-neura-50 dark:border-neura-400 dark:text-neura-400 dark:hover:bg-neura-900/30">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
