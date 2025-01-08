import { type SchemaTypeDefinition } from 'sanity'
import { products } from './Products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
