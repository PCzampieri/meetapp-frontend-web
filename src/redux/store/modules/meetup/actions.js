export function loadMeetupsRequest() {
  return {
    type: '@meetup/LOAD_MEETUPS_REQUEST',
  };
}

export function loadMeetupsSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function meetupsFailure() {
  return {
    type: '@meetup/MEETUPS_FAILURE',
  };
}

export function loadMeetupIdRequest(id) {
  return {
    type: '@meetup/LOAD_MEETUPID_REQUEST',
    payload: { id },
  };
}

export function loadMeetupIdSuccess(meetup) {
  return {
    type: '@meetup/LOAD_MEETUPID_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function updateMeetupSuccess() {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
  };
}
