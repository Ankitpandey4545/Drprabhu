import AdminPanel from "./panel";

export const metadata = { title: "Website Admin | Dr Prabhu Centre", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default function AdminPage() {
  return <main className="admin-page"><AdminPanel/></main>;
}
