"use client";

import { useState, useEffect, useRef } from "react";

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

/* ─── Icons ─── */
function IconFaq() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-5v-1m0-4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 8a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconServices() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 11a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconLogos() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2 -2)"/>
    </svg>
  );
}
function IconSettings() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2 -2)"/>
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconUpload() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconTrash() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6v10a1 1 0 001 1h6a1 1 0 001-1V6M4 6h12M8 6V4a1 1 0 011-1h2a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconPlus() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4v12m-6-6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconArrowUp() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 13V3m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconArrowDown() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3v10m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Reorder helpers ─── */
function moveUp<T>(arr: T[], idx: number): T[] {
  if (idx <= 0) return arr;
  const copy = [...arr];
  [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
  return copy;
}
function moveDown<T>(arr: T[], idx: number): T[] {
  if (idx >= arr.length - 1) return arr;
  const copy = [...arr];
  [copy[idx], copy[idx + 1]] = [copy[idx + 1], copy[idx]];
  return copy;
}
function reorder<T>(arr: T[], from: number, to: number): T[] {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

/* ─── Drag handle + arrow buttons ─── */
function IconGrip() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="4" r="1.2" fill="currentColor"/>
      <circle cx="13" cy="4" r="1.2" fill="currentColor"/>
      <circle cx="7" cy="10" r="1.2" fill="currentColor"/>
      <circle cx="13" cy="10" r="1.2" fill="currentColor"/>
      <circle cx="7" cy="16" r="1.2" fill="currentColor"/>
      <circle cx="13" cy="16" r="1.2" fill="currentColor"/>
    </svg>
  );
}

function DragHandle({
  index,
  total,
  onMoveUp,
  onMoveDown,
  dragHandleProps,
}: {
  index: number;
  total: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  dragHandleProps: Record<string, unknown>;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <button
        onClick={onMoveUp}
        disabled={index === 0}
        className="rounded-md p-0.5 text-gray-300 transition hover:bg-gray-100 hover:text-gray-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-300"
        title="Move up"
      >
        <IconArrowUp />
      </button>
      <div
        {...dragHandleProps}
        className="cursor-grab rounded-md p-0.5 text-gray-300 transition hover:text-gray-400 active:cursor-grabbing"
        title="Drag to reorder"
      >
        <IconGrip />
      </div>
      <button
        onClick={onMoveDown}
        disabled={index === total - 1}
        className="rounded-md p-0.5 text-gray-300 transition hover:bg-gray-100 hover:text-gray-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-300"
        title="Move down"
      >
        <IconArrowDown />
      </button>
    </div>
  );
}

/* ─── Drag-and-drop hook ─── */
function useDragReorder<T>(items: T[], setItems: (items: T[]) => void) {
  const dragIdx = useRef<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  function getDragHandleProps(idx: number) {
    return {
      draggable: true,
      onDragStart: (e: React.DragEvent) => {
        dragIdx.current = idx;
        e.dataTransfer.effectAllowed = "move";
        // Make drag image the whole card row
        const row = (e.target as HTMLElement).closest("[data-drag-item]");
        if (row) {
          e.dataTransfer.setDragImage(row, 20, 20);
        }
      },
      onDragEnd: () => {
        dragIdx.current = null;
        setDragOverIdx(null);
      },
    };
  }

  function getItemProps(idx: number) {
    return {
      "data-drag-item": true,
      onDragOver: (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        setDragOverIdx(idx);
      },
      onDragLeave: () => {
        setDragOverIdx(null);
      },
      onDrop: (e: React.DragEvent) => {
        e.preventDefault();
        const from = dragIdx.current;
        if (from !== null && from !== idx) {
          setItems(reorder(items, from, idx));
        }
        dragIdx.current = null;
        setDragOverIdx(null);
      },
    };
  }

  return { getDragHandleProps, getItemProps, dragOverIdx };
}

/* ─── Toast notification ─── */
function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-2xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <IconCheck />
      {message}
    </div>
  );
}

/* ─── Shared save hook ─── */
function useSaveToast() {
  const [toast, setToast] = useState({ message: "", visible: false });
  function showToast(msg: string) {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500);
  }
  return { toast, showToast };
}

/* ─── Login Screen ─── */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e3a5f]">
      <div className="w-full max-w-md px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Logo area */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#155dfc]">
              <svg className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L3 7v9a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 18v-6h4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">AZ Pro Services</h1>
            <p className="text-sm text-white/50">Sign in to the admin panel</p>
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-400 ring-1 ring-red-500/20">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-white/40">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-0 transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/30"
                placeholder="Enter username"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-white/40">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-0 transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/30"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-[#155dfc] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#155dfc]/25 transition hover:bg-[#1447e6] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({
  title,
  subtitle,
  onAdd,
  onSave,
  saving,
}: {
  title: string;
  subtitle: string;
  onAdd?: () => void;
  onSave: () => void;
  saving: boolean;
}) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="flex gap-2">
        {onAdd && (
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <IconPlus />
            Add new
          </button>
        )}
        <button
          onClick={onSave}
          disabled={saving}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#155dfc] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-[#155dfc]/20 transition hover:bg-[#1447e6] disabled:opacity-50"
        >
          {saving ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Saving...
            </>
          ) : (
            <>
              <IconCheck />
              Save changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ─── Image Upload Dropzone ─── */
function ImageUpload({
  currentSrc,
  onUpload,
}: {
  currentSrc: string;
  onUpload: (url: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  async function handleFile(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        onUpload(data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-4 transition ${
        dragOver
          ? "border-[#155dfc] bg-[#155dfc]/5"
          : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/svg+xml,image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {currentSrc ? (
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentSrc}
            alt="Preview"
            className="h-10 max-w-[120px] object-contain"
          />
          <div className="text-xs text-gray-400 group-hover:text-gray-500">
            {uploading ? "Uploading..." : "Click or drag to replace"}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-300">
            <IconUpload />
          </div>
          <div className="text-xs text-gray-400">
            {uploading ? "Uploading..." : "Click or drag image"}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── FAQ Manager ─── */
function FAQManager() {
  const [items, setItems] = useState<FAQ[]>([]);
  const [saving, setSaving] = useState(false);
  const { toast, showToast } = useSaveToast();
  const { getDragHandleProps, getItemProps, dragOverIdx } = useDragReorder(items, setItems);

  useEffect(() => {
    fetch("/api/faq").then((r) => r.json()).then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/faq", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
    showToast("FAQ saved successfully");
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
    const answer = answerText.split("\n").filter((line) => line.trim() !== "");
    setItems(items.map((item) => (item.id === id ? { ...item, answer } : item)));
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="FAQ"
        subtitle="Manage frequently asked questions on the website"
        onAdd={addItem}
        onSave={save}
        saving={saving}
      />

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div
            key={item.id}
            {...getItemProps(idx)}
            className={`group flex gap-3 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
              dragOverIdx === idx ? "border-[#155dfc] ring-2 ring-[#155dfc]/20" : "border-gray-100"
            }`}
          >
            <DragHandle
              index={idx}
              total={items.length}
              onMoveUp={() => setItems(moveUp(items, idx))}
              onMoveDown={() => setItems(moveDown(items, idx))}
              dragHandleProps={getDragHandleProps(idx)}
            />
            <div className="flex-1">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-[#155dfc]/10 px-3 py-1 text-xs font-semibold text-[#155dfc]">
                  Q{idx + 1}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg p-1.5 text-gray-300 opacity-0 transition hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                >
                  <IconTrash />
                </button>
              </div>
              <input
                type="text"
                value={item.question}
                onChange={(e) => updateQuestion(item.id, e.target.value)}
                placeholder="Enter the question..."
                className="mb-3 w-full border-0 border-b border-gray-100 bg-transparent px-0 pb-3 text-base font-semibold text-gray-900 placeholder-gray-300 outline-none transition focus:border-[#155dfc]"
              />
              <textarea
                value={item.answer.join("\n")}
                onChange={(e) => updateAnswer(item.id, e.target.value)}
                placeholder="Enter the answer (each paragraph on a new line)..."
                rows={3}
                className="w-full resize-none rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-600 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
              />
            </div>
          </div>
        ))}
      </div>
      <Toast {...toast} />
    </div>
  );
}

/* ─── Services Manager ─── */
function ServicesManager() {
  const [items, setItems] = useState<Service[]>([]);
  const [saving, setSaving] = useState(false);
  const { toast, showToast } = useSaveToast();
  const { getDragHandleProps, getItemProps, dragOverIdx } = useDragReorder(items, setItems);

  useEffect(() => {
    fetch("/api/services").then((r) => r.json()).then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/services", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
    showToast("Services saved successfully");
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
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Services"
        subtitle="Manage the services displayed on your website"
        onAdd={addItem}
        onSave={save}
        saving={saving}
      />

      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            {...getItemProps(idx)}
            className={`group flex gap-3 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
              dragOverIdx === idx ? "border-[#155dfc] ring-2 ring-[#155dfc]/20" : "border-gray-100"
            }`}
          >
            {/* Drag handle */}
            <DragHandle
              index={idx}
              total={items.length}
              onMoveUp={() => setItems(moveUp(items, idx))}
              onMoveDown={() => setItems(moveDown(items, idx))}
              dragHandleProps={getDragHandleProps(idx)}
            />

            {/* Image preview */}
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-28 shrink-0 rounded-xl object-cover"
              />
            ) : (
              <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-300">
                <IconLogos />
              </div>
            )}

            <div className="flex flex-1 flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => update(item.id, "title", e.target.value)}
                  placeholder="Service name"
                  className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm font-semibold text-gray-900 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg p-1.5 text-gray-300 opacity-0 transition hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                >
                  <IconTrash />
                </button>
              </div>
              <input
                type="text"
                value={item.description}
                onChange={(e) => update(item.id, "description", e.target.value)}
                placeholder="Description"
                className="w-full rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-600 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={item.image}
                  onChange={(e) => update(item.id, "image", e.target.value)}
                  placeholder="Image URL"
                  className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                />
                <input
                  type="text"
                  value={item.href}
                  onChange={(e) => update(item.id, "href", e.target.value)}
                  placeholder="Link URL"
                  className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toast {...toast} />
    </div>
  );
}

/* ─── Logos Manager ─── */
function LogosManager() {
  const [items, setItems] = useState<Logo[]>([]);
  const [saving, setSaving] = useState(false);
  const { toast, showToast } = useSaveToast();
  const { getDragHandleProps, getItemProps, dragOverIdx } = useDragReorder(items, setItems);

  useEffect(() => {
    fetch("/api/logos").then((r) => r.json()).then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/logos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setSaving(false);
    showToast("Logos saved successfully");
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
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Client Logos"
        subtitle="Manage the brand logos in the carousel. Upload SVG, PNG, JPG or WebP images."
        onAdd={addItem}
        onSave={save}
        saving={saving}
      />

      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            {...getItemProps(idx)}
            className={`group flex gap-3 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
              dragOverIdx === idx ? "border-[#155dfc] ring-2 ring-[#155dfc]/20" : "border-gray-100"
            }`}
          >
            {/* Drag handle */}
            <DragHandle
              index={idx}
              total={items.length}
              onMoveUp={() => setItems(moveUp(items, idx))}
              onMoveDown={() => setItems(moveDown(items, idx))}
              dragHandleProps={getDragHandleProps(idx)}
            />

            <div className="flex flex-1 flex-col gap-3">
              {/* Upload / preview area */}
              <ImageUpload
                currentSrc={item.src}
                onUpload={(url) => update(item.id, "src", url)}
              />

              <div className="flex items-center gap-2.5">
                <input
                  type="text"
                  value={item.alt}
                  onChange={(e) => update(item.id, "alt", e.target.value)}
                  placeholder="Brand name"
                  className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                />
                <div className="flex items-center gap-1.5">
                  <label className="text-xs text-gray-400">W</label>
                  <input
                    type="number"
                    value={item.w}
                    onChange={(e) =>
                      update(item.id, "w", parseInt(e.target.value) || 0)
                    }
                    className="w-20 rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2.5 text-center text-sm text-gray-600 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                  />
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg p-2 text-gray-300 transition hover:bg-red-50 hover:text-red-500"
                >
                  <IconTrash />
                </button>
              </div>

              {/* Path field - still editable */}
              <input
                type="text"
                value={item.src}
                onChange={(e) => update(item.id, "src", e.target.value)}
                placeholder="Or enter image path manually (e.g. /images/logo.svg)"
                className="w-full rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2 text-xs text-gray-400 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
              />
            </div>
          </div>
        ))}
      </div>
      <Toast {...toast} />
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
  const { toast, showToast } = useSaveToast();

  useEffect(() => {
    fetch("/api/site-info").then((r) => r.json()).then(setInfo);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/site-info", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    setSaving(false);
    showToast("Site info saved successfully");
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Website Information"
        subtitle="Update your business contact details shown across the website"
        onSave={save}
        saving={saving}
      />

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Phone Number
            </label>
            <input
              type="text"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Business Address
            </label>
            <input
              type="text"
              value={info.address}
              onChange={(e) => setInfo({ ...info, address: e.target.value })}
              className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
            />
          </div>
        </div>
      </div>
      <Toast {...toast} />
    </div>
  );
}

/* ─── Admin Dashboard ─── */
const tabs = [
  { key: "faq" as const, label: "FAQ", icon: IconFaq },
  { key: "services" as const, label: "Services", icon: IconServices },
  { key: "logos" as const, label: "Logos", icon: IconLogos },
  { key: "site-info" as const, label: "Site Info", icon: IconSettings },
];

type Tab = (typeof tabs)[number]["key"];

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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e3a5f]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fb]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-gray-100 bg-white">
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155dfc]">
            <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L3 7v9a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 18v-6h4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">AZ Pro Services</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  tab === t.key
                    ? "bg-[#155dfc]/10 text-[#155dfc]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <Icon />
                {t.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 px-4 py-4">
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-400 transition hover:bg-gray-50 hover:text-gray-600"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17H4a2 2 0 01-2-2V5a2 2 0 012-2h3m7 12l5-5-5-5m5 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 px-8 py-8">
        <div className="mx-auto max-w-4xl">
          {tab === "faq" && <FAQManager />}
          {tab === "services" && <ServicesManager />}
          {tab === "logos" && <LogosManager />}
          {tab === "site-info" && <SiteInfoManager />}
        </div>
      </main>
    </div>
  );
}
