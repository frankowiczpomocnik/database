import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'otp',
  title: 'OTP',
  type: 'document',
  fields: [
    defineField({
      name: 'otp',
      title: 'OTP',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(4),
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
      name: 'valid',
      title: 'Valid',
      type: 'boolean',
      initialValue: false,
    }),
    
  ],
});