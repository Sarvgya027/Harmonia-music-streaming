import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!,
  {
    apiVersion: "2024-10-28.acacia",
    appInfo: {
      name: 'Harmonia - music streaming app',
      version: '0.1.0'
    }
  }
)