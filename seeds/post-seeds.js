const { Post } = require('../models');

const postdata = [
    {
      title: 'Donec posuere metus vitae ipsum.',
      content: 'information',
      user_id: 1
    },
    {
      title: 'Morbi non quam nec dui luctus rutrum.',
      content: 'information',
      user_id: 2
    },
    {
      title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      content: 'information',
      user_id: 3
    },
    {
      title: 'Nunc purus.',
      content: 'information',
      user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
