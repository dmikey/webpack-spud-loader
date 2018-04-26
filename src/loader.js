import { getOptions } from 'loader-utils';

export default function loader(source) {
  // converts a kraken .properties file into a json export
  const options = getOptions(this);

  // restructure props file to be valid json
  source = '{"' + source;
  source = source.split('\n');
  source = source.join('","');
  source = source.replace(/=/g, '":"');
  source = source + '"}';
  source = source.replace(',""', '');

  // parse file
  source = JSON.parse(source);

  // blow out compound keys, i.e  foo.bar=baz {foo:{bar:'baz'}}
  for(let key in source) {
    if(key.indexOf('.') > -1) {
      key.split('.').reduce((last, namespace, idx, list) =>{
        if(idx == (list.length - 1) ){
          last[namespace] = source[key];
        } else {
          last[namespace] = last[namespace] ? last[namespace] : {};
        }
        return last[namespace];
      }, source);
      delete source[key];
    }
  }

  // return json payload
  return `${ JSON.stringify(source) }`;
};