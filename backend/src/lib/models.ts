import _ from 'lodash';
export const models = _.times(100, (i) => ({
  nick: `model_${i + 1}`,
  name: `Model ${i + 1}`,
  description: `description ${i + 1}`,
  text: _.times(100, (j) => `<p>Text paragraph ${j + 1} of model:${i + 1} </p>`).join(''),
}));
