import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'f3emi9oe', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset name (e.g., 'production')
  apiVersion: '2023-01-01',    // Use the latest or specific API version
  useCdn: true,                // Set to true for faster response times (cached content)
});

export default client;
