import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await API.get("/contacts");
        if (data.success) setContacts(data.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No contact messages found</p>
      ) : (
        contacts.map((c) => (
          <div key={c._id} className="border p-2 mb-2 rounded">
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Message:</strong> {c.message}</p>
            <p><strong>Submitted At:</strong> {new Date(c.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
