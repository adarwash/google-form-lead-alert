# Google Form Lead Alert (free Apps Script)

Get an **email every time someone submits your Google Form**, using a tiny Google Apps Script. No Zapier, no Make, no monthly fees, and nothing leaves your own Google account.

## Install in 5 minutes

1. Open the Google Sheet linked to your Form, then **Extensions → Apps Script**.
2. Paste [`Code.gs`](Code.gs) and set `NOTIFY_EMAIL` to your address. Save.
3. Click the clock icon (**Triggers**) → **Add trigger** → function `onFormSubmit`, event source *From spreadsheet*, event type *On form submit*.
4. Approve the Google permissions prompt, then submit a test response to your Form.

You'll get a plain-text email listing every answer.

## Free lite vs full kit

| | Lite (this repo) | [Lead Capture Starter Kit](https://payhip.com/b/BLaHN) |
|---|:---:|:---:|
| Email on each form submission | ✅ | ✅ |
| Subject line with the lead's name or email | | ✅ |
| Error alerts emailed to you when setup breaks | | ✅ |
| Auto-adds the row if the Sheet missed it | | ✅ |
| Step-by-step install guide (Form → Sheet → Script) | | ✅ |
| Troubleshooting FAQ for common errors | | ✅ |
| Sample leads sheet | | ✅ |
| Price | Free (MIT) | £19 one-off, 7-day refund |

👉 **[Get the full Lead Capture Starter Kit on Payhip](https://payhip.com/b/BLaHN)** if you want it done properly in 15–30 minutes.

## FAQ

**Do I need a paid Google Workspace?** No. A free Google account works (Gmail sending quotas apply).

**Nothing happens when I submit.** Check the trigger is *On form submit* on the spreadsheet, and that `NOTIFY_EMAIL` is set. See *Executions* in the Apps Script editor for errors.

## License

MIT. Use it, fork it, ship it.
