
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';

const Auth: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="flex justify-center mb-8 animate-fade-in">
            <span className="font-mono text-3xl font-bold tracking-tight text-neura-700 dark:text-neura-400">
              Neura<span className="text-neura-500">CS</span>
            </span>
          </div>
          
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Welcome</CardTitle>
              <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="password">Password</Label>
                          <a href="#" className="text-xs text-neura-600 hover:text-neura-800 dark:text-neura-400 dark:hover:text-neura-300">
                            Forgot password?
                          </a>
                        </div>
                        <Input id="password" type="password" placeholder="••••••••" required />
                      </div>
                      <Button type="submit" className="bg-neura-600 hover:bg-neura-700 text-white" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignup}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John Doe" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input id="signup-email" type="email" placeholder="m@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input id="signup-password" type="password" placeholder="••••••••" required />
                      </div>
                      <Button type="submit" className="bg-neura-600 hover:bg-neura-700 text-white" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200 dark:border-stone-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white dark:bg-stone-800 px-2 text-stone-500 dark:text-stone-400">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-11">
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
                <Button variant="outline" className="h-11">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col">
              <p className="text-xs text-center text-stone-500 dark:text-stone-400 mt-4">
                By continuing, you agree to our{" "}
                <a href="#" className="underline text-neura-600 dark:text-neura-400">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline text-neura-600 dark:text-neura-400">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
