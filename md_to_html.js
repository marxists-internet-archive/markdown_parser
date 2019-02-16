let fs = require('fs');

/* npm packages */
let handlebars = require('handlebars');
let md = require('markdown-it')();
let pretty = require('pretty');


/* load json metadata (object) */
let metadata = require('./content/metadata.json')



/* load content (string) */
let markdownFile = fs.readFileSync('./content/book.md', 'utf8');


/* load html template to string (string) */
let template = fs.readFileSync('./templates/template.html', 'utf8');


let md_to_html = md.render(markdownFile);

let document = {};
document = metadata;
/* add generated html content to the book */
document["book"]["content"] = md_to_html;


/* compile template */
let compiledTemplate = handlebars.compile(template);
/* insert content into the template */
let result =  pretty(compiledTemplate(document));



fs.writeFileSync('result.html', result); 

