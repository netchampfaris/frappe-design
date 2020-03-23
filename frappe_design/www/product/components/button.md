---
base_template: templates/doc.html
title: Button
intro: Use buttons to trigger an action. They can contain labels or icons or both.
---

## Basic

<div class="preview">

<f-button>Button</f-button>

```html
<Button>Button</Button>
```

</div>

## Types

<div class="preview">

<f-button type="primary">Primary</f-button>
<f-button type="secondary">Secondary</f-button>
<f-button type="danger">Danger</f-button>

```html
<Button type="primary">Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="danger">Danger</Button>
```

</div>

## States

<div class="preview">

<f-button type="primary" disabled>Primary</f-button>
<f-button type="secondary" disabled>Secondary</f-button>
<f-button type="danger" disabled>Danger</f-button>

```html
<!-- Disabled buttons -->
<Button type="primary" disabled>Primary</Button>
<Button type="secondary" disabled>Secondary</Button>
<Button type="danger" disabled>Danger</Button>
```

</div>

## Props

| Prop Name  | Type      | Default     | Description                                |
| ---------- | --------- | ----------- | ------------------------------------------ |
| `type`     | `String`  | `secondary` | One of `primary`, `secondary` and `danger` |
| `disabled` | `Boolean` |             | Disables the button                        |
