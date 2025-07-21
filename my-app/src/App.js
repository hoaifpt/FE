// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import MemberPage from './pages/Member/MemberPage';
import News from './pages/News/News';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import NewsTestPage from './pages/NewsTestPage';

import OurServices from './pages/Service/OurServices';
import HealthCheck from './pages/Service/HealthCheck';
import OnlineConsultationPage from './pages/Service/OnlineConsultationPage';
import SendPrescription from './pages/Service/SendPrescription';
// đổi alias để không trùng tên
import ServiceVaccineForm from './pages/Service/VaccineForm';

import StudentProfile from './pages/lookup/personal_Info/StudentProfile';
import Medications from './pages/lookup/prescription/Medications';
import Vaccination from './pages/lookup/vaccinehistory/vaccination';
import StudentHealthProfile from './pages/lookup/info/StudentHealthProfile';

import ChatBot from './components/chat/ChatBot';
import Notification from "./pages/notification/Notification";
import ReportPage from './pages/ReportPage/ReportPage';

import Login from './auth/Login/Login';
import OtpSuccess from './auth/OtpSuccess/OtpSuccess';
import ForgetPassword from './auth/ForgetPassword/ForgetPassword';
import OtpVerification from './auth/OtpVerification/OtpVerification';
import Register from './auth/Register/Register';
import ResetPassword from './auth/ResetPassword/ResetPassword';

import HealthFormApp from './pages/form/healthForm';
// đổi alias cho form nằm trong pages/form
import FormVaccineForm from './pages/form/vaccineForm';

import AdminApp from './AdminApp';
import UserApp from './UserApp';
import NurseApp from './NurseApp';

import VNPAYPaymentButton from './pages/Member/VNPAYPaymentButton';
import Order from './pages/order/order';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="493912650211-kqoj7t293bdhfgepv1q7kh7vik3o0852.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/test" element={<NewsTestPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Service pages */}
          <Route path="/services" element={<OurServices />} />
          <Route path="/health-check" element={<HealthCheck />} />
          <Route path="/online-consultation" element={<OnlineConsultationPage />} />
          <Route path="/send-prescription" element={<SendPrescription />} />
          <Route path="/vaccine-form" element={<ServiceVaccineForm />} />

          {/* Lookup */}
          <Route path="/patient-search" element={<StudentProfile />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/vaccinations" element={<Vaccination />} />
          <Route path="/health-record" element={<StudentHealthProfile />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/report" element={<ReportPage />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/otp-success" element={<OtpSuccess />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Payment */}
          <Route path="/payment/vnpay" element={<VNPAYPaymentButton />} />
          <Route path="/health-form" element={<HealthFormApp />} />
          <Route path="/vaccine" element={<FormVaccineForm />} />
          <Route path="/order" element={<Order />} />

          {/* Admin */}
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/*" element={<UserApp />} />
          <Route path="/nurse/*" element={<NurseApp />} />
        </Routes>
        <ChatBot />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
