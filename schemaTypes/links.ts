import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'link',
  title: 'Linki',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imię i nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required().min(2),
    }), 
  
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^\+?\d{7,15}$/,
          { name: 'phone', invert: false }
        ),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      description: 'Dodaj dodatkowe informacje',
      validation: (Rule) => Rule.max(500).warning('Maksymalnie 500 znaków'),
    }),
    
    defineField({
        name: 'createdAt',
        title: 'Data utworzenia',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }),
  ],
});