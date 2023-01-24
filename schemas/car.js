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
