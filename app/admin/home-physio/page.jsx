import AdminPanel from "../panel";

export const metadata = { title: "Manage Home Physio Videos | Dr Prabhu Centre", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default function AdminHomePhysioPage() {
  return <main className="admin-page"><AdminPanel initialSection="home.physio"/></main>;
}
