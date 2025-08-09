import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechCorp Solutions',
    industry: 'Manufacturing',
    challenge: 'Quality Control Automation',
    solution: 'Computer Vision for defect detection',
    results: {
      efficiency: '+85%',
      costs: '-40%',
      accuracy: '99.2%'
    },
    testimonial: 'AI365Labs transformed our quality control process. We now catch defects 10x faster than before.',
    avatar: '👨‍💼'
  },
  {
    company: 'RetailMax',
    industry: 'E-commerce',
    challenge: 'Customer Service Scalability',
    solution: 'Intelligent chatbot and sentiment analysis',
    results: {
      response: '-60%',
      satisfaction: '+45%',
      automation: '78%'
    },
    testimonial: 'The AI chatbot handles 80% of our customer queries automatically while maintaining high satisfaction.',
    avatar: '👩‍💼'
  },
  {
    company: 'FinanceFlow',
    industry: 'Financial Services',
    challenge: 'Fraud Detection',
    solution: 'ML-based fraud prevention system',
    results: {
      fraud: '-92%',
      false_positives: '-65%',
      processing: '+300%'
    },
    testimonial: 'Our fraud detection accuracy improved dramatically, saving millions in potential losses.',
    avatar: '👨‍💻'
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">{study.industry}</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl">{study.company}</h3>
                <p className="text-muted-foreground">{study.challenge}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(study.results).map(([key, value], idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg">
                      <div className="text-lg text-green-600">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{study.avatar}</div>
                    <div>
                      <p className="text-sm italic text-muted-foreground">"{study.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the companies that have transformed their operations with AI365Labs. Let's discuss how we can help you achieve similar results.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}