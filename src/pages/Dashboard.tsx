import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Package, TrendingDown, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dashboardStats = [
  { label: "Total Donations", value: "24", icon: Package, color: "text-primary" },
  { label: "Food Saved (kg)", value: "156", icon: TrendingDown, color: "text-success" },
  { label: "Pending Pickups", value: "3", icon: Clock, color: "text-warning" },
  { label: "Completed", value: "21", icon: CheckCircle, color: "text-primary" },
];

const recentDonations = [
  { id: 1, item: "Fresh Vegetables", qty: "5 kg", status: "Picked Up", date: "Feb 27" },
  { id: 2, item: "Bread & Pastries", qty: "12 pcs", status: "Pending", date: "Feb 26" },
  { id: 3, item: "Canned Goods", qty: "8 cans", status: "Picked Up", date: "Feb 25" },
  { id: 4, item: "Rice & Grains", qty: "10 kg", status: "Completed", date: "Feb 24" },
];

const Dashboard = () => {
  const { userName } = useAuth();

  return (
    <AppLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Welcome back, {userName}! 👋
          </h1>
          <p className="mt-1 text-muted-foreground">Here's your food donation overview.</p>
        </motion.div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="shadow-card">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions + Recent */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-lg">Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDonations.map((d) => (
                    <div key={d.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{d.item}</p>
                        <p className="text-xs text-muted-foreground">{d.qty} • {d.date}</p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          d.status === "Completed"
                            ? "bg-primary/10 text-primary"
                            : d.status === "Pending"
                            ? "bg-warning/10 text-warning"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        {d.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="shadow-card gradient-primary">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-lg font-bold text-primary-foreground">Donate Now</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">Have surplus food? Share it!</p>
                <Link to="/donate">
                  <Button variant="secondary" size="sm" className="mt-4 gap-1">
                    Donate Food <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-lg font-bold text-foreground">Browse Available</h3>
                <p className="mt-1 text-sm text-muted-foreground">Find food near you</p>
                <Link to="/browse">
                  <Button variant="outline" size="sm" className="mt-4 gap-1">
                    Browse <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
