# Read from public google sheets using JavaScript

A simple drop-in solution to read from publicly accessible google sheets into your website.

## Prerequisited
**For this to work, you MUST have your Google sheet published as a webpage!**

#### Publishing a Google Sheet to the web

1. Click File > Share > Publish to the web
3. Click 'Publish'
4. Copy the link and you're done! Hang on to this link as we will use it later!




## Installation

1. Copy the `google-sheets-reader.js` file so it can be served to your frontend.
2. Include the script in your webpage using the following:
    ```html
    <script src="/google-sheets-reader.js"></script>
    ```
3. Call the function `get_google_sheet()` with the public URL of your Google sheet's webpage. This returns a JS promise with your parsed Google sheet.
4. Voila! You can access the rows and columns using the `getRow()` and `getColumn()` methods.

This tiny project took a lot of inspiration from Rob Kendal's (g-sheets-api)[https://github.com/bpk68/g-sheets-api], so go check that out too! ⭐