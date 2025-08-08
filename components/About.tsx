import { Card, CardContent } from './ui/card';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const stats = [
  { number: '500+', label: 'AI Projects Delivered', icon: Target },
  { number: '98%', label: 'Client Satisfaction', icon: Award },
  { number: '50+', label: 'AI Experts', icon: Users },
  { number: '10+', label: 'Years Experience', icon: Lightbulb },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI365Labs</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are a team of AI pioneers, data scientists, and technology innovators dedicated to transforming 
                businesses through intelligent automation and machine learning solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to democratize AI technology, making it accessible and impactful for organizations 
                of all sizes. We believe in the power of artificial intelligence to solve complex problems and 
                drive meaningful progress.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Innovation-First Approach</h4>
                  <p className="text-muted-foreground">We stay at the forefront of AI research and development to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Expert Team</h4>
                  <p className="text-muted-foreground">Our multidisciplinary team combines deep AI expertise with industry knowledge.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur border-0 shadow-lg">
                    <CardContent className="space-y-3">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="space-y-4">
                <h4 className="text-xl">Ready to Transform Your Business?</h4>
                <p className="text-blue-100">
                  Join hundreds of companies that have already revolutionized their operations with our AI solutions.
                </p>
                <div className="pt-2">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Get Started Today
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}