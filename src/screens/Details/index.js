import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { toast } from 'react-toastify';

import { loadMeetupIdRequest } from '~/redux/store/modules/meetup/actions';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Aside } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);
  
  const { id } = match.params;

  useEffect(() => {
    dispatch(loadMeetupIdRequest(id));
  }, [dispatch, id]);

  async function handleCancelMeetup(meetuId) {
    try {
      await api.delete(`/meetups/${meetuId}`);

      toast.success('Meetup cancelada com sucesso');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao Cancelar Meetup');
    }
  }

  function handleEditMeetup(data) {
    history.push('/meetup', { ...data });
  }

  const Alert = () => (
    <div style={{ height: 100, fontSize: 16, alignSelf: 'center' }}>
      <strong>Tem certeza que deseja cancelar este Meetup?</strong>
      <br />

      <button
        onClick={() => handleCancelMeetup(meetup.id)}
        style={{
          background: '#f94d6a',
          border: 0,
          borderRadius: 4,
          height: 42,
          width: 150,
          marginTop: 15,
          fontSize: 16,
        }}
        type="button"
      >
        <strong style={{ color: '#fff' }}>SIM! Cancelar!</strong>
      </button>
    </div>
  );

  function handleToggleDelete() {
    toast.info(<Alert />);
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <Aside past={meetup.past}>
          <button type="button" onClick={() => handleEditMeetup(meetup)}>
            <div>
              <MdEdit size={20} color="#FFF" />
            </div>
            Editar
          </button>

          <button type="button" onClick={handleToggleDelete}>
            <div>
              <MdDeleteForever size={20} color="#FFF" />
            </div>
            Cancelar
          </button>
        </Aside>
      </header>

      <main>
        <img src={meetup.banner.url} alt="banner" />

        <p>{meetup.description}</p>
        <br />
        <br />
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para{' '}
          {meetup.user.email}.
        </p>

        <div>
          <span>
            <MdEvent size={20} color="rgba(255, 255, 255, 0.6)" />
            {meetup.dateFormated}
          </span>
          <span>
            <MdPlace size={20} color="rgba(255, 255, 255, 0.6)" />
            {meetup.location}
          </span>
        </div>
      </main>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }),
  }).isRequired,
};
