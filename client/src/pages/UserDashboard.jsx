import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Home,
  Menu,
  X,
  User,
} from "lucide-react";

const stats = [
  { title: "Messages", value: "1,245", icon: <MessageSquare size={28} /> },
  { title: "Friends", value: "312", icon: <BarChart3 size={28} /> },
  { title: "Groups", value: "18", icon: <Settings size={28} /> },
];

const recentActivity = [
  { id: 1, action: "You joined a new group", time: "2h ago" },
  { id: 2, action: "Alex sent you a message", time: "5h ago" },
  { id: 3, action: "Profile updated", time: "1d ago" },
];

const quickActions = [
  { label: "Messages", link: "/messages", icon: <MessageSquare /> },
  { label: "Settings", link: "/settings", icon: <Settings /> },
  { label: "Logout", link: "/logout", icon: <LogOut /> },
];

const sidebarLinks = [
  { label: "Home", link: "/", icon: <Home /> },
  { label: "Profile", link: "/profile", icon: <User /> },
  { label: "Messages", link: "/messages", icon: <MessageSquare /> },
  { label: "Settings", link: "/settings", icon: <Settings /> },
];

const UserDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 left-0 h-full w-64 p-6 bg-white/80 backdrop-blur-lg border-r border-gray-200 shadow-xl z-50"
      >
        <h2 className="text-2xl font-extrabold text-primary mb-15">
          🚀 QuickAccess
        </h2>
        <nav className="space-y-6">
          {sidebarLinks.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 8 }}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/10"
            >
              {item.icon}
              <Link to={item.link} className="font-semibold text-gray-800">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed top-17 left-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-10 ml-0 md:ml-10 lg:ml-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-extrabold text-primary drop-shadow">
            👋 Welcome Back, User
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Here’s what’s happening with your account today 🚀
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 rounded-3xl shadow-xl bg-white/70 backdrop-blur border border-gray-200 flex items-center gap-4 hover:scale-105 transition"
            >
              <div className="text-primary">{stat.icon}</div>
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-gray-600">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-secondary mb-6">
            🕒 Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow hover:shadow-lg"
              >
                <p className="text-gray-800">{activity.action}</p>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-secondary mb-6">
            ⚡ Quick Actions
          </h2>
          <div className="flex gap-6 flex-wrap">
            {quickActions.map((action, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={action.link}
                  className="px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 font-semibold bg-primary text-white hover:bg-primary/80"
                >
                  {action.icon}
                  {action.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;
