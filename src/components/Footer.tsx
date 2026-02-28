import { Link } from "react-router-dom";
import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">FoodSaver</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Reducing food waste, feeding communities. Every meal matters.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/browse" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse Food</Link>
              <Link to="/donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Donate Food</Link>
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Resources</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">About Us</span>
              <span className="text-sm text-muted-foreground">How It Works</span>
              <span className="text-sm text-muted-foreground">Impact Report</span>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">hello@foodsaver.app</span>
              <span className="text-sm text-muted-foreground">Support Center</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 FoodSaver. All rights reserved.</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-destructive" /> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
