"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

// The user provided a direct Stripe Payment Link.
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/14A14o2I78OE79h4gg";

export async function createCheckoutSession() {
  // Simply redirect to the provided Stripe Payment Link
  redirect(STRIPE_PAYMENT_LINK);
}

export async function getParticipantCount() {
  try {
    // We search for payment intents that are succeeded.
    // Ideally we would filter by a specific Product ID or Price ID to avoid counting other sales.
    // query: 'status:\'succeeded\' AND metadata[\'product_name\']:\'Paid Two Dollars\''
    // But since we don't have metadata set up on the link yet, we'll count all succeeded payments.
    const result = await stripe.paymentIntents.search({
      query: 'status:\'succeeded\'',
      limit: 1, // We only need the total count
    });

    return result.total_count || 0;
  } catch (error) {
    console.error("Error fetching participant count:", error);
    return 0; 
  }
}
