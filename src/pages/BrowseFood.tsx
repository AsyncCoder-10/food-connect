import AppLayout from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MapPin, Clock, Search, Apple, Wheat, Milk } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const availableFood = [
  { id: 1, item: "Organic Apples", qty: "3 kg", donor: "Green Farm Co.", location: "Market Street", expiry: "Mar 2", category: "Fruits", icon: Apple },
  { id: 2, item: "Whole Wheat Bread", qty: "8 loaves", donor: "Sunny Bakery", location: "Oak Avenue", expiry: "Feb 28", category: "Bakery", icon: Wheat },
  { id: 3, item: "Fresh Milk", qty: "5 liters", donor: "Dairy Plus", location: "Elm Road", expiry: "Mar 1", category: "Dairy", icon: Milk },
  { id: 4, item: "Mixed Vegetables", qty: "7 kg", donor: "Local Kitchen", location: "Pine Street", expiry: "Mar 3", category: "Vegetables", icon: Apple },
  { id: 5, item: "Cooked Rice", qty: "15 servings", donor: "Restaurant XYZ", location: "Main Blvd", expiry: "Feb 28", category: "Cooked", icon: Wheat },
  { id: 6, item: "Yogurt Cups", qty: "20 pcs", donor: "Health Foods", location: "Park Lane", expiry: "Mar 5", category: "Dairy", icon: Milk },
];

const BrowseFood = () => {
  const [search, setSearch] = useState("");
  const filtered = availableFood.filter((f) =>
    f.item.toLowerCase().includes(search.toLowerCase()) || f.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground">Browse Available Food</h1>
          <p className="mt-1 text-muted-foreground">Claim food donations near you</p>
        </motion.div>

        <div className="relative mt-6 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by food or category..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((food, i) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="shadow-card transition-shadow hover:shadow-elevated">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <food.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{food.category}</Badge>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{food.item}</h3>
                  <p className="text-sm text-muted-foreground">{food.qty} • by {food.donor}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{food.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />Exp: {food.expiry}</span>
                  </div>
                  <Button size="sm" className="mt-4 w-full" onClick={() => toast.success(`Claimed "${food.item}" successfully!`)}>
                    Claim
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default BrowseFood;
