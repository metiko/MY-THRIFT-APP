import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Status from "./pages/Status"
import GroupManagement from "./pages/GroupManagement"
import Payments from "./pages/Payments"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import ErrorPage from "./pages/ErrorPage"
import { ErrorBoundary } from "react-error-boundary"

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/status" element={<Status />} />
          <Route path="/groups" element={<GroupManagement />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
