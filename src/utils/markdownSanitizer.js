const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html')
const TurndownService = require('turndown')


function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    //1.convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted HTML", convertedHtml)

    //2.sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    console.log("sanitizeHtml", sanitizedHtml)

    //3.Convert the sanitized html back to markdown 
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("sanitizeMarkdown", sanitizedMarkdown)
    return sanitizedMarkdown
}

// const input = `
//  #Hello world

//  ### this is a markdown

//  -something

//  <script>alert("Helooo")</script>
//   [Link](www.google.com)

// `;

// sanitizeMarkdownContent(input);

module.exports = sanitizeMarkdownContent;