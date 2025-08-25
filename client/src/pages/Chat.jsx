import React from "react";
import { motion } from "framer-motion";

const contacts = [
  { id: 1, name: "Alice", img: "https://i.pravatar.cc/50?img=1" },
  { id: 2, name: "Bob", img: "https://i.pravatar.cc/50?img=2" },
  { id: 3, name: "Charlie", img: "https://i.pravatar.cc/50?img=3" },
  { id: 4, name: "Daisy", img: "https://i.pravatar.cc/50?img=4" },
];

const messages = [
  { id: 1, sender: "Alice", text: "Hey! How are you?" },
  { id: 2, sender: "me", text: "I’m good, just working on a project 🚀" },
  { id: 3, sender: "Alice", text: "That’s awesome! Keep it up 💪" },
  { id: 4, sender: "me", text: "Thanks! What about you?" },
];

const Chat = () => {
  return (
    <>
      <div className="h-screen flex bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
        {/* Sidebar - Contacts */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-1/4 bg-white/80 backdrop-blur-lg border-r border-gray-200 shadow-lg flex flex-col"
        >
          <h2 className="text-2xl font-bold p-4 pb-6 border-b border-gray-200">
            Contacts
          </h2>
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 hover:bg-primary/10 cursor-pointer"
              >
                <img
                  src={contact.img}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{contact.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow"
          >
            <img
              src="https://i.pravatar.cc/50?img=1"
              alt="Alice"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="font-bold text-lg">Alice</h2>
          </motion.div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl shadow-md max-w-xs ${
                    msg.sender === "me"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Box */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-4 flex gap-3 bg-white/80 backdrop-blur-lg border-t border-gray-200"
          >
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 input"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-6"
            >
              Send 🚀
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Chat;
