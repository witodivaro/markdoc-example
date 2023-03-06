import { OutLink } from '../../components/OutLink';

export const outlink = {
  render: OutLink,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    icon: {
        type: String,
    },
    to: {
        type: String,
    }
  },
};
