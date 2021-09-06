"use strict";

// get all tags for the sentry issue
const tags = document
  .getElementById("tags")
  .nextElementSibling.querySelectorAll("li");
const allowedTags = [
  "browser",
  "category",
  "categoryType",
  "device",
  "os",
  "referrer",
  "site",
  "section",
  "url",
];
const textarea = document.getElementById("description");

const meta = Object.keys(tags).reduce((meta, t) => {
  const tagContainer = tags[t].querySelectorAll("span");
  const tag = tagContainer[0].innerText;
  const tagValue = tagContainer[tagContainer.length - 1].innerText;
  if (tag && allowedTags.includes(tag) && tagValue)
    meta += `- ${tag}: ${tagValue}\n`;
  return meta;
}, "");

// Replace fenced code block with a quote
function quoteMe(feedback) {
  let isCodeBlock = false;
  return feedback
    .split("\n")
    .reduce((arr, l) => {
      if (l === "```" && isCodeBlock) {
        isCodeBlock = false;
        return arr;
      }
      if (isCodeBlock) {
        arr.push(`> ${l}`);
        return arr;
      }
      if (l === "```") {
        isCodeBlock = true;
        return arr;
      }
      arr.push(l);
      return arr;
    }, [])
    .join("\n");
}

const description = textarea.value;

// assemble the GitHub issue
textarea.value = `${quoteMe(description)}

${meta}

*This feedback was submitted by a user through the Feedback component. If this issue is not actionable with the details provided, you may close it.*`;
textarea.style.overflow = "scroll";
