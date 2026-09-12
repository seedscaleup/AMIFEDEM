import type { Metadata } from "next";
import { isAuthenticated } from "@/lib/auth";
import { listNews } from "@/lib/db";
import LoginForm from "@/components/admin/LoginForm";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return <LoginForm />;
  }

  const news = await listNews();
  return <AdminDashboard initialNews={news} />;
}
