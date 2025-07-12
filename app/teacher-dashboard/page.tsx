"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, BookOpen, TrendingUp, AlertTriangle, User, LogOut, Home, Plus, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const classData = [
  { class: "Grade 8-A", students: 35, average: 87.5, attendance: 94 },
  { class: "Grade 8-B", students: 33, average: 85.2, attendance: 91 },
  { class: "Grade 9-A", students: 32, average: 89.1, attendance: 96 },
]

const studentPerformance = [
  { name: "Juan Dela Cruz", id: "2024-001", grade: 88, attendance: 95, status: "Good" },
  { name: "Maria Santos", id: "2024-002", grade: 92, attendance: 98, status: "Excellent" },
  { name: "Pedro Garcia", id: "2024-003", grade: 78, attendance: 85, status: "Needs Attention" },
  { name: "Ana Rodriguez", id: "2024-004", grade: 85, attendance: 92, status: "Good" },
  { name: "Carlos Mendoza", id: "2024-005", grade: 75, attendance: 80, status: "At Risk" },
]

const gradeDistribution = [
  { range: "90-100", count: 8 },
  { range: "85-89", count: 12 },
  { range: "80-84", count: 10 },
  { range: "75-79", count: 4 },
  { range: "Below 75", count: 1 },
]

export default function TeacherDashboard() {
  const teacherInfo = {
    name: "Mrs. Elena Reyes",
    teacherId: "T-2024-001",
    subject: "Mathematics",
    classes: 3,
    totalStudents: 100,
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
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium">{teacherInfo.name}</span>
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
        {/* Teacher Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{teacherInfo.name}</CardTitle>
                <CardDescription>
                  Teacher ID: {teacherInfo.teacherId} | Subject: {teacherInfo.subject}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{teacherInfo.totalStudents}</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Classes</p>
                  <p className="text-2xl font-bold">{teacherInfo.classes}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Students</p>
                  <p className="text-2xl font-bold">{teacherInfo.totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Grade</p>
                  <p className="text-2xl font-bold">87.3</p>
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
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="grading">Grading</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="interventions">Interventions</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">My Classes</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Class
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {classData.map((classItem, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{classItem.class}</CardTitle>
                    <CardDescription>{classItem.students} students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Class Average:</span>
                        <span className="font-medium">{classItem.average}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Attendance:</span>
                        <span className="font-medium">{classItem.attendance}%</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Student Performance Overview</h3>
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="8a">Grade 8-A</SelectItem>
                    <SelectItem value="8b">Grade 8-B</SelectItem>
                    <SelectItem value="9a">Grade 9-A</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search students..." className="w-64" />
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Grade
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Attendance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {studentPerformance.map((student, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{student.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">{student.grade}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">{student.attendance}%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge
                              variant={
                                student.status === "Excellent"
                                  ? "default"
                                  : student.status === "Good"
                                    ? "secondary"
                                    : student.status === "Needs Attention"
                                      ? "outline"
                                      : "destructive"
                              }
                            >
                              {student.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button size="sm" variant="ghost">
                              View Details
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

          <TabsContent value="grading" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Grading & Assessment</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Assessment
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Assessments</CardTitle>
                  <CardDescription>Latest quizzes and exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Algebra Quiz #3</p>
                        <p className="text-sm text-gray-600">Grade 8-A • Dec 15, 2024</p>
                      </div>
                      <Badge>Graded</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Geometry Exam</p>
                        <p className="text-sm text-gray-600">Grade 8-B • Dec 12, 2024</p>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Statistics Project</p>
                        <p className="text-sm text-gray-600">Grade 9-A • Dec 10, 2024</p>
                      </div>
                      <Badge>Graded</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Current semester overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={gradeDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance Analytics</CardTitle>
                <CardDescription>Comprehensive performance insights</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={[
                      { month: "Aug", grade8a: 85, grade8b: 83, grade9a: 87 },
                      { month: "Sep", grade8a: 87, grade8b: 85, grade9a: 89 },
                      { month: "Oct", grade8a: 86, grade8b: 84, grade9a: 88 },
                      { month: "Nov", grade8a: 88, grade8b: 86, grade9a: 90 },
                      { month: "Dec", grade8a: 87, grade8b: 85, grade9a: 89 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[75, 95]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="grade8a" stroke="#3b82f6" name="Grade 8-A" />
                    <Line type="monotone" dataKey="grade8b" stroke="#10b981" name="Grade 8-B" />
                    <Line type="monotone" dataKey="grade9a" stroke="#f59e0b" name="Grade 9-A" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interventions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Early Intervention System</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Intervention Plan
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                    Students Requiring Immediate Attention
                  </CardTitle>
                  <CardDescription>Students falling below academic expectations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-red-800">Carlos Mendoza (2024-005)</p>
                          <p className="text-red-700 text-sm">Grade: 75 | Attendance: 80%</p>
                          <p className="text-red-600 text-sm mt-1">
                            Consistently low performance in recent assessments
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Create Plan
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-yellow-800">Pedro Garcia (2024-003)</p>
                          <p className="text-yellow-700 text-sm">Grade: 78 | Attendance: 85%</p>
                          <p className="text-yellow-600 text-sm mt-1">Declining performance trend observed</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Monitor
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
