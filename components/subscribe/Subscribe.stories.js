import NewsletterCard from '@/components/subscribe';

export default {
  title: 'Style Guide/Components/Card/Newsletter',
  component: NewsletterCard
};

const Template = (args) => <NewsletterCard {...args} />;

export const Default = Template.bind({});

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: 'me@udaygaidhane.com'
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  ...Filled.args,
  loading: true
};

export const Valid = Template.bind({});
Valid.args = {
  ...Default.args,
  valid: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  invalid: true
};
