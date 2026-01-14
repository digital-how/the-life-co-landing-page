# GA4 + Google Ads Conversion Tracking Setup

## Changes Made

### 1. Updated `app/layout.tsx`
- **Location**: Root layout file
- **Changes**:
  - Replaced hardcoded GA4 ID (`G-3DKEBB7FJD`) with environment variable `NEXT_PUBLIC_GA4_ID`
  - Added conditional Google Ads configuration using `NEXT_PUBLIC_GOOGLE_ADS_ID`
  - Added `AnalyticsDebug` component for debugging
  - Scripts load with `strategy="afterInteractive"` to ensure they run on every route

### 2. Created `components/AnalyticsDebug.tsx`
- **Purpose**: Client-side debug component that logs GA loading status
- **Visibility**: 
  - Enabled in development mode (`NODE_ENV !== 'production'`)
  - Can be enabled in production by setting `NEXT_PUBLIC_ANALYTICS_DEBUG=1`
- **Output**: Console logs showing:
  - Whether `window.gtag` exists
  - Whether `window.dataLayer` exists
  - All Google Analytics/Tag Manager scripts found
  - Contents of `dataLayer`

### 3. Updated Form Components
- **Files Updated**:
  - `components/version1-components/PricingInquiry.tsx` (English)
  - `components/version1-components/PricingInquiry-tr.tsx` (Turkish)
  - `components/version1-components/PricingInquiry-ar.tsx` (Arabic)
- **Changes**:
  - Replaced `weightloss_form` event with GA4 standard `generate_lead` event
  - Added Google Ads conversion tracking (conditional, if configured)
  - Improved type checking: `typeof window.gtag === 'function'`
  - Added unique `transaction_id` for each conversion

### 4. Environment Variables Required

Set these in **Vercel Project Settings → Environment Variables**:

```
NEXT_PUBLIC_GA4_ID=G-3DKEBB7FJD
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX (optional)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXX (optional, required if ADS_ID is set)
NEXT_PUBLIC_ANALYTICS_DEBUG=0 (optional, set to '1' to enable debug in production)
```

**⚠️ IMPORTANT**: After adding/updating environment variables in Vercel, you must trigger a redeploy for changes to take effect.

## Verification Checklist

### In Chrome DevTools Console:
1. ✅ Check if `gtag` is loaded:
   ```javascript
   typeof window.gtag === 'function'
   ```
   Should return: `true`

2. ✅ Check if `dataLayer` exists:
   ```javascript
   Array.isArray(window.dataLayer)
   ```
   Should return: `true`

3. ✅ Check Analytics Debug output (if enabled):
   - Open Console
   - Look for `🔍 Analytics Debug` group
   - Verify all checks pass

### In Chrome DevTools Elements Tab:
1. ✅ Find GA4 script tag:
   ```javascript
   document.querySelector('script[src*="googletagmanager.com/gtag/js"]')
   ```
   Should return: `<script>` element with src containing your GA4 ID

2. ✅ Verify script loads:
   - Check the script tag's `src` attribute
   - Should be: `https://www.googletagmanager.com/gtag/js?id=G-XXXX`

### In Chrome DevTools Network Tab:
1. ✅ Filter by "collect":
   - After page load: Should see requests to `google-analytics.com/g/collect`
   - After form submit: Should see additional `g/collect` requests with event data

2. ✅ Check request details:
   - Click on a `g/collect` request
   - In "Payload" tab, verify:
     - `en` parameter contains event name
     - `ep.method` = `weightloss_form` (for generate_lead events)
     - `ep.send_to` = `AW-XXXX/XXXX` (for conversion events, if Google Ads is configured)

### Testing:
1. ✅ Test in Incognito mode with extensions disabled
2. ✅ Submit a form and verify:
   - Success message appears
   - Network request to `g/collect` is made
   - Request contains `generate_lead` event
   - If Google Ads is configured, also contains `conversion` event

## Where Scripts Are Added

### Google Analytics 4 Script
- **Location**: `app/layout.tsx` (lines 74-91)
- **Loading Strategy**: `afterInteractive` (loads after page becomes interactive)
- **Script URL**: `https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA4_ID}`
- **Initialization**: Inline script that:
  - Initializes `window.dataLayer`
  - Defines `window.gtag` function
  - Configures GA4 with `gtag('config', GA4_ID)`
  - Optionally configures Google Ads if `NEXT_PUBLIC_GOOGLE_ADS_ID` is set

### Google Tag Manager
- **Location**: `app/layout.tsx` (lines 57-72)
- **Container ID**: `GTM-MNR8RB7Z` (hardcoded, separate from GA4)

### Analytics Debug Component
- **Location**: `app/layout.tsx` (line 104)
- **Component**: `components/AnalyticsDebug.tsx`
- **Renders**: Nothing (returns `null`), only logs to console

## Form Submission Tracking

### GA4 Event
```javascript
window.gtag('event', 'generate_lead', {
  method: 'weightloss_form'
})
```

### Google Ads Conversion (if configured)
```javascript
window.gtag('event', 'conversion', {
  send_to: 'AW-XXXX/XXXX',
  value: 1.0,
  currency: 'EUR',
  transaction_id: 'weightloss_TIMESTAMP_RANDOM'
})
```

## Troubleshooting

### No requests to `g/collect`:
1. Check environment variables are set in Vercel
2. Verify redeploy was triggered after adding env vars
3. Check browser console for errors
4. Verify `NEXT_PUBLIC_GA4_ID` is correct format (starts with `G-`)
5. Check if ad blockers are interfering (test in incognito)

### `window.gtag` is undefined:
1. Check if GA4 script loaded (Network tab)
2. Verify `NEXT_PUBLIC_GA4_ID` is set correctly
3. Check browser console for script loading errors
4. Ensure scripts load before form submission

### Events not showing in GA4:
1. Wait 24-48 hours for data to appear (real-time may show immediately)
2. Verify event name is `generate_lead` (not custom event)
3. Check GA4 DebugView for real-time events
4. Verify GA4 property ID matches environment variable

### Google Ads conversions not tracking:
1. Verify `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` are set
2. Check conversion label matches exactly (case-sensitive)
3. Verify conversion action is set up in Google Ads
4. Check Network tab for conversion event requests

