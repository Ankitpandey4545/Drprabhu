"use client";

import { useEffect, useState } from "react";

const sections = [
  ["home", "Home page"],
  ["home.video", "Video"],
  ["home.physio", "Home Physio"],
  ["doctors", "Doctor profiles"],
  ["contact", "Contact & timings"],
  ["fees", "Consultation fees"],
  ["faqs", "FAQs"],
  ["patientCount", "Patient counter"],
];
const labels = {
  brandLogo: "Clinic logo", orthopaedic: "Orthopaedic section", ent: "ENT section", order: "Image order (comma separated)",
  facilities: "Clinic facilities", image: "Image path", alt: "Image description", eyebrow: "Small heading", title: "Title",
  description: "Description", role: "Role label", specialty: "Specialty", name: "Name", experience: "Experience",
  biography: "Biography", expertise: "Areas of expertise", philosophy: "Care philosophy", tagline: "Tagline",
  address: "Clinic address", mapCoordinates: "Map coordinates", appointmentPhone: "Appointment phone", appointmentPhoneLink: "Appointment phone link",
  whatsappPhone: "WhatsApp number", whatsappLink: "WhatsApp link number", entPhone: "ENT phone", entPhoneLink: "ENT phone link",
  email: "Email", orthopaedicMorning: "Orthopaedic morning hours", orthopaedicEvening: "Orthopaedic evening hours", sundayHours: "Sunday hours",
  doctor: "Doctor", firstVisit: "First visit fee", followUps: "Follow-up fees", question: "Question", answer: "Answer",
  patientCount: "Patients cared for", title: "Title", description: "Description", home: "Homepage", video: "Video", physio: "Home Physio", contact: "Contact details", doctors: "Doctors", fees: "Fees", faqs: "FAQs"
};
const isLongText = (key, value) => value.length > 100 || /address|biography|description|philosophy|answer/i.test(key);
const isImageKey = (key) => /image|logo/i.test(key);
const isVideoKey = (key) => key === "videoPath";

function pretty(key) {
  return labels[key] || key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (letter) => letter.toUpperCase());
}

export default function AdminPanel({ initialSection = "home" }) {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(initialSection);
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploadFolder, setUploadFolder] = useState("uploads");

  useEffect(() => {
    fetch("/api/admin/content").then(async (response) => {
      if (response.ok) { setContent(await response.json()); setLoggedIn(true); }
    }).catch(() => {});
  }, []);

  const update = (path, value) => setContent((current) => {
    const next = structuredClone(current);
    let node = next;
    for (const key of path.slice(0, -1)) node = node[key];
    node[path.at(-1)] = value;
    return next;
  });

  async function login(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not sign in.");
      const contentResponse = await fetch("/api/admin/content");
      if (!contentResponse.ok) throw new Error("Signed in, but content could not be loaded.");
      setContent(await contentResponse.json()); setLoggedIn(true); setPassword(""); setMessage("Signed in. Changes are saved to the site server.");
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  async function save() {
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not save changes.");
      setMessage("Saved. The live website will use these changes on its next request.");
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setLoggedIn(false); setContent(null); setMessage("Signed out.");
  }

  async function upload(file, path) {
    if (!file) return;
    setBusy(true); setMessage("");
    const form = new FormData(); form.append("file", file); form.append("folder", uploadFolder);
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Upload failed.");
      if (path) {
        update(path, result.url);
        setMessage(`Uploaded to ${result.url}. Save the site changes to apply it.`);
      } else {
        setMessage(`Uploaded to ${result.url}. It will appear in the matching gallery.`);
      }
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  async function uploadVideo(file, path) {
    if (!file) return;
    setBusy(true); setMessage("");
    const form = new FormData(); form.append("file", file);
    try {
      const response = await fetch("/api/admin/video-upload", { method: "POST", body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Video upload failed.");
      update(path, result.url);
      setMessage(`Uploaded to ${result.url}. Save the site changes to publish it.`);
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  const updateRef = { update, upload, uploadVideo, busy, move: (path, index, offset) => setContent((current) => {
    const next = structuredClone(current);
    let node = next;
    for (const key of path.slice(0, -1)) node = node[key];
    const list = node[path.at(-1)];
    const destination = index + offset;
    if (destination < 0 || destination >= list.length) return current;
    [list[index], list[destination]] = [list[destination], list[index]];
    return next;
  }) };

  if (!loggedIn) return <div className="admin-login-wrap"><form className="admin-login" onSubmit={login}>
    <a className="admin-back" href="/">← View website</a><span className="admin-eyebrow">DR. PRABHU CENTRE</span><h1>Website admin</h1><p>Sign in to update your website content and images.</p>
    <label>Admin password<input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required/></label>
    <button type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
    {message && <p className="admin-message" role="status">{message}</p>}
    <small>Set <code>ADMIN_PASSWORD</code> in the server environment to enable admin access.</small>
  </form></div>;

  if (!content) return <div className="admin-login-wrap"><p>Loading website content…</p></div>;
  const activePath = active.split(".");
  const sectionValue = activePath.reduce((value, key) => value?.[key], content);
  return <div className="admin-shell">
    <header className="admin-header"><a className="admin-brand" href="/">Dr Prabhu <span>Website Admin</span></a><div><a href="/" target="_blank" rel="noreferrer">View website ↗</a><button type="button" onClick={logout}>Sign out</button></div></header>
    <div className="admin-body"><aside className="admin-sidebar"><span className="admin-eyebrow">MANAGE SITE</span>{sections.map(([key, title]) => key === "home.video" || key === "home.physio" ? <a key={key} href={key === "home.video" ? "/admin/video" : "/admin/home-physio"} className={`admin-side-link ${active === key ? "active" : ""}`}>{title}<span>›</span></a> : <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)}>{title}<span>›</span></button>)}<div className="admin-upload-settings"><label>Upload images to<select value={uploadFolder} onChange={(event) => setUploadFolder(event.target.value)}><option value="uploads">General uploads</option><option value="clinic">Clinic &amp; doctors</option><option value="clinic-gallery">Clinic gallery</option><option value="orthopaedic">Orthopaedic gallery</option><option value="ent">ENT gallery</option></select></label><label className="admin-upload-button admin-gallery-upload">Upload a gallery image<input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" disabled={busy} onChange={(event) => upload(event.target.files?.[0], null)}/></label><p>JPG, PNG, WebP, GIF or AVIF · 10 MB max</p></div></aside>
      <main className="admin-content"><div className="admin-content-heading"><div><span className="admin-eyebrow">WEBSITE CONTENT</span><h1>{sections.find(([key]) => key === active)?.[1]}</h1><p>Edit the fields below, then save to publish them.</p></div><button className="admin-save" onClick={save} disabled={busy}>{busy ? "Saving…" : "Save changes"}</button></div>
        {message && <div className="admin-message" role="status">{message}</div>}
        <Editor value={sectionValue} path={activePath} tools={updateRef}/>
      </main>
    </div>
  </div>;
}

function Editor({ value, path, tools }) {
  const key = String(path.at(-1));
  const label = pretty(key);
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "number")) return <Field label={label} hint="Change the order by entering image numbers separated by commas. All current images must appear once."><input value={value.join(", ")} onChange={(event) => { const parsed = event.target.value.split(",").map((part) => Number(part.trim())).filter(Number.isFinite); tools.update(path, parsed); }}/></Field>;
    if (value.every((item) => typeof item === "string")) return <div className="admin-field"><label>{label}</label><div className="admin-list-editor">{value.map((item, index) => <div key={`${path.join(".")}-${index}`}><input value={item} onChange={(event) => { const next = [...value]; next[index] = event.target.value; tools.update(path, next); }}/><button type="button" disabled={index === 0} onClick={() => tools.move(path, index, -1)} aria-label={`Move ${label} up`}>↑</button><button type="button" disabled={index === value.length - 1} onClick={() => tools.move(path, index, 1)} aria-label={`Move ${label} down`}>↓</button><button type="button" aria-label={`Remove ${label}`} onClick={() => tools.update(path, value.filter((_, itemIndex) => itemIndex !== index))}>×</button></div>)}<button className="admin-add" type="button" onClick={() => tools.update(path, [...value, ""])}>+ Add {label.toLowerCase()}</button></div></div>;
    return <fieldset className="admin-array"><legend>{label}</legend>{value.map((item, index) => <div className="admin-array-item" key={`${path.join(".")}-${index}`}><div className="admin-array-heading"><strong>Item {index + 1}</strong><span><button type="button" disabled={index === 0} onClick={() => tools.move(path, index, -1)} aria-label="Move item up">↑</button><button type="button" disabled={index === value.length - 1} onClick={() => tools.move(path, index, 1)} aria-label="Move item down">↓</button><button type="button" disabled={value.length === 1} onClick={() => tools.update(path, value.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></span></div>{item && typeof item === "object" && !Array.isArray(item) ? Object.entries(item).map(([childKey, childValue]) => <Editor key={`${path.join(".")}.${index}.${childKey}`} value={childValue} path={[...path, index, childKey]} tools={tools}/>) : <Editor value={item} path={[...path, index]} tools={tools}/>}</div>)}<button className="admin-add" type="button" onClick={() => tools.update(path, [...value, value.length ? structuredClone(value[0]) : {}])}>+ Add item</button></fieldset>;
  }
  if (value && typeof value === "object") return <fieldset className="admin-group"><legend>{label}</legend><div className="admin-group-fields">{Object.entries(value).map(([childKey, childValue]) => <Editor key={`${path.join(".")}.${childKey}`} value={childValue} path={[...path, childKey]} tools={tools}/>)}</div></fieldset>;
  if (typeof value === "boolean") return <Field label={label}><select value={String(value)} onChange={(event) => tools.update(path, event.target.value === "true")}><option value="true">Visible / enabled</option><option value="false">Hidden / disabled</option></select></Field>;
  if (typeof value === "number") return <Field label={label}><input type="number" value={value} onChange={(event) => tools.update(path, Number(event.target.value))}/></Field>;
  const stringValue = value ?? "";
  const input = isLongText(key, stringValue) ? <textarea rows={Math.min(8, Math.max(3, stringValue.split("\n").length + 1))} value={stringValue} onChange={(event) => tools.update(path, event.target.value)}/> : <input value={stringValue} onChange={(event) => tools.update(path, event.target.value)}/>;
  if (isVideoKey(key)) return <Field label={"Clinic video file"}><input value={stringValue} onChange={(event) => tools.update(path, event.target.value)}/><div className="admin-video-tools">{stringValue && <video controls preload="metadata"><source src={stringValue}/></video>}<label className="admin-upload-button">Upload MP4, WebM or MOV<input type="file" accept="video/mp4,video/webm,video/quicktime" disabled={tools.busy} onChange={(event) => tools.uploadVideo(event.target.files?.[0], path)}/></label><small>Maximum 100 MB. Save changes after uploading to show the video on the home page.</small></div></Field>;
  return <Field label={label}>
    {input}
    {isImageKey(key) && <div className="admin-image-tools">{stringValue && <img src={stringValue} alt="Current image"/>}<label className="admin-upload-button">Upload and replace<input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" onChange={(event) => tools.upload(event.target.files?.[0], path)}/></label><code>{stringValue}</code></div>}
  </Field>;
}

function Field({ label, hint, children }) {
  return <div className="admin-field"><label>{label}</label>{children}{hint && <small>{hint}</small>}</div>;
}
