"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Types ─── */
interface FAQ {
  id: number;
  question: string;
  answer: string[];
}
interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}
interface Logo {
  id: number;
  src: string;
  alt: string;
  w: number;
}
interface SiteInfo {
  phone: string;
  email: string;
  address: string;
}

/* ─── Login Screen ─── */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-[#155dfc] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1447e6]"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

/* ─── Tab Button ─── */
function TabBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-medium ${
        active
          ? "bg-[#155dfc] text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

/* ─── FAQ Manager ─── */
function FAQManager() {
  const [items, setItems] = useState<FAQ[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/faq")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/faq", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
  }

  function addItem() {
    const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
    setItems([...items, { id: maxId + 1, question: "", answer: [] }]);
  }

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  function updateQuestion(id: number, question: string) {
    setItems(items.map((item) => (item.id === id ? { ...item, question } : item)));
  }

  function updateAnswer(id: number, answerText: string) {
    const answer = answerText
      .split("\n")
      .filter((line) => line.trim() !== "");
    setItems(items.map((item) => (item.id === id ? { ...item, answer } : item)));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">FAQ Items</h2>
        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            + Add
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-lg bg-[#155dfc] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1447e6] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex items-start gap-2">
            <input
              type="text"
              value={item.question}
              onChange={(e) => updateQuestion(item.id, e.target.value)}
              placeholder="Question"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
          <textarea
            value={item.answer.join("\n")}
            onChange={(e) => updateAnswer(item.id, e.target.value)}
            placeholder="Answer (each paragraph on a new line)"
            rows={3}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Services Manager ─── */
function ServicesManager() {
  const [items, setItems] = useState<Service[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/services", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
  }

  function addItem() {
    const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
    setItems([
      ...items,
      { id: maxId + 1, image: "", title: "", description: "", href: "#" },
    ]);
  }

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  function update(id: number, field: keyof Service, value: string) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Services</h2>
        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            + Add
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-lg bg-[#155dfc] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1447e6] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex items-start gap-2">
            <input
              type="text"
              value={item.title}
              onChange={(e) => update(item.id, "title", e.target.value)}
              placeholder="Title"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
          <input
            type="text"
            value={item.description}
            onChange={(e) => update(item.id, "description", e.target.value)}
            placeholder="Description"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={item.image}
            onChange={(e) => update(item.id, "image", e.target.value)}
            placeholder="Image URL (e.g. /images/service-plombier.jpg)"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={item.href}
            onChange={(e) => update(item.id, "href", e.target.value)}
            placeholder="Link URL"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Logos Manager ─── */
function LogosManager() {
  const [items, setItems] = useState<Logo[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/logos")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/logos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
  }

  function addItem() {
    const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
    setItems([...items, { id: maxId + 1, src: "", alt: "", w: 130 }]);
  }

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  function update(id: number, field: keyof Logo, value: string | number) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Client Logos</h2>
        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            + Add
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-lg bg-[#155dfc] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1447e6] disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-4"
        >
          <input
            type="text"
            value={item.alt}
            onChange={(e) => update(item.id, "alt", e.target.value)}
            placeholder="Name"
            className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={item.src}
            onChange={(e) => update(item.id, "src", e.target.value)}
            placeholder="SVG path (e.g. /images/logo-honda.svg)"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <input
            type="number"
            value={item.w}
            onChange={(e) => update(item.id, "w", parseInt(e.target.value) || 0)}
            placeholder="Width"
            className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            onClick={() => removeItem(item.id)}
            className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

/* ─── Site Info Manager ─── */
function SiteInfoManager() {
  const [info, setInfo] = useState<SiteInfo>({
    phone: "",
    email: "",
    address: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/site-info")
      .then((r) => r.json())
      .then(setInfo);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/site-info", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    setSaving(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Website Information
        </h2>
        <button
          onClick={save}
          disabled={saving}
          className="rounded-lg bg-[#155dfc] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1447e6] disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
      <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={info.address}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Admin Dashboard ─── */
type Tab = "faq" | "services" | "logos" | "site-info";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("faq");

  useEffect(() => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((data) => setAuthenticated(data.authenticated));
  }, []);

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
  }

  if (authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            AZ Pro Services Admin
          </h1>
          <button
            onClick={logout}
            className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <div className="flex gap-2">
          <TabBtn
            label="FAQ"
            active={tab === "faq"}
            onClick={() => setTab("faq")}
          />
          <TabBtn
            label="Services"
            active={tab === "services"}
            onClick={() => setTab("services")}
          />
          <TabBtn
            label="Logos"
            active={tab === "logos"}
            onClick={() => setTab("logos")}
          />
          <TabBtn
            label="Site Info"
            active={tab === "site-info"}
            onClick={() => setTab("site-info")}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-6">
        {tab === "faq" && <FAQManager />}
        {tab === "services" && <ServicesManager />}
        {tab === "logos" && <LogosManager />}
        {tab === "site-info" && <SiteInfoManager />}
      </div>
    </div>
  );
}
