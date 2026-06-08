import type { Metadata } from "next";
import ApplicationForm from "./ApplicationForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply For Membership",
  description: "Begin your application to the Sovereign Chess Society. Founding membership is limited to 30 members.",
  openGraph: {
    title: "Apply — Sovereign Chess Society",
    description: "Begin the admissions process. Founding membership is limited to 30 members.",
    url: "https://www.sovereignchesssociety.com/application",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ApplicationPage() {
  return (
    <>
      <Nav />
      <div style={{ backgroundColor: "var(--color-stone)", minHeight: "100vh", paddingTop: "62px" }}>
        <ApplicationForm />
      </div>
      <Footer />
    </>
  );
}
