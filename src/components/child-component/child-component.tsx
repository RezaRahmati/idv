import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.scss',
  shadow: true,
})
export class ChildComponent {

  render() {
    return (
      <Host>
        Child Component
      </Host>
    );
  }

}
