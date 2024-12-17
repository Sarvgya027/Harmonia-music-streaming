import Stripe from "stripe";
import { createClient } from '@supabase/supabase-js';

import { Database } from "@/types_db";
import { Price, Product } from "@/types";

import { stripe } from "./stripe";
import { toDateTime } from "./helpers";

export const SupabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''

)

const upsertProductRecord = async(product: Stripe.Product) => {
  const proudctData: Product = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? undefined,
    image: product.images?.[0] ?? null,
    metadata: product.metadata
  };

  const {error} = await SupabaseAdmin.from('products').upsert([proudctData]);

  if(error){
    throw error;
  }

  console.log(`Product inserted/updated: ${product.id}`);
}

const upsertPriceRecord = async (price: Stripe.Price) => {
  const priceData: Price = {
    id: price.id,
    product_id: typeof price.product === 'string' ? price.product : '',
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? undefined,
    type: price.type,
    unit_amount: price.unit_amount ?? undefined,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    trial_period_days: price.recurring?.trial_period_days ?? undefined,
    metadata: price.metadata,
  };

  const { error } = await SupabaseAdmin.from('prices').upsert([priceData]);

  if(error){
    throw error;
  }

  console.log(`Price inserted/updated: ${price.id}`);


  
}

const createOrRetrieveACustomer = async ({
  email,
  uuid
}: {
  email: string;
  uuid: string;

}) => {
  const {data, error} = await SupabaseAdmin.from('customers').select('stripe_customer_id').eq('id', uuid).single();

  if(error || !data?.stripe_customer_id){
    const customerData: {metadata: {supabaseUUID: string}; email?: string} = {
      metadata: {
        supabaseUUID: uuid
      }
    };


    if(email) customerData.email = email;

    const customer = await stripe.customers.create(customerData);
    const { error : supabaseError } = await SupabaseAdmin.from('customers').insert([{id: uuid, stripe_customer_id: customer.id}]);

    if(supabaseError){
      throw supabaseError;
    }
    

    console.log(`new customer created ${uuid}`)
    return customer.id
  }

}

const copyBillingDetailsToCustomer = async(
  uuid: string,
  payment_method: Stripe.PaymentMethod
) => {
  const customer = payment_method.customer as String;
  const { name, phone, address } = payment_method.billing_details;

  if(!name || !phone || !address) return;

  await stripe.customers.update(customer, {name, phone, address});
  const {error} = await supabaseAdmin.from('users').update({
    billing_address: {...address},
    payment_method: {...payment_method[payment_method.type]}
  }).eq('id', uuid);

  if(error) throw error;
}

const manageSubscriptionStatusChange = async(
  subscriptionId : String,
  customerId: String,
  createAction = false
) => {
  const {data: customerData, error: noCustomerError } = await SupabaseAdmin.from('customers').select('id').eq('stripe_customer_id', customerId).single();

  if(noCustomerError) throw noCustomerError;

  const {id: uuid} = customerData!;

  const subscription = await stripe.subscriptions.retrieve(
    subscriptionId, {
      expand: ["default_payment_method"]
    }
  );

  const 
}

