import { defineField, defineType } from "sanity";


export const products = defineType({
    name : 'Product',
    title : 'Product',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            type : 'string'
        }),
        defineField({
          name : 'id',
          type : 'number'
      }),
      defineField({
        name : 'stock',
        type : 'number'
    }),
        defineField({
            name: 'slug',
            type : 'slug',
            options: {
                source: 'name',
              },
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name : 'Price',
            type : 'number',
          }),
          defineField({
            name : 'Description',
            type : 'text',
          }),
    ]
})

