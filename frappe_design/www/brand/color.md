---
base_template: templates/doc.html
title: Color
intro: Color Palette used in Frappe products
---

{%- macro palette(color) -%}
<div class="grid grid-cols-3 gap-4" data-color="{{ color }}">
{%- for shade in ['1', '2', '3', '4', '5', '6', '7', '8', '9'] -%}
{%- set classname = 'bg-' + color + '-' + shade + '00' -%}
<div class="flex items-center"><div class="rounded-lg w-12 h-12 {{ classname }}"></div><div class="ml-2"><code>{{color}}-{{shade}}00</code><br><code data-hex-code></code></div></div>
{%- endfor -%}
</div>
{%- endmacro -%}

## Blue (Primary)

{{ palette('blue') }}

## Gray (Secondary)

{{ palette('gray') }}

## Red

{{ palette('red') }}

## Green

{{ palette('green') }}

## Orange

{{ palette('orange') }}
