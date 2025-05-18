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
  { name: "Jan", Patients: 30, Appointments: 20 },
  { name: "Feb", Patients: 45, Appointments: 35 },
  { name: "Mar", Patients: 60, Appointments: 50 },
  { name: "Apr", Patients: 75, Appointments: 65 },
  { name: "May", Patients: 90, Appointments: 80 },
];

const barData = [
  { name: "Cardiology", Patients: 40 },
  { name: "Neurology", Patients: 30 },
  { name: "Orthopedics", Patients: 20 },
  { name: "Pediatrics", Patients: 25 },
];

const pieData = [
  { name: "Male", value: 400 },
  { name: "Female", value: 300 },
  { name: "Other", value: 100 },
];

const areaData = [
  { day: "Mon", newPatients: 12 },
  { day: "Tue", newPatients: 19 },
  { day: "Wed", newPatients: 8 },
  { day: "Thu", newPatients: 15 },
  { day: "Fri", newPatients: 10 },
  { day: "Sat", newPatients: 20 },
  { day: "Sun", newPatients: 14 },
];

// New chart data
const newChartData = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 2500 },
  { month: "Apr", revenue: 4000 },
  { month: "May", revenue: 3500 },
];

function Dashboard() {
  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Monthly Patients and Appointments</h3>
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
              <Line type="monotone" dataKey="Patients" stroke={purple1} />
              <Line type="monotone" dataKey="Appointments" stroke={purple2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Patients by Department</h3>
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
              <Bar dataKey="Patients" fill={purple1} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Full width chart container */}
        <div className="full-width-chart">
          <h3>Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={newChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="revenue"
                stroke={purple2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Patient Gender Distribution</h3>
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
          <h3>Daily New Patients</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={areaData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorNewPatients"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
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
                dataKey="newPatients"
                stroke={purple1}
                fillOpacity={1}
                fill="url(#colorNewPatients)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
