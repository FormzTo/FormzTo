let apiKey;
let spamPrevention;

function config(key, spamName) {
  apiKey = key;
  spamPrevention = spamName
}

function url(formName) {
    const root = `https://api.formzto.xyz/v1/${apiKey}/${formName}`;
    return (spamPrevention) ? `${root}/__spm=${spamPrevention}` : root;
}

function submit(formName, params) {
  return fetch(url(formName), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
}

export default {
  config,
  submit
};