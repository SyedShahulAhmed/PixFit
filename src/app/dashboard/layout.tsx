import Navbar from "@/components/Dashboard/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}