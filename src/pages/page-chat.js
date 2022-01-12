import { html } from 'lit';
import { Logo, Feature } from '../components';
import { urlForName } from '../router';
import { PageElement } from '../helpers/page-element';

export class PageChat extends PageElement {
  render() {
    return html` <section class="home-data">
      <h1>CHAT</h1>
    </section>`;
  }
}

customElements.define('page-chat', PageChat);
