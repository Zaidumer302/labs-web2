import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Brain, Bot, BarChart3, Shield, Cpu, Zap } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data for predictive analytics, classification, and pattern recognition.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Automate complex business processes with AI-powered bots and workflow optimization.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Insights',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'AI Security Solutions',
    description: 'Protect your systems with AI-driven threat detection and cybersecurity protocols.',
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for quality control, recognition, and monitoring.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Zap,
    title: 'Natural Language Processing',
    description: 'Build intelligent chatbots, content analysis, and language understanding systems.',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your industry needs, from conception to deployment and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}