import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const allDonations = [
  { id: 1, item: "Fresh Vegetables", donor: "John D.", qty: "5 kg", status: "Pending", date: "Feb 27" },
  { id: 2, item: "Bread & Pastries", donor: "Sunny Bakery", qty: "12 pcs", status: "Pending", date: "Feb 26" },
  { id: 3, item: "Canned Goods", donor: "Maria L.", qty: "8 cans", status: "Approved", date: "Feb 25" },
  { id: 4, item: "Rice & Grains", donor: "Food Corp", qty: "10 kg", status: "Approved", date: "Feb 24" },
  { id: 5, item: "Milk & Cheese", donor: "Dairy Plus", qty: "3 liters", status: "Rejected", date: "Feb 22" },
  { id: 6, item: "Cooked Meals", donor: "Chef Ravi", qty: "20 servings", status: "Pending", date: "Feb 27" },
];

const statusIcon: Record<string, React.ReactNode> = {
  Pending: <Clock className="h-4 w-4 text-warning" />,
  Approved: <CheckCircle className="h-4 w-4 text-success" />,
  Rejected: <XCircle className="h-4 w-4 text-destructive" />,
};

const AdminDonations = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground">Manage Donations</h1>
          <p className="mt-1 text-muted-foreground">Review and manage all food donations</p>
        </motion.div>

        <Card className="mt-6 shadow-card">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Donor</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Quantity</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allDonations.map((d, i) => (
                    <motion.tr
                      key={d.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">{d.item}</td>
                      <td className="px-4 py-3 text-muted-foreground">{d.donor}</td>
                      <td className="px-4 py-3 text-muted-foreground">{d.qty}</td>
                      <td className="px-4 py-3 text-muted-foreground">{d.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          {statusIcon[d.status]}
                          <span>{d.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {d.status === "Pending" ? (
                          <div className="flex gap-2">
                            <Button size="sm" variant="default" onClick={() => toast.success(`Approved "${d.item}"`)}>
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => toast.error(`Rejected "${d.item}"`)}>
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AdminDonations;
