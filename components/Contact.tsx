import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl">
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your AI transformation? Let's discuss your project and explore how we can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Company Name" />
                <Textarea placeholder="Tell us about your project..." rows={4} />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@ai365labs.com</p>
                    <p className="text-muted-foreground">support@ai365labs.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Office</h4>
                    <p className="text-muted-foreground">123 AI Innovation Drive</p>
                    <p className="text-muted-foreground">Tech Valley, CA 94025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-muted-foreground">Weekend: Emergency support only</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}