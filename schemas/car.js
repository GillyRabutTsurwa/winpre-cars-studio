import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    /**
     * NEW: added new field
     * thanks to https://www.sanity.io/docs/string-type for reference
     */
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sedan', value: 'sedan'},
          {title: 'SUV', value: 'suv'},
          {title: 'Hatchback', value: 'hatchback'},
          {title: 'Sports Car', value: 'sports-car'},
          {title: 'Pick-Up Truck', value: 'truck'},
        ],
        layout: 'radio',
      },
      // NOTE: making these required. cannot publish sans selectionner
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator')
      },
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
    }),
    defineField({
      // NEWNOTE: added new field, same schema as the new one above
      title: 'Price Level',
      name: 'priceLevel',
      type: 'string',
      options: {
        list: [
          // NOTE; not ideal to add the helper info to the title, but it doesn't show in the data, so its OK for now
          {title: 'One ($4,999 or Less)', value: 'first'},
          {title: 'Two ($5,000 to $9,999)', value: 'second'},
          {title: 'Three ($10,000 to $14,999)', value: 'third'},
          {title: 'Four ($15,000 to $19,999)', value: 'fourth'},
          {title: 'Five ($20,000 to $24,999)', value: 'fifth'},
          {title: 'Six ($25,000 or More)', value: 'sixth'},
        ],
        layout: 'radio',
        validation: (Rule) => Rule.required(),
      },
    }),
    defineField({
      title: 'Car Data',
      name: 'defaultCarData',
      type: 'carData',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Car Sold?',
      name: 'sold',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'brand',
      manufactor: 'manufactor.title',
      media: 'defaultCarData.images[0]',
    },
  },
})
