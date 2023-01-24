import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'introText',
  title: 'Intro Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      // type: "blockContent", //NOTE: will j'y reviendrai plus tard, mais pour le moment...
      type: 'text',
    }),
  ],
})
