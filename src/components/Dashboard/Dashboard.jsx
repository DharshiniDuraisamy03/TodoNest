import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import "./Dashboard.css";

const purple1 = "#6a4baf";
const purple2 = "#9c8ede";
const purple3 = "#c9c5f5";

const lineData = [
  { name: "Mon", Completed: 5, Pending: 10 },
  { name: "Tue", Completed: 8, Pending: 7 },
  { name: "Wed", Completed: 12, Pending: 5 },
  { name: "Thu", Completed: 9, Pending: 6 },
  { name: "Fri", Completed: 15, Pending: 3 },
];

const barData = [
  { name: "Work", Tasks: 20 },
  { name: "Personal", Tasks: 12 },
  { name: "Fitness", Tasks: 8 },
  { name: "Shopping", Tasks: 5 },
];

const pieData = [
  { name: "Completed", value: 70 },
  { name: "Pending", value: 20 },
  { name: "Overdue", value: 10 },
];

const areaData = [
  { day: "Mon", newTasks: 5 },
  { day: "Tue", newTasks: 9 },
  { day: "Wed", newTasks: 4 },
  { day: "Thu", newTasks: 7 },
  { day: "Fri", newTasks: 6 },
  { day: "Sat", newTasks: 3 },
  { day: "Sun", newTasks: 8 },
];

const productivityData = [
  { month: "Jan", completedTasks: 120 },
  { month: "Feb", completedTasks: 135 },
  { month: "Mar", completedTasks: 160 },
  { month: "Apr", completedTasks: 180 },
  { month: "May", completedTasks: 210 },
];

function Dashboard() {
  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Tasks Completed vs Pending (This Week)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={lineData}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={purple1} />
              <YAxis stroke={purple1} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Completed" stroke={purple1} />
              <Line type="monotone" dataKey="Pending" stroke={purple2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Tasks by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={barData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={purple1} />
              <YAxis stroke={purple1} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Tasks" fill={purple1} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="full-width-chart">
          <h3>Monthly Productivity (Completed Tasks)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={productivityData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={purple2} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={purple2} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke={purple2} />
              <YAxis stroke={purple2} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="completedTasks"
                stroke={purple2}
                fillOpacity={1}
                fill="url(#colorTasks)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Task Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill={purple1}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={[purple1, purple2, purple3][index % 3]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Daily New Tasks Added</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={areaData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorNewTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={purple1} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={purple1} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke={purple1} />
              <YAxis stroke={purple1} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="newTasks"
                stroke={purple1}
                fillOpacity={1}
                fill="url(#colorNewTasks)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
