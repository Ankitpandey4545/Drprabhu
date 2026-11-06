import AdminPanel from "../panel";

export const metadata = { title: "Manage Video | Dr Prabhu Centre", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default function AdminVideoPage() {
  return <main className="admin-page"><AdminPanel initialSection="home.video"/></main>;
}
