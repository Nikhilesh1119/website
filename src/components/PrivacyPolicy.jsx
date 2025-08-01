import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 01/08/2025</p>

      <section className="mb-6">
        <p>
          <strong>Chitrakosh Services</strong> operates the mobile application
          <strong> SharedRI</strong> for authorised teachers affiliated with
          schools using our platform. This privacy policy outlines how we
          collect and use your information when you access the App.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-3">
          We collect limited personal information needed for secure
          authentication and user verification:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Mobile Number and email address – used once during account veri
            ication via OTP
          </li>
          <li>Device ID – used to restrict access to authosised devices</li>
          <li>
            Teacher Login ID and Password – used to access the app (same as web
            portal)
          </li>
          <li>
            Class/Subject Data – displayed on the dashboard, synced from the
            school’s internal system
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-3">We use your information only to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Verify your identity and school affiliation</li>
          <li>Authenticate login via OTP (irst-time access)</li>
          <li>
            Ensure that only authorised devices are used to access your account
          </li>
          <li>Send important in-app noti ications and alerts</li>
          <li>Allow teachers to view and mark attendance based on the need.</li>
        </ul>
        <p className="mt-2">
          We do not track app usage or collect behavioral data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">3. Information Sharing</h2>
        <p>
          We do not sell or share your data with advertisers or external
          third-party platforms.
        </p>
        <p className="mt-2">We use secure third-party services to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Deliver one-time passwords (OTPs) for account veri ication via SMS
            and email
          </li>
          <li>Send important in-app noti ications and alerts</li>
        </ul>
        <p className="mt-2">
          These services are used solely for authentication and communication
          purposes, and they do not access or store your data beyond what is
          strictly necessary to perform their function.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">4. Data Security</h2>
        <p>We take reasonable measures to protect your information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>All communication are encrypted using HTTPS</li>
          <li>Device verification prevents unauthorized logins</li>
          <li>User credentials are stored securely</li>
          <li>
            Logins is tied to pre-registered mobile numbers managed by school
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">
          5. User Control & Data Requests
        </h2>
        <p>As a teacher, you can request:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Account access or correction</li>
          <li>
            {" "}
            Account deletion (subject to school policy and admin approval)
          </li>
        </ul>
        <p className="mt-2">
          To make a request, email us at:{" "}
          <a
            href="mailto:admin@chitrakoshservices.com"
            className="text-blue-600 underline"
          >
            admin@chitrakoshservices.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">6. Children’s Privacy</h2>
        <p>
          This app is intended only for teachers and school staff. We do not
          collect any personal data from students or children.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">7. Policy Updates</h2>
        <p>
          We may occasionally update this privacy policy. Changes will be posted
          on this page with a revised “Effective Date.”
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold   mb-2">8. Contact Information</h2>
        <p>
          <strong>Chitrakosh Services</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:admin@chitrakoshservices.com"
            className="text-blue-600 underline"
          >
            admin@chitrakoshservices.com
          </a>
          <br />
          Website:{" "}
          <Link to="/contact" className="text-blue-600 underline">
            www.sharedri.com/contact
          </Link>
        </p>
      </section>
    </div>
  );
}
