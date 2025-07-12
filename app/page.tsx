"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Users, BookOpen, TrendingUp } from "lucide-react"

export default function LoginPage() {
  const [userType, setUserType] = useState("")
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleLogin = () => {
    // Simulate login - in real app, this would authenticate with backend
    if (userType && credentials.username && credentials.password) {
      window.location.href = `/${userType}-dashboard`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - System Info */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SJCSI Student Performance Analysis System</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive monitoring and analysis platform for academic excellence
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Students</h3>
                <p className="text-sm text-gray-600">Track your progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Teachers</h3>
                <p className="text-sm text-gray-600">Monitor classes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Parents</h3>
                <p className="text-sm text-gray-600">View child's progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">Administrators</h3>
                <p className="text-sm text-gray-600">System analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login to System</CardTitle>
            <CardDescription>Access your dashboard based on your role</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username/ID</Label>
              <Input
                id="username"
                placeholder="Enter your username or ID"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>

            <Button
              className="w-full"
              onClick={handleLogin}
              disabled={!userType || !credentials.username || !credentials.password}
            >
              Login
            </Button>

            <div className="text-center text-sm text-gray-600">
              <p>Demo Credentials:</p>
              <p>Username: demo | Password: demo123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
