"use server";

// MOCK SERVER ACTION - NO STRIPE DEPENDENCY
import { redirect } from "next/navigation";

export async function createCheckoutSession() {
  // Simulating a redirect
  console.log("Mock checkout session created");
  // For visual testing, we can redirect to a mock success page or back to home
  // redirect("/?mock_success=true");
}

export async function getParticipantCount() {
  // Return a static number for visual testing
  return 42;
}
