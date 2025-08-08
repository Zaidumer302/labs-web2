import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Revolutionizing AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Intelligent AI Solutions
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI365Labs delivers cutting-edge artificial intelligence solutions that automate processes, 
            enhance decision-making, and drive unprecedented growth for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl">Fast Implementation</h3>
              <p className="text-muted-foreground">Get AI solutions deployed in weeks, not months</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl">Advanced AI Models</h3>
              <p className="text-muted-foreground">Leverage state-of-the-art machine learning technologies</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl">Measurable Results</h3>
              <p className="text-muted-foreground">Track ROI with detailed analytics and insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}