
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FlashcardSection from '@/components/FlashcardSection';
import QuizSection from '@/components/QuizSection';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FlashcardSection />
      <QuizSection />
      
      {/* Features Section */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Why Choose NeuraCS?
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Our platform is designed with learning science principles to help you master computer science concepts effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neura-100 dark:bg-neura-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neura-600 dark:text-neura-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">Scientifically Optimized</h3>
              <p className="text-stone-600 dark:text-stone-400">
                Our platform uses spaced repetition and active recall principles to maximize your learning and retention.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neura-100 dark:bg-neura-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neura-600 dark:text-neura-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">Fully Customizable</h3>
              <p className="text-stone-600 dark:text-stone-400">
                Create your own flashcards and quizzes or use our pre-built content tailored to CS topics.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neura-100 dark:bg-neura-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neura-600 dark:text-neura-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">Track Your Progress</h3>
              <p className="text-stone-600 dark:text-stone-400">
                Monitor your learning metrics and focus on areas that need improvement with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-neura-600 dark:bg-neura-800 opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_75%)] dark:bg-[linear-gradient(to_right,#0c4a6e20_1px,transparent_1px),linear-gradient(to_bottom,#0c4a6e20_1px,transparent_1px)] -z-20"></div>
        
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-6">
              Ready to Transform Your CS Learning?
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who are mastering computer science concepts the smart way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/auth">
                <Button size="lg" className="bg-neura-600 hover:bg-neura-700 text-white">
                  Get Started for Free
                </Button>
              </a>
              <a href="/flashcards">
                <Button size="lg" variant="outline" className="border-neura-600 text-neura-600 hover:bg-neura-50 dark:border-neura-400 dark:text-neura-400 dark:hover:bg-neura-900/30">
                  Explore Flashcards
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
