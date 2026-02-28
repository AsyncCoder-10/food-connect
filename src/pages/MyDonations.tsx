import AppLayout from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Package, MapPin, Clock } from "lucide-react";

const donations = [
  { id: 1, item: "Fresh Vegetables", qty: "5 kg", category: "Vegetables", status: "Picked Up", date: "Feb 27, 2026", location: "Downtown Market" },
  { id: 2, item: "Bread & Pastries", qty: "12 pcs", category: "Bakery", status: "Pending", date: "Feb 26, 2026", location: "Baker's Corner" },
  { id: 3, item: "Canned Goods", qty: "8 cans", category: "Canned", status: "Completed", date: "Feb 25, 2026", location: "Community Center" },
  { id: 4, item: "Rice & Grains", qty: "10 kg", category: "Grains", status: "Completed", date: "Feb 24, 2026", location: "Food Bank HQ" },
  { id: 5, item: "Milk & Cheese", qty: "3 liters", category: "Dairy", status: "Expired", date: "Feb 22, 2026", location: "Local Grocery" },
];

const statusColors: Record<string, string> = {
  "Picked Up": "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Completed: "bg-primary/10 text-primary",
  Expired: "bg-destructive/10 text-destructive",
};

const MyDonations = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground">My Donations</h1>
          <p className="mt-1 text-muted-foreground">Track all your food donations</p>
        </motion.div>

        <div className="mt-6 space-y-3">
          {donations.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="shadow-card transition-shadow hover:shadow-elevated">
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{d.item}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span>{d.qty}</span>
                        <span>•</span>
                        <Badge variant="secondary" className="text-xs">{d.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-right">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{d.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{d.date}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[d.status]}`}>
                      {d.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default MyDonations;
