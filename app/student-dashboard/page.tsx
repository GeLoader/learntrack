"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, TrendingUp, Award, AlertTriangle, User, LogOut, Home } from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const performanceData = [
  { month: "Aug", grade: 85 },
  { month: "Sep", grade: 88 },
  { month: "Oct", grade: 82 },
  { month: "Nov", grade: 90 },
  { month: "Dec", grade: 87 },
]

const subjectGrades = [
  { subject: "Math", grade: 88, transmuted: "A-" },
  { subject: "Science", grade: 92, transmuted: "A" },
  { subject: "English", grade: 85, transmuted: "B+" },
  { subject: "Filipino", grade: 90, transmuted: "A-" },
  { subject: "History", grade: 87, transmuted: "B+" },
  { subject: "PE", grade: 95, transmuted: "A+" },
]

const attendanceData = [
  { month: "Aug", present: 20, absent: 2 },
  { month: "Sep", present: 22, absent: 0 },
  { month: "Oct", present: 19, absent: 3 },
  { month: "Nov", present: 21, absent: 1 },
]

export default function StudentDashboard() {
  const studentInfo = {
    name: "Juan Dela Cruz",
    studentId: "2024-001",
    grade: "Grade 8",
    section: "Section A",
    generalAverage: 88.5,
    attendanceRate: 92,
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
                <span className="text-sm font-medium">{studentInfo.name}</span>
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
        {/* Student Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{studentInfo.name}</CardTitle>
                <CardDescription>
                  Student ID: {studentInfo.studentId} | {studentInfo.grade} - {studentInfo.section}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{studentInfo.generalAverage}</div>
                <div className="text-sm text-gray-600">General Average</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Current GPA</p>
                  <p className="text-2xl font-bold">{studentInfo.generalAverage}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold">{studentInfo.attendanceRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Subjects</p>
                  <p className="text-2xl font-bold">{subjectGrades.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Trend</p>
                  <p className="text-2xl font-bold text-green-600">↗ +2.5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="grades" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="grades" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Grades</CardTitle>
                  <CardDescription>Current semester performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subjectGrades.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{subject.subject}</p>
                          <p className="text-sm text-gray-600">Numerical: {subject.grade}</p>
                        </div>
                        <Badge
                          variant={subject.grade >= 90 ? "default" : subject.grade >= 85 ? "secondary" : "outline"}
                        >
                          {subject.transmuted}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Visual representation of your grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjectGrades}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Bar dataKey="grade" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Overview</CardTitle>
                  <CardDescription>Monthly attendance tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Overall Attendance Rate</span>
                      <span className="font-bold text-green-600">{studentInfo.attendanceRate}%</span>
                    </div>
                    <Progress value={studentInfo.attendanceRate} className="w-full" />

                    <div className="space-y-2 mt-4">
                      {attendanceData.map((month, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">{month.month}</span>
                          <div className="text-sm">
                            <span className="text-green-600">{month.present} Present</span>
                            {month.absent > 0 && <span className="text-red-600 ml-2">{month.absent} Absent</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Attendance vs Performance</CardTitle>
                  <CardDescription>Correlation between attendance and grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-8">
                    <div className="text-4xl font-bold text-green-600 mb-2">Strong</div>
                    <p className="text-gray-600">
                      Positive correlation between your attendance and academic performance
                    </p>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        Your consistent attendance contributes to your strong academic performance!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Your academic progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="grade" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                    Academic Alerts & Recommendations
                  </CardTitle>
                  <CardDescription>Areas for improvement and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">Achievement</span>
                      </div>
                      <p className="text-green-700 mt-1">Excellent performance in Science - keep up the great work!</p>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-800">Attention Needed</span>
                      </div>
                      <p className="text-yellow-700 mt-1">
                        Math grade dropped to 82. Consider additional study sessions.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800">Improvement</span>
                      </div>
                      <p className="text-blue-700 mt-1">Great improvement in attendance this month!</p>
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
