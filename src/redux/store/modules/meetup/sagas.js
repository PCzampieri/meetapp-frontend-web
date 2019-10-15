import { takeLatest, all, put, call } from 'redux-saga/effects';
import { format, isBefore } from 'date-fns';
import { pt } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadMeetupsSuccess,
  loadMeetupIdSuccess,
  meetupsFailure,
  createMeetupSuccess,
  updateMeetupSuccess,
} from './actions';

export function* loadMeetups() {
  try {
    const response = yield call(api.get, 'organizing');

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = response.data.map(meetup => {
      const compareDate = utcToZonedTime(meetup.date, timezone);
      const dateFormated = format(compareDate, "d 'de' MMMM',' 'às' H'h'", {
        locale: pt,
      });

      return { ...meetup, dateFormated };
    });

    yield put(loadMeetupsSuccess(data));
  } catch (err) {
    toast.error('Falha ao carregar meetups');

    yield put(meetupsFailure());
  }
}

export function* loadMeetup({ payload }) {
  try {
    const { data } = yield call(api.get, `meetups/${payload.id}`);

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const compareDate = utcToZonedTime(data.date, timezone);
    const dateFormated = format(compareDate, "d 'de' MMMM',' 'às' H'h'", {
      locale: pt,
    });

    yield put(loadMeetupIdSuccess({ ...data, dateFormated }));
  } catch (error) {
    toast.error('Falha ao carregar meetup');

    yield put(meetupsFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    if (isBefore(payload.meetup.date, new Date())) {
      toast.error('Data e/ou hora inválida. Verifique!');
      return;
    }

    yield call(api.post, `meetups`, { ...payload.meetup });

    yield put(createMeetupSuccess());

    toast.success('Meetup salvo com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    const { status } = err.response;
    if (status === 403) {
      toast.warn('Você já tem meetup agendado neste horário! Verifique!');
      return;
    }

    toast.error('Erro ao salvar o Meetup');

    yield put(meetupsFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    if (isBefore(payload.meetup.date, new Date())) {
      toast.error('Data e/ou hora inválida. Verifique!');
      return;
    }

    yield call(api.put, `meetups/${payload.meetup.id}`, { ...payload.meetup });

    yield put(updateMeetupSuccess());

    toast.success('Meetup alterado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao alterar o Meetup');

    yield put(meetupsFailure());
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetup/LOAD_MEETUPID_REQUEST', loadMeetup),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
