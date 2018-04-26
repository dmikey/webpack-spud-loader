import { getOptions } from 'loader-utils';
import spud from 'spud';

export default function loader(source) {
  // converts a kraken .properties file into a json export
  const options = getOptions(this);
  let ret = {};

  try {
    ret = spud.parse(source);
  } catch(e) {
    console.log(e);
  }

  // return json payload
  return `${ JSON.stringify(ret) }`;
};