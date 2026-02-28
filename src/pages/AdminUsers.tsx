import AppLayout from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Shield, Ban } from "lucide-react";
import { toast } from "sonner";

const users = [
  { id: 1, name: "John Doe", email: "john@test.com", role: "user", donations: 24, joined: "Jan 15, 2026", status: "active" },
  { id: 2, name: "Maria Lopez", email: "maria@test.com", role: "user", donations: 18, joined: "Feb 1, 2026", status: "active" },
  { id: 3, name: "Admin User", email: "admin@test.com", role: "admin", donations: 0, joined: "Jan 1, 2026", status: "active" },
  { id: 4, name: "Chef Ravi", email: "ravi@test.com", role: "user", donations: 42, joined: "Dec 10, 2025", status: "active" },
  { id: 5, name: "Spam Account", email: "spam@test.com", role: "user", donations: 0, joined: "Feb 20, 2026", status: "suspended" },
];

const AdminUsers = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground">Manage Users</h1>
          <p className="mt-1 text-muted-foreground">View and manage platform users</p>
        </motion.div>

        <Card className="mt-6 shadow-card">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">User</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Donations</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Joined</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <motion.tr
                      key={u.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-foreground">{u.name}</p>
                          <p className="text-xs text-muted-foreground">{u.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={u.role === "admin" ? "default" : "secondary"}>
                          {u.role === "admin" && <Shield className="mr-1 h-3 w-3" />}
                          {u.role}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{u.donations}</td>
                      <td className="px-4 py-3 text-muted-foreground">{u.joined}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${u.status === "active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {u.status === "active" && u.role !== "admin" ? (
                          <Button size="sm" variant="outline" onClick={() => toast.info(`Suspended ${u.name}`)}>
                            <Ban className="mr-1 h-3 w-3" /> Suspend
                          </Button>
                        ) : u.status === "suspended" ? (
                          <Button size="sm" variant="outline" onClick={() => toast.success(`Reactivated ${u.name}`)}>
                            Reactivate
                          </Button>
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

export default AdminUsers;
