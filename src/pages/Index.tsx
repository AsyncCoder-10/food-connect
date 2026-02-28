import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, TrendingDown, Users, Package, ArrowRight, Recycle, Heart, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Meals Saved", value: "12,450+", icon: Package },
  { label: "Active Donors", value: "890+", icon: Users },
  { label: "Waste Reduced", value: "8.2 tons", icon: TrendingDown },
];

const features = [
  {
    icon: Recycle,
    title: "Track Food Waste",
    description: "Monitor and reduce food wastage with AI-powered insights and analytics.",
  },
  {
    icon: Heart,
    title: "Donate Easily",
    description: "Connect surplus food with those who need it most in your community.",
  },
  {
    icon: BarChart3,
    title: "Measure Impact",
    description: "See your real-time contribution to sustainability and community welfare.",
  },
];

const Index = () => {
  return (
    <AppLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 gradient-hero opacity-20" />
        </div>
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">AI-Powered Food Waste Reduction</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
              Save Food,{" "}
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Feed Communities
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Join the movement to reduce food waste and connect surplus food with people who need it.
              Every donation makes a difference.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button size="lg" className="gap-2 px-8">
                  Start Donating <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="px-8">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center rounded-xl bg-card p-6 shadow-card">
                <stat.icon className="mb-2 h-6 w-6 text-primary" />
                <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card/50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-3 text-muted-foreground">
              A simple yet powerful platform to reduce waste and help your community.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-primary p-10 text-center shadow-elevated">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to make a difference?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
              Join thousands of donors and organizations already reducing food waste in their communities.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="mt-6 gap-2 px-8">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
