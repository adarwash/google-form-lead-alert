/**
 * Google Form Lead Alert (lite) — free, MIT licensed.
 * Emails you every time someone submits your Google Form. No Zapier, no monthly fees.
 *
 * Install (5 minutes):
 *   1. Open the Google Sheet linked to your Form → Extensions → Apps Script.
 *   2. Paste this file, set NOTIFY_EMAIL below, save.
 *   3. Triggers (clock icon) → Add trigger → onFormSubmit · From spreadsheet · On form submit.
 *   4. Approve the permissions prompt. Submit a test response.
 *
 * Want error alerts, auto-append of missing rows, smart subject lines,
 * a full install guide and troubleshooting FAQ? Full kit (£19):
 * https://payhip.com/b/BLaHN
 */

var NOTIFY_EMAIL = 'you@example.com';
var SUBJECT_PREFIX = '[New lead]';

function onFormSubmit(e) {
  if (!e || !e.namedValues) {
    throw new Error('Run this from an "On form submit" trigger, not the Run button.');
  }
  if (NOTIFY_EMAIL === 'you@example.com' || NOTIFY_EMAIL.indexOf('@') === -1) {
    throw new Error('Set NOTIFY_EMAIL to your real address first.');
  }
  var lines = ['New Google Form submission', ''];
  Object.keys(e.namedValues).forEach(function (key) {
    lines.push(key + ': ' + [].concat(e.namedValues[key]).join(', '));
  });
  MailApp.sendEmail(NOTIFY_EMAIL, SUBJECT_PREFIX + ' ' + new Date().toLocaleString(), lines.join('\n'));
}
