"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Calendar, BookOpen, TrendingUp, MessageCircle, LogOut, Home, Bell } from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const childrenData = [
  {
    name: "Maria Dela Cruz",
    studentId: "2024-001",
    grade: "Grade 8",
    section: "Section A",
    generalAverage: 88.5,
    attendanceRate: 95,
    subjects: [
      { subject: "Math", grade: 88, transmuted: "A-" },
      { subject: "Science", grade: 92, transmuted: "A" },
      { subject: "English", grade: 85, transmuted: "B+" },
      { subject: "Filipino", grade: 90, transmuted: "A-" },
    ],
  },
  {
    name: "Juan Dela Cruz",
    studentId: "2024-002",
    grade: "Grade 6",
    section: "Section B",
    generalAverage: 85.2,
    attendanceRate: 92,
    subjects: [
      { subject: "Math", grade: 85, transmuted: "B+" },
      { subject: "Science", grade: 87, transmuted: "B+" },
      { subject: "English", grade: 83, transmuted: "B" },
      { subject: "Filipino", grade: 86, transmuted: "B+" },
    ],
  },
]

const performanceData = [
  { month: "Aug", maria: 85, juan: 83 },
  { month: "Sep", maria: 88, juan: 85 },
  { month: "Oct", maria: 87, juan: 84 },
  { month: "Nov", maria: 90, juan: 86 },
  { month: "Dec", maria: 89, juan: 85 },
]

export default function ParentDashboard() {
  const parentInfo = {
    name: "Mr. Roberto Dela Cruz",
    children: childrenData.length,
    email: "roberto.delacruz@email.com",
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
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium">{parentInfo.name}</span>
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
        {/* Parent Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{parentInfo.name}</CardTitle>
                <CardDescription>Parent Dashboard | {parentInfo.children} Children Enrolled</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{parentInfo.children}</div>
                <div className="text-sm text-gray-600">Children</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Children Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {childrenData.map((child, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{child.name}</CardTitle>
                    <CardDescription>
                      {child.studentId} | {child.grade} - {child.section}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{child.generalAverage}</div>
                    <div className="text-xs text-gray-600">General Average</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Attendance Rate</p>
                    <div className="flex items-center space-x-2">
                      <Progress value={child.attendanceRate} className="flex-1" />
                      <span className="text-sm font-medium">{child.attendanceRate}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Academic Status</p>
                    <Badge
                      variant={
                        child.generalAverage >= 90 ? "default" : child.generalAverage >= 85 ? "secondary" : "outline"
                      }
                    >
                      {child.generalAverage >= 90
                        ? "Excellent"
                        : child.generalAverage >= 85
                          ? "Good"
                          : "Needs Improvement"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Children's Performance Comparison</CardTitle>
                  <CardDescription>Academic progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[75, 95]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="maria" stroke="#3b82f6" name="Maria" strokeWidth={2} />
                      <Line type="monotone" dataKey="juan" stroke="#10b981" name="Juan" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                  <CardDescription>Latest notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="font-medium text-green-800">Maria - Excellent Science Project</p>
                      <p className="text-green-700 text-sm">Received A+ on recent science project submission</p>
                      <p className="text-green-600 text-xs mt-1">2 days ago</p>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-medium text-blue-800">Juan - Perfect Attendance</p>
                      <p className="text-blue-700 text-sm">Maintained perfect attendance this month</p>
                      <p className="text-blue-600 text-xs mt-1">1 week ago</p>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="font-medium text-yellow-800">Parent-Teacher Conference</p>
                      <p className="text-yellow-700 text-sm">Scheduled for December 20, 2024 at 2:00 PM</p>
                      <p className="text-yellow-600 text-xs mt-1">Upcoming</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {childrenData.map((child, childIndex) => (
                <Card key={childIndex}>
                  <CardHeader>
                    <CardTitle>{child.name} - Subject Grades</CardTitle>
                    <CardDescription>Current semester performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {child.subjects.map((subject, index) => (
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
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">General Average:</span>
                        <span className="text-lg font-bold text-blue-600">{child.generalAverage}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {childrenData.map((child, childIndex) => (
                <Card key={childIndex}>
                  <CardHeader>
                    <CardTitle>{child.name} - Attendance Record</CardTitle>
                    <CardDescription>Monthly attendance tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Overall Attendance Rate</span>
                        <span className="font-bold text-green-600">{child.attendanceRate}%</span>
                      </div>
                      <Progress value={child.attendanceRate} className="w-full" />

                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">December</span>
                          <span className="text-sm text-green-600">15/16 days present</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">November</span>
                          <span className="text-sm text-green-600">22/22 days present</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">October</span>
                          <span className="text-sm text-green-600">20/21 days present</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Teacher Messages
                  </CardTitle>
                  <CardDescription>Recent communications from teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">Mrs. Elena Reyes - Mathematics</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                      <p className="text-sm text-gray-700">
                        Maria has shown excellent improvement in algebra. She's consistently participating in class
                        discussions.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">Mr. Carlos Santos - Science</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                      <p className="text-sm text-gray-700">
                        Juan's science project was outstanding. He demonstrated great understanding of the scientific
                        method.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message to Teachers
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>School events and important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Parent-Teacher Conference</p>
                        <p className="text-sm text-gray-600">December 20, 2024 - 2:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Christmas Program</p>
                        <p className="text-sm text-gray-600">December 22, 2024 - 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">Final Examinations</p>
                        <p className="text-sm text-gray-600">January 15-19, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Reports</CardTitle>
                <CardDescription>Download and view detailed academic reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {childrenData.map((child, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-3">{child.name} - Reports</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Quarterly Report Card
                        </Button>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Performance Analytics
                        </Button>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <Calendar className="h-4 w-4 mr-2" />
                          Attendance Summary
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
