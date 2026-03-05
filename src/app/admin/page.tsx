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
function IconMessages() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-4 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 7h8M6 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconReply() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8L3 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12h10a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconEye() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconTools() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1) scale(0.85)"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 19v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 19v-2a4 4 0 00-3-3.87M15 1.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 0)"/>
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
function LoginScreen({ onLogin }: { onLogin: (role?: string) => void }) {
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
      const data = await res.json();
      onLogin(data.role);
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

/* ─── Messages Manager ─── */
interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
  reply?: string;
  repliedAt?: string;
}

const STATUS_CONFIG = {
  new: {
    label: "New",
    bg: "bg-red-50",
    text: "text-red-700",
    ring: "ring-red-200",
    dot: "bg-red-500",
    border: "border-l-red-500",
  },
  read: {
    label: "Read",
    bg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    dot: "bg-amber-500",
    border: "border-l-amber-500",
  },
  replied: {
    label: "Replied",
    bg: "bg-green-50",
    text: "text-green-700",
    ring: "ring-green-200",
    dot: "bg-green-500",
    border: "border-l-green-500",
  },
};

function MessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filter, setFilter] = useState<"all" | "new" | "read" | "replied">("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replying, setReplying] = useState(false);
  const { toast, showToast } = useSaveToast();

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const res = await fetch("/api/messages");
    if (res.ok) {
      const data = await res.json();
      setMessages(data);
    }
  }

  async function markAsRead(id: number) {
    await fetch("/api/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "read" }),
    });
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "read" as const } : m)));
  }

  async function sendReply(id: number) {
    if (!replyText.trim()) return;
    setReplying(true);
    await fetch("/api/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, reply: replyText }),
    });
    setMessages(
      messages.map((m) =>
        m.id === id
          ? { ...m, status: "replied" as const, reply: replyText, repliedAt: new Date().toISOString() }
          : m
      )
    );
    setReplyText("");
    setReplying(false);
    showToast("Reply saved successfully");
  }

  async function deleteMessage(id: number) {
    await fetch("/api/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMessages(messages.filter((m) => m.id !== id));
    if (expandedId === id) setExpandedId(null);
    showToast("Message deleted");
  }

  function toggleExpand(msg: ContactMessage) {
    if (expandedId === msg.id) {
      setExpandedId(null);
      setReplyText("");
    } else {
      setExpandedId(msg.id);
      setReplyText(msg.reply || "");
      if (msg.status === "new") markAsRead(msg.id);
    }
  }

  const filtered = filter === "all" ? messages : messages.filter((m) => m.status === filter);
  const counts = {
    all: messages.length,
    new: messages.filter((m) => m.status === "new").length,
    read: messages.filter((m) => m.status === "read").length,
    replied: messages.filter((m) => m.status === "replied").length,
  };

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-BE", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Contact Messages</h2>
          <p className="mt-1 text-sm text-gray-500">
            View and reply to messages from your website contact form
          </p>
        </div>
        <button
          onClick={loadMessages}
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <path d="M17.65 6.35A8 8 0 1 0 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1)"/>
            <path d="M18 2v5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1)"/>
          </svg>
          Refresh
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(["all", "new", "read", "replied"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-[#155dfc]/10 text-[#155dfc]"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            {f === "all" ? "All" : STATUS_CONFIG[f].label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                filter === f
                  ? "bg-[#155dfc]/20 text-[#155dfc]"
                  : f === "new" && counts.new > 0
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {counts[f]}
            </span>
          </button>
        ))}
      </div>

      {/* Messages list */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white py-16 text-center">
          <div className="text-gray-200">
            <IconMessages />
          </div>
          <p className="text-sm text-gray-400">No messages yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((msg) => {
            const cfg = STATUS_CONFIG[msg.status];
            const isExpanded = expandedId === msg.id;

            return (
              <div
                key={msg.id}
                className={`rounded-2xl border border-l-4 bg-white shadow-sm transition ${cfg.border} ${
                  isExpanded ? "shadow-md" : "hover:shadow-md"
                }`}
              >
                {/* Message header row */}
                <button
                  onClick={() => toggleExpand(msg)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  {/* Status dot */}
                  <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${cfg.dot}`} />

                  {/* Sender info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-gray-900 ${msg.status === "new" ? "text-base" : "text-sm"}`}>
                        {msg.name}
                      </span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${cfg.bg} ${cfg.text} ${cfg.ring}`}>
                        {cfg.label}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-gray-500">
                      {msg.subject ? `${msg.subject} — ` : ""}
                      {msg.message.slice(0, 100)}
                      {msg.message.length > 100 ? "..." : ""}
                    </p>
                  </div>

                  {/* Date */}
                  <span className="shrink-0 text-xs text-gray-400">
                    {formatDate(msg.createdAt)}
                  </span>

                  {/* Expand arrow */}
                  <svg
                    className={`h-4 w-4 shrink-0 text-gray-300 transition ${isExpanded ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-5 pb-5">
                    {/* Contact details */}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1) scale(0.85)"/>
                          <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1) scale(0.85)"/>
                        </svg>
                        {msg.email}
                      </div>
                      {msg.phone && (
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1) scale(0.85)"/>
                          </svg>
                          {msg.phone}
                        </div>
                      )}
                      {msg.subject && (
                        <div className="flex items-center gap-1.5 text-gray-500">
                          Subject: <span className="font-medium text-gray-700">{msg.subject}</span>
                        </div>
                      )}
                    </div>

                    {/* Full message */}
                    <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
                      {msg.message}
                    </div>

                    {/* Previous reply */}
                    {msg.reply && (
                      <div className="mt-3 rounded-xl bg-green-50 p-4">
                        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-green-700">
                          <IconReply />
                          Your reply {msg.repliedAt && `— ${formatDate(msg.repliedAt)}`}
                        </div>
                        <p className="text-sm leading-relaxed text-green-800 whitespace-pre-wrap">{msg.reply}</p>
                      </div>
                    )}

                    {/* Reply textarea */}
                    <div className="mt-4">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {msg.reply ? "Update reply" : "Write a reply"}
                      </label>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={3}
                        placeholder="Type your reply..."
                        className="w-full resize-none rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-700 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <IconTrash />
                        Delete
                      </button>
                      <div className="flex gap-2">
                        {msg.status !== "read" && msg.status !== "new" ? null : (
                          <a
                            href={`mailto:${msg.email}?subject=Re: ${msg.subject || "Your message"}`}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
                          >
                            <IconReply />
                            Email directly
                          </a>
                        )}
                        <button
                          onClick={() => sendReply(msg.id)}
                          disabled={!replyText.trim() || replying}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#155dfc] px-5 py-2 text-xs font-medium text-white shadow-sm shadow-[#155dfc]/20 transition hover:bg-[#1447e6] disabled:opacity-50"
                        >
                          {replying ? (
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          ) : (
                            <IconReply />
                          )}
                          {msg.reply ? "Update reply" : "Save reply"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <Toast {...toast} />
    </div>
  );
}

/* ─── Tools & Settings Manager ─── */
interface SiteSettings {
  backToTop: boolean;
  recaptchaSiteKey: string;
  recaptchaSecretKey: string;
  recaptchaEnabled: boolean;
}

interface LinkResult {
  url: string;
  status: "ok" | "broken" | "redirect" | "error";
  statusCode?: number;
  redirectTo?: string;
  source: string;
}

const LINK_STATUS_STYLE = {
  ok: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500", label: "OK" },
  broken: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500", label: "Broken" },
  redirect: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", label: "Redirect" },
  error: { bg: "bg-gray-50", text: "text-gray-700", dot: "bg-gray-400", label: "Error" },
};

function ToolsManager() {
  const [settings, setSettings] = useState<SiteSettings>({
    backToTop: true,
    recaptchaSiteKey: "",
    recaptchaSecretKey: "",
    recaptchaEnabled: false,
  });
  const [saving, setSaving] = useState(false);
  const [linkResults, setLinkResults] = useState<LinkResult[]>([]);
  const [checking, setChecking] = useState(false);
  const { toast, showToast } = useSaveToast();

  useEffect(() => {
    fetch("/api/settings").then((r) => r.json()).then(setSettings);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    showToast("Settings saved successfully");
  }

  async function checkLinks() {
    setChecking(true);
    setLinkResults([]);
    try {
      const baseUrl = window.location.origin;
      const res = await fetch("/api/link-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ baseUrl }),
      });
      if (res.ok) {
        const data = await res.json();
        setLinkResults(data);
      }
    } finally {
      setChecking(false);
    }
  }

  const brokenCount = linkResults.filter((l) => l.status === "broken" || l.status === "error").length;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Tools & Settings</h2>
        <p className="mt-1 text-sm text-gray-500">Configure website features and run diagnostics</p>
      </div>

      {/* Back to Top */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Back to Top Button</h3>
            <p className="mt-0.5 text-xs text-gray-500">Show a floating button to scroll back to the top of the page</p>
          </div>
          <button
            onClick={() => setSettings({ ...settings, backToTop: !settings.backToTop })}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors ${
              settings.backToTop ? "bg-[#155dfc]" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                settings.backToTop ? "translate-x-6" : "translate-x-1"
              } mt-1`}
            />
          </button>
        </div>
      </div>

      {/* reCAPTCHA */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Google reCAPTCHA</h3>
            <p className="mt-0.5 text-xs text-gray-500">Protect contact forms from spam with reCAPTCHA v2</p>
          </div>
          <button
            onClick={() => setSettings({ ...settings, recaptchaEnabled: !settings.recaptchaEnabled })}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors ${
              settings.recaptchaEnabled ? "bg-[#155dfc]" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                settings.recaptchaEnabled ? "translate-x-6" : "translate-x-1"
              } mt-1`}
            />
          </button>
        </div>

        {settings.recaptchaEnabled && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Site Key
              </label>
              <input
                type="text"
                value={settings.recaptchaSiteKey}
                onChange={(e) => setSettings({ ...settings, recaptchaSiteKey: e.target.value })}
                placeholder="6Le..."
                className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Secret Key
              </label>
              <input
                type="password"
                value={settings.recaptchaSecretKey}
                onChange={(e) => setSettings({ ...settings, recaptchaSecretKey: e.target.value })}
                placeholder="6Le..."
                className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
              />
            </div>
            <p className="text-xs text-gray-400">
              Get your keys from the{" "}
              <a
                href="https://www.google.com/recaptcha/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#155dfc] underline"
              >
                Google reCAPTCHA admin console
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button
          onClick={save}
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
              Save settings
            </>
          )}
        </button>
      </div>

      {/* Broken Links Checker */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Link Health Check</h3>
            <p className="mt-0.5 text-xs text-gray-500">Scan all internal pages for broken links</p>
          </div>
          <button
            onClick={checkLinks}
            disabled={checking}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:opacity-50"
          >
            {checking ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
                Checking...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                  <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.45 4.39l4.58 4.58a1 1 0 01-1.42 1.42l-4.58-4.58A7 7 0 012 9z" fill="currentColor"/>
                </svg>
                Run scan
              </>
            )}
          </button>
        </div>

        {linkResults.length > 0 && (
          <div className="flex flex-col gap-2">
            {/* Summary */}
            <div className={`mb-3 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
              brokenCount > 0
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}>
              <div className={`h-2 w-2 rounded-full ${brokenCount > 0 ? "bg-red-500" : "bg-green-500"}`} />
              {brokenCount > 0
                ? `${brokenCount} broken link${brokenCount > 1 ? "s" : ""} found`
                : "All links are healthy"}
            </div>

            {/* Results */}
            {linkResults.map((link, i) => {
              const style = LINK_STATUS_STYLE[link.status];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-gray-50 px-4 py-3"
                >
                  <div className={`h-2 w-2 shrink-0 rounded-full ${style.dot}`} />
                  <span className="flex-1 text-sm font-medium text-gray-800">{link.url}</span>
                  <span className="text-xs text-gray-400">{link.source}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}>
                    {link.statusCode ? `${link.statusCode} ` : ""}{style.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Toast {...toast} />
    </div>
  );
}

/* ─── Users Manager (superadmin only) ─── */
interface UserItem {
  id: number;
  username: string;
  password: string;
  role: "admin" | "superadmin";
  label: string;
}

function UsersManager() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [saving, setSaving] = useState(false);
  const { toast, showToast } = useSaveToast();

  useEffect(() => {
    fetch("/api/users").then((r) => {
      if (r.ok) return r.json();
      return [];
    }).then(setUsers);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    });
    setSaving(false);
    showToast("Users saved successfully");
  }

  function addUser() {
    const maxId = users.reduce((max, u) => Math.max(max, u.id), 0);
    setUsers([...users, { id: maxId + 1, username: "", password: "", role: "admin", label: "" }]);
  }

  function removeUser(id: number) {
    setUsers(users.filter((u) => u.id !== id));
  }

  function update(id: number, field: keyof UserItem, value: string) {
    setUsers(users.map((u) => (u.id === id ? { ...u, [field]: value } : u)));
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="User Management"
        subtitle="Manage admin accounts and access levels. Only visible to superadmins."
        onAdd={addUser}
        onSave={save}
        saving={saving}
      />

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                user.role === "superadmin" ? "bg-purple-500" : "bg-[#155dfc]"
              }`}>
                {user.username ? user.username[0].toUpperCase() : "?"}
              </div>

              <div className="flex flex-1 flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={user.label}
                    onChange={(e) => update(user.id, "label", e.target.value)}
                    placeholder="Display name"
                    className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm font-semibold text-gray-900 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                  />
                  <select
                    value={user.role}
                    onChange={(e) => update(user.id, "role", e.target.value)}
                    className="rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                  >
                    <option value="admin">Admin (Client)</option>
                    <option value="superadmin">Super Admin (Dev)</option>
                  </select>
                  <button
                    onClick={() => removeUser(user.id)}
                    className="rounded-lg p-1.5 text-gray-300 opacity-0 transition hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                  >
                    <IconTrash />
                  </button>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => update(user.id, "username", e.target.value)}
                    placeholder="Username"
                    className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-600 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                  />
                  <input
                    type="text"
                    value={user.password}
                    onChange={(e) => update(user.id, "password", e.target.value)}
                    placeholder="Password"
                    className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-600 placeholder-gray-300 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                  />
                </div>
              </div>
            </div>

            {/* Role badge */}
            <div className="mt-3 flex gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                user.role === "superadmin"
                  ? "bg-purple-50 text-purple-700 ring-1 ring-purple-200"
                  : "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
              }`}>
                {user.role === "superadmin" ? "Super Admin — Full access, user management, tools" : "Admin — Content management only"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Toast {...toast} />
    </div>
  );
}

/* ─── Admin Dashboard ─── */
const allTabs = [
  { key: "messages" as const, label: "Messages", icon: IconMessages, minRole: "admin" as const },
  { key: "faq" as const, label: "FAQ", icon: IconFaq, minRole: "admin" as const },
  { key: "services" as const, label: "Services", icon: IconServices, minRole: "admin" as const },
  { key: "logos" as const, label: "Logos", icon: IconLogos, minRole: "admin" as const },
  { key: "site-info" as const, label: "Site Info", icon: IconSettings, minRole: "admin" as const },
  { key: "tools" as const, label: "Tools", icon: IconTools, minRole: "superadmin" as const },
  { key: "users" as const, label: "Users", icon: IconUsers, minRole: "superadmin" as const },
];

type Tab = (typeof allTabs)[number]["key"];
type Role = "admin" | "superadmin";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [tab, setTab] = useState<Tab>("messages");

  useEffect(() => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((data) => {
        setAuthenticated(data.authenticated);
        setRole(data.role || null);
      });
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
    return <LoginScreen onLogin={(r?: string) => {
      setAuthenticated(true);
      setRole((r as Role) || "admin");
    }} />;
  }

  const visibleTabs = allTabs.filter((t) =>
    t.minRole === "admin" || role === "superadmin"
  );

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
          {visibleTabs.map((t, i) => {
            const Icon = t.icon;
            const showDivider = i > 0 && t.minRole === "superadmin" && visibleTabs[i - 1].minRole === "admin";
            return (
              <div key={t.key}>
                {showDivider && (
                  <div className="mx-4 my-2 border-t border-gray-100">
                    <span className="mt-2 block text-[10px] font-semibold uppercase tracking-widest text-gray-300">
                      Dev Tools
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setTab(t.key)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    tab === t.key
                      ? "bg-[#155dfc]/10 text-[#155dfc]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <Icon />
                  {t.label}
                </button>
              </div>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 px-4 py-4">
          {role && (
            <div className="mb-2 px-4">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                role === "superadmin"
                  ? "bg-purple-50 text-purple-600"
                  : "bg-blue-50 text-blue-600"
              }`}>
                {role === "superadmin" ? "Super Admin" : "Admin"}
              </span>
            </div>
          )}
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
          {tab === "messages" && <MessagesManager />}
          {tab === "faq" && <FAQManager />}
          {tab === "services" && <ServicesManager />}
          {tab === "logos" && <LogosManager />}
          {tab === "site-info" && <SiteInfoManager />}
          {tab === "tools" && role === "superadmin" && <ToolsManager />}
          {tab === "users" && role === "superadmin" && <UsersManager />}
        </div>
      </main>
    </div>
  );
}
