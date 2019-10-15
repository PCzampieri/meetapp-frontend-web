import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import history from '~/services/history';

import { loadMeetupsRequest } from '~/redux/store/modules/meetup/actions';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(loadMeetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button" onClick={() => history.push('/meetup')}>
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
          </div>
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} past={meetup.past}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.dateFormated}</span>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
