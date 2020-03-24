---
base_template: templates/doc.html
title: Button
intro: Use buttons to trigger an action. They can contain labels or icons or both.
---

## Vue Component

<div class="preview">

<f-button>Button</f-button>

<div class="py-2"></div>

<f-button type="primary">Primary</f-button>
<f-button type="secondary">Secondary</f-button>
<f-button type="danger">Danger</f-button>

<div class="py-2"></div>

<f-button type="primary" disabled>Primary</f-button>
<f-button type="secondary" disabled>Secondary</f-button>
<f-button type="danger" disabled>Danger</f-button>

<div class="py-2"></div>

<f-button icon-right="chevron-down">Dropdown</f-button>

```html
<!-- Basic Button -->
<Button>Button</Button>

<!-- Button variants -->
<Button type="primary">Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="danger">Danger</Button>

<!-- Disabled buttons -->
<Button type="primary" disabled>Primary</Button>
<Button type="secondary" disabled>Secondary</Button>
<Button type="danger" disabled>Danger</Button>

<!-- Button with icon -->
<Button icon-right="chevron-down">Dropdown</Button>
```

</div>

### Props

| Prop Name   | Type      | Default     | Description                                                                                              |
| ----------- | --------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `type`      | `String`  | `secondary` | One of `primary`, `secondary` and `danger`                                                               |
| `disabled`  | `Boolean` |             | Disables the button                                                                                      |
| `iconLeft`  | `String`  |             | Show an icon to the left of the Button text. Use icons from [feathericons.com](https://feathericons.com) |
| `iconRight` | `String`  |             | Show an icon to the right of the Button text                                                             |

## HTML

<div class="preview html">

{% include "frappe_design/public/node_modules/@frappe/ui/Button/Button.html" %}

</div>
