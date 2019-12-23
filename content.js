// make sure jQuery is loaded
if (jQuery) {
  // get all tags for the sentry issue
  const tags = {};
  jQuery('.ez9cevw0').each(function(i) {
    const tag = $(this)
      .children('span')
      .first()
      .text();
    const tagValue = $(this)
      .children('span')
      .last()
      .text();
    tags[tag] = tagValue;
  });
  // get the user feedback message
  const m = $('#message')
    .next()
    .children()
    .text();
  // get GitHub issue description
  const description = $('textarea#description').val();
  // assemble the GitHub issue
  const newdescription = `${description}\n\n* page: ${tags.url}\n* site: ${tags.site}\n* section: ${tags.section}\n* helpful: ${tags.helpful}\n\n *This feedback was submitted by a user through the feedback widget.*`;
  // set description
  $('textarea#description')
    .val(newdescription)
    .css({ overflow: 'scroll' });
  // set title
  $('input#title').val(
    `Feedback for ${tags.url}${tags.section ? ` (${tags.section})` : ''}`
  );
} else {
  conosle.log('no jQuery');
}
