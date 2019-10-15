import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  meetup: {
    banner: {},
    user: {},
  },
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;
      case '@meetup/MEETUPS_FAILURE':
        break;
      case '@meetup/LOAD_MEETUPID_SUCCESS':
        draft.meetup = action.payload.meetup;
        break;
      default:
    }
  });
}
