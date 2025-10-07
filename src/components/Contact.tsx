import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Ping Us</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Contact TruPick — we value your questions and feedback. Send us a message and our team will respond promptly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="gradient-card shadow-soft rounded-xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@trupick.com</p>
                  </div>
                </div>
              </div>
              
              <div className="gradient-card shadow-soft rounded-xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-white" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-white" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="bg-white min-h-[120px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
