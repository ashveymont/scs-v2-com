import type { Metadata } from "next";
import ApplicationForm from "./ApplicationForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply — The Sovereign Chess Society",
  description: "Submit your application to the Sovereign Chess Society. Admission is selective and reviewed individually by the Membership Committee.",
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
