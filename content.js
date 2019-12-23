//i check to make sure jQuery is loaded
if (jQuery) {
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

  const m = $('#message')
    .next()
    .children()
    .text();

  const issue = `* url: ${tags.url}\n* site: ${tags.site}\n* section: ${tags.section}\n* helpful: ${tags.helpful}\n`;
  console.log(issue);
} else {
  alert('no jq');
}
