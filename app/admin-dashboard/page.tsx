"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  User,
  LogOut,
  Home,
  Settings,
  BarChart3,
  FileText,
  Shield,
} from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts"

const schoolStats = {
  totalStudents: 1250,
  totalTeachers: 45,
  totalClasses: 35,
  averageGrade: 86.7,
  attendanceRate: 94.2,
  atRiskStudents: 23,
}

const gradeDistribution = [
  { grade: "Grade 6", students: 210, average: 85.2 },
  { grade: "Grade 7", students: 205, average: 86.1 },
  { grade: "Grade 8", students: 215, average: 87.3 },
  { grade: "Grade 9", students: 200, average: 86.8 },
  { grade: "Grade 10", students: 420, average: 87.5 },
]

const performanceData = [
  { month: "Aug", average: 84.5, attendance: 92 },
  { month: "Sep", average: 85.2, attendance: 94 },
  { month: "Oct", average: 86.1, attendance: 93 },
  { month: "Nov", average: 86.8, attendance: 95 },
  { month: "Dec", average: 86.7, attendance: 94 },
]

const subjectPerformance = [
  { subject: "Mathematics", average: 84.2, color: "#3b82f6" },
  { subject: "Science", average: 87.5, color: "#10b981" },
  { subject: "English", average: 86.8, color: "#f59e0b" },
  { subject: "Filipino", average: 88.1, color: "#ef4444" },
  { subject: "Social Studies", average: 85.9, color: "#8b5cf6" },
  { subject: "PE", average: 92.3, color: "#06b6d4" },
]

const teacherPerformance = [
  { name: "Mrs. Elena Reyes", subject: "Mathematics", classes: 3, avgGrade: 87.2, status: "Excellent" },
  { name: "Mr. Carlos Santos", subject: "Science", classes: 4, avgGrade: 89.1, status: "Excellent" },
  { name: "Ms. Ana Rodriguez", subject: "English", classes: 3, avgGrade: 86.5, status: "Good" },
  { name: "Mrs. Maria Garcia", subject: "Filipino", classes: 3, avgGrade: 88.3, status: "Excellent" },
  { name: "Mr. Jose Mendoza", subject: "Social Studies", classes: 2, avgGrade: 85.7, status: "Good" },
]

export default function AdminDashboard() {
  const adminInfo = {
    name: "Dr. Patricia Villanueva",
    position: "Principal",
    adminId: "A-2024-001",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">SJCSI Performance System</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium">{adminInfo.name}</span>
              </div>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{adminInfo.name}</CardTitle>
                <CardDescription>
                  {adminInfo.position} | Admin ID: {adminInfo.adminId}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{schoolStats.totalStudents}</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Students</p>
                  <p className="text-2xl font-bold">{schoolStats.totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Teachers</p>
                  <p className="text-2xl font-bold">{schoolStats.totalTeachers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Classes</p>
                  <p className="text-2xl font-bold">{schoolStats.totalClasses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Grade</p>
                  <p className="text-2xl font-bold">{schoolStats.averageGrade}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-cyan-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold">{schoolStats.attendanceRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">At Risk</p>
                  <p className="text-2xl font-bold">{schoolStats.atRiskStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>School Performance Trends</CardTitle>
                  <CardDescription>Academic performance and attendance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="average" stroke="#3b82f6" name="Average Grade" strokeWidth={2} />
                      <Line type="monotone" dataKey="attendance" stroke="#10b981" name="Attendance %" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grade Level Distribution</CardTitle>
                  <CardDescription>Student count and performance by grade level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={gradeDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="grade" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Subject Performance Overview</CardTitle>
                <CardDescription>Average performance across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {subjectPerformance.map((subject, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold" style={{ color: subject.color }}>
                        {subject.average}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{subject.subject}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Student Management</h3>
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Grades</SelectItem>
                    <SelectItem value="6">Grade 6</SelectItem>
                    <SelectItem value="7">Grade 7</SelectItem>
                    <SelectItem value="8">Grade 8</SelectItem>
                    <SelectItem value="9">Grade 9</SelectItem>
                    <SelectItem value="10">Grade 10</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search students..." className="w-64" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gradeDistribution.map((grade, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{grade.grade}</CardTitle>
                    <CardDescription>{grade.students} students enrolled</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Average Grade:</span>
                        <span className="font-medium">{grade.average}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">At Risk Students:</span>
                        <span className="font-medium text-red-600">{Math.floor(grade.students * 0.05)}</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Teacher Performance Overview</h3>
              <Button>
                <User className="h-4 w-4 mr-2" />
                Add Teacher
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Teacher
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Classes
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg Grade
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Performance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {teacherPerformance.map((teacher, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{teacher.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">{teacher.classes}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">{teacher.avgGrade}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant={teacher.status === "Excellent" ? "default" : "secondary"}>
                              {teacher.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button size="sm" variant="ghost">
                              View Profile
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Distribution</CardTitle>
                  <CardDescription>Student grade distribution across the school</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Excellent (90-100)", value: 285, fill: "#10b981" },
                          { name: "Good (85-89)", value: 425, fill: "#3b82f6" },
                          { name: "Satisfactory (80-84)", value: 380, fill: "#f59e0b" },
                          { name: "Needs Improvement (75-79)", value: 135, fill: "#ef4444" },
                          { name: "Below Standard (<75)", value: 25, fill: "#6b7280" },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      ></Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Early Intervention Alerts</CardTitle>
                  <CardDescription>Students requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-red-800">Critical Risk</p>
                          <p className="text-red-700 text-sm">8 students below 75% average</p>
                        </div>
                        <Badge variant="destructive">Urgent</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-yellow-800">Moderate Risk</p>
                          <p className="text-yellow-700 text-sm">15 students with declining trends</p>
                        </div>
                        <Badge variant="outline">Monitor</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blue-800">Attendance Issues</p>
                          <p className="text-blue-700 text-sm">12 students below 85% attendance</p>
                        </div>
                        <Badge variant="secondary">Review</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Reports</h3>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Generate Custom Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance Report</CardTitle>
                  <CardDescription>Comprehensive academic analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <FileText className="h-4 w-4 mr-2" />
                      Monthly Performance Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Grade Distribution Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Performance Trends
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Attendance Reports</CardTitle>
                  <CardDescription>Student attendance analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="h-4 w-4 mr-2" />
                      Daily Attendance Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Chronic Absenteeism Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Attendance vs Performance
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teacher Reports</CardTitle>
                  <CardDescription>Faculty performance analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="h-4 w-4 mr-2" />
                      Teacher Performance Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Class Management Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Professional Development
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Administration</h3>
              <Button>
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage system users and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Active Students</span>
                      <span className="font-bold">{schoolStats.totalStudents}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Teachers</span>
                      <span className="font-bold">{schoolStats.totalTeachers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Parent Accounts</span>
                      <span className="font-bold">890</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Admin Users</span>
                      <span className="font-bold">5</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Manage Users</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Monitor system performance and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>System Status</span>
                      <Badge variant="default">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Database Status</span>
                      <Badge variant="default">Healthy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Backup</span>
                      <span className="text-sm">2 hours ago</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Sessions</span>
                      <span className="font-bold">234</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">View System Logs</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
