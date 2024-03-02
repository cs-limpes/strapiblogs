import type { Schema, Attribute } from '@strapi/strapi';

export interface FormsContactForm extends Schema.Component {
  collectionName: 'components_forms_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'envelop';
  };
  attributes: {
    Name: Attribute.String;
    Message: Attribute.Text;
    Email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.contact-form': FormsContactForm;
    }
  }
}
