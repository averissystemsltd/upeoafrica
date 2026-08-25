# Payment rail artwork

Official brand artwork, used as supplied. Never redraw, recolour, or crop these.

| File                 | Source                                          | Used by                          |
| -------------------- | ----------------------------------------------- | -------------------------------- |
| `mpesa.svg`          | Wikimedia Commons, `M-PESA LOGO-01.svg` (512×273) | `MpesaMark`                      |
| `airtel.svg`         | Wikimedia Commons, `Airtel logo.svg` (309×323)    | `AirtelMoneyMark`                |
| `card-payments.jpg`  | Supplied by the client (800×450)                  | Products payment panel, right column |

`airtel.svg` is the parent Airtel mark. No generic "Airtel Money" lockup is
published on Commons or the usual vector repositories — only Tanzania and Uganda
regional variants, which would be wrong branding for a Kenyan site. Swap in the
official Airtel Money Kenya asset here if the business obtains one.

The logos render directly on the dark panel with no white plate behind them —
every colour in both marks is light enough to hold against `ink-950`. Bank and
card are generic category icons, not brand marks, so they stay as inline SVG in
`PaymentLogos.tsx` and inherit the surrounding text colour.
