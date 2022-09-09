const { Post } = require('../models');

const postdata = [
    {
      title: 'Donec posuere metus vitae ipsum.',
      content: 'Lorem ipsum dolor sit amet, feugait elaboraret eu per, ut qui mazim abhorreant expetendis, vix impetus definitiones te. Vis iusto choro sensibus id, cum case tacimates maluisset cu. Magna consulatu duo an. Decore necessitatibus no mea. Ut nec deleniti iudicabit, libris maiestatis cu his, at eos nihil splendide.',
      user_id: 1
    },
    {
      title: 'Morbi non quam nec dui luctus rutrum.',
      content: 'Porro fuisset cotidieque ne est, eam ne stet dolorum perpetua. Pri omnium definiebas neglegentur cu, et sea dolorem petentium urbanitas. Ne cum cetero persius recusabo, ea vim purto animal alienum.',
      user_id: 2
    },
    {
      title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      content: 'Ne has fastidii deseruisse interesset, ei oratio praesent tractatos eum. Habemus principes disputationi ea eum, eu est timeam veritus consetetur, ius cu posse prompta. Legere nonumes forensibus et vim, sit no accumsan salutatus. An sint accusam qui, no mel unum dissentiunt theophrastus, te his aperiam scriptorem.',
      user_id: 3
    },
    {
      title: 'Nunc purus.',
      content: 'Ei affert accusata tincidunt vis. Sed ea augue reprimique. At eos volumus assentior, at est discere consulatu incorrupte. At erat idque atomorum vix, blandit vivendum necessitatibus sed id, has detraxit dissentiunt an. Duo partiendo percipitur ad, ne justo volutpat explicari vel. Cum at falli nonumy timeam, detraxit quaestio postulant ad sea.',
      user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
