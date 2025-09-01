// src/pages/Dashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/axios";

export default function Dashboard() {
  const [tab, setTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const fetchAll = async () => {
    try {
      setLoading(true);
      setError("");
      const [aRes, cRes] = await Promise.all([
        API.get("/appointments"),
        API.get("/contacts"),
      ]);
      setAppointments(aRes.data.data || []);
      setContacts(cRes.data.data || []);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    const id = setInterval(fetchAll, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => setPage(1), [tab, search, dateRange.from, dateRange.to]);

  const stats = useMemo(() => {
    const apptToday = appointments.filter((a) =>
      isSameDay(a.date, new Date())
    );
    const unseenContacts = contacts.filter((c) => !c.seen);
    return {
      totalAppointments: appointments.length,
      appointmentsToday: apptToday.length,
      totalContacts: contacts.length,
      unseenContacts: unseenContacts.length,
    };
  }, [appointments, contacts]);

  const filtered = useMemo(() => {
    const list = tab === "appointments" ? appointments : contacts;
    const q = search.trim().toLowerCase();
    const fromTs = dateRange.from ? new Date(dateRange.from).getTime() : null;
    const toTs = dateRange.to ? new Date(dateRange.to).getTime() : null;

    return list.filter((item) => {
      const text = Object.values(item)
        .filter((v) => typeof v === "string")
        .join(" ")
        .toLowerCase();
      const passSearch = q ? text.includes(q) : true;

      let passDate = true;
      const d = getDateFromAny(item.date, item.createdAt, item._id);
      if (fromTs && d) passDate = passDate && d >= fromTs;
      if (toTs && d) passDate = passDate && d <= toTs + 86399000;
      return passSearch && passDate;
    });
  }, [tab, appointments, contacts, search, dateRange]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const onDelete = async (type, id) => {
    if (!confirm("Delete this item?")) return;
    try {
      await API.delete(`/${type === "contacts" ? "contacts" : "appointments"}/${id}`);
      await fetchAll();
    } catch (e) {
      alert(e.message);
    }
  };

  const markSeen = async (id) => {
    try {
      await API.patch(`/contacts/${id}`, { seen: true });
      await fetchAll();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto p-4">
        <Header stats={stats} onRefresh={fetchAll} loading={loading} />

        {/* Filters */}
        <div className="mt-6 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow border">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, phone, subject..."
              className="w-full outline-none text-sm px-2"
            />
          </div>
          <div className="bg-white p-3 rounded-xl shadow border flex gap-2 items-center">
            <label className="text-sm text-gray-500">From</label>
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) => setDateRange((s) => ({ ...s, from: e.target.value }))}
              className="w-full text-sm border rounded px-2"
            />
          </div>
          <div className="bg-white p-3 rounded-xl shadow border flex gap-2 items-center">
            <label className="text-sm text-gray-500">To</label>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) => setDateRange((s) => ({ ...s, to: e.target.value }))}
              className="w-full text-sm border rounded px-2"
            />
          </div>
          <div className="bg-white p-1 rounded-xl shadow border flex">
            <TabButton active={tab === "appointments"} onClick={() => setTab("appointments")} style={{ backgroundColor: "blue" ,textColor: "white" }}>Appointments</TabButton>
            <TabButton active={tab === "contacts"} onClick={() => setTab("contacts")} style={{ backgroundColor: "green" ,textColor: "white" }}>Contacts</TabButton>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 bg-white rounded-xl shadow overflow-hidden border">
          {error ? (
            <div className="p-6 text-red-600 font-medium">{error}</div>
          ) : (
            <Table type={tab} rows={pageData} onDelete={onDelete} markSeen={markSeen} />
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}
          </p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50" style={{ backgroundColor: "green" }}
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >Prev</button>
            <button
              className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition disabled:opacity-50" style={{ backgroundColor: "blue" }}
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------- Helper Components -----------------
function TopBar() {
  return (
    <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b shadow-sm ">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between ">
        <h1 className="text-xl font-bold text-gray-800 ">Mediplus Hospital Admin Panel</h1>
        <div className="text-sm text-gray-500 italic" style={{ backgroundColor: "yellow" }} >Live Monitor</div>
      </div>
    </div>
  );
}

function Header({ stats, onRefresh, loading }) {
  const cards = [
    { label: "Total Appointments", value: stats.totalAppointments },
    { label: "Appointments Today", value: stats.appointmentsToday },
    { label: "Total Contacts", value: stats.totalContacts },
    { label: "Unseen Contacts", value: stats.unseenContacts },
  ];
  return (
//    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//    {/*//<div className='grid  grid-cols-4 mr-20 w-[1150px] mr-[20px] rounded-xl'>*/}
//      {cards.map((c) => (
//        <div key={c.label} className="bg-white rounded-xl p-5 shadow border hover:shadow-md transition">
//          <div className="text-sm text-gray-500">{c.label}</div>
//          <div className="text-2xl font-bold mt-1 text-gray-800">{c.value}</div>
//        </div>
//      ))}
//      <button
//        onClick={onRefresh}
//        disabled={loading}
//        className="sm:col-span-2 lg:col-span-1 bg-gray-900 text-white rounded-xl p-4 shadow hover:bg-gray-800 transition"
//      >{loading ? "Refreshing…" : "Refresh Now"}</button>
//    </div>
//  );
//}

<div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
  {cards.map((c) => (
    <div
      key={c.label}
      className="bg-white rounded-xl p-5 shadow border mr-5 hover:bg-gray-100 hover:shadow-lg transition" 
    >
      <div className="text-sm text-gray-500">{c.label}</div>
      <div className="text-2xl font-bold mt-1 text-gray-800">{c.value}</div>
    </div>
  ))}
  <button
    onClick={onRefresh}
    disabled={loading}
    className="sm:col-span-2 lg:col-span-1 bg--900 text-white rounded-xl p-4 shadow hover:bg-gray-800 transition mt-4 mb-4" style={{ backgroundColor: "black" }}
  >
    {loading ? "Refreshing…" : "Refresh Now"}
  </button>
</div>
  );
}

function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`flex-1 px-3 py-2 rounded-lg font-medium transition ${active ? "bg-gray-900 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
    >{children}</button>
  );
}

function Table({ type, rows, onDelete, markSeen }) {
  if (!rows.length) return <div className="p-6 text-gray-500 text-center">No records found.</div>;

  const headers = type === "appointments"
    ? ["Name", "Email", "Phone", "Date", "Message", "Actions"]
    : ["Name", "Email", "Subject", "Message", "Actions"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r._id} className="hover:bg-gray-50 transition">
              {type === "appointments" ? (
                <>
                  <Cell>{r.name}</Cell>
                  <Cell>{r.email}</Cell>
                  <Cell>{r.phone}</Cell>
                  <Cell>{fmtDate(r.date)}</Cell>
                  <Cell className="max-w-[420px]"><span className="line-clamp-2">{r.message}</span></Cell>
                  <Cell><RowActions onDelete={() => onDelete("appointments", r._id)} /></Cell>
                </>
              ) : (
                <>
                  <Cell>{r.name}</Cell>
                  <Cell>{r.email}</Cell>
                  <Cell>{r.subject}</Cell>
                  <Cell className="max-w-[420px]"><span className="line-clamp-2">{r.message}</span></Cell>
                  <Cell>
                    <div className="flex gap-2">
                      {!r.seen && (
                        <button className="px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-500 transition" onClick={() => markSeen(r._id)} style={{ backgroundColor: "green" }}>Mark Seen</button>
                      )}
                      <RowActions onDelete={() => onDelete("contacts", r._id)} />
                    </div>
                  </Cell>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell({ children, className = "" }) {
  return <td className={`px-4 py-3 border-b align-top ${className}`}>{children}</td>;
}

function RowActions({ onDelete }) {
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-500 transition" onClick={onDelete}  style={{ backgroundColor: "red" }}>Delete</button>
    </div>
  );
}

function fmtDate(d) {
  if (!d) return "—";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleString();
}

function isSameDay(a, b) {
  const da = getDateFromAny(a);
  const db = getDateFromAny(b);
  if (!da || !db) return false;
  const A = new Date(da);
  const B = new Date(db);
  return A.getFullYear() === B.getFullYear() &&
         A.getMonth() === B.getMonth() &&
         A.getDate() === B.getDate();
}

function getDateFromAny(primary, fallback, id) {
  if (primary) {
    const t = new Date(primary).getTime();
    if (!isNaN(t)) return t;
  }
  if (fallback) {
    const t = new Date(fallback).getTime();
    if (!isNaN(t)) return t;
  }
  if (id && typeof id === "string" && id.length === 24) {
    const ts = parseInt(id.substring(0, 8), 16) * 1000;
    return ts;
  }
  return null;
}


