// make sure jQuery is loaded
if (jQuery) {
  // get all tags for the sentry issue
  const tagsEl = $('#tags')
    .next()
    .find('li');
  const tags = Object.keys(tagsEl).reduce((obj, el) => {
    const tag = $(tagsEl[el])
      .children('span')
      .first()
      .text();
    const tagValue = $(tagsEl[el])
      .children('span')
      .last()
      .text();
    obj[tag] = tagValue;
    return obj;
  }, {});
  // get the user feedback message
  const m = $('#message')
    .next()
    .children()
    .text();
  // get GitHub issue description
  const description = $('textarea#description').val();
  // assemble the GitHub issue
  const newdescription = `${description}\n\n* page: ${tags.url}\n* site: ${tags.site}\n* section: ${tags.section}\n* helpful: ${tags.helpful}\n\n *This feedback was submitted by a user through the feedback widget. Please close if this issue is not actionable given the provided details.*`;
  // set description
  $('textarea#description')
    .val(newdescription)
    .css({ overflow: 'scroll' });
} else {
  conosle.log('no jQuery');
}
