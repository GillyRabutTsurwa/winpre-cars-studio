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
    defineField({
      name: 'vin',
      title: 'VIN',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator' || name === 'editor') //NOTE: this should work
      },
      /**
       * NOTEIMPORTANT: figured out how to generate a slug from multiple field types
       * thanks to these two links:
       * https://www.sanity.io/docs/slug-type
       * https://stackoverflow.com/questions/58450560/sanity-io-add-custom-date-to-slug-url (less so, but still helped)
       * IMPORTANT: the properties under Options in the documentation (like source), MUST be in the options object, or else it won't work
       * so the source property cannot be outside the options object along with the other properties.
       */
      options: {
        source: (doc, options) => {
          console.log(doc)
          console.log(options)
          const brand = doc.brand.toLowerCase()
          const model = doc.model.toLowerCase()
          const year = doc.year
          const vin = doc.vin.slice(4) //NOTE: taking the 5th character of the VIN onwards
          return `${brand}-${model}-${year}-${vin}`
        },
      },
    }),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
    }),
    defineField({
      title: 'Price Level',
      name: 'priceLevel',
      type: 'string',
      options: {
        list: [
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
