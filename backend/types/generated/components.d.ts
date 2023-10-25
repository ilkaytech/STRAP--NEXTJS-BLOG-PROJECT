import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {};
}

export interface FooterrLink extends Schema.Component {
  collectionName: 'components_footerr_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.link': FooterLink;
      'footerr.link': FooterrLink;
    }
  }
}
