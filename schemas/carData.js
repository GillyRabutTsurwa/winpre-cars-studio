import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carData',
  title: 'carData',
  type: 'object',
  fields: [
    defineField({
      name: 'mileage',
      title: 'Mileage',
      type: 'number',
    }),
    defineField({
      name: 'mpg',
      title: 'Miles Per Gallon (MPG)',
      type: 'number',
    }),
    defineField({
      name: 'engine',
      title: 'Engine',
      type: 'string',
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
    }),
    defineField({
      name: 'drivetrain',
      title: 'Drivetrain',
      type: 'string',
    }),
    defineField({
      name: 'exteriorColor',
      title: 'Exterior Color',
      type: 'string',
    }),
    defineField({
      name: 'interiorColor',
      title: 'Interior Color',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
