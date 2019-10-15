import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { MdAddCircleOutline, MdCameraAlt } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/redux/store/modules/meetup/actions';

import DateTimeInput from '~/components/DateTimeInput';

import { Container, InputFile } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A Descrição é obrigatório'),
  date: Yup.date()
    .required('Selecione uma data e hora')
    .typeError('Selecione uma data e hora'),
  location: Yup.string().required('O local é obrigatório'),
});

export default function MeetupNew() {
  const dispatch = useDispatch();

  const meetup = history.location.state;

  const [file, setFile] = useState(meetup && meetup.banner.id);
  const [preview, setPreview] = useState(meetup && meetup.banner.url);

  async function handleSubmitCreated({ title, description, date, location }) {
    if (!file) {
      toast.info('Selecione um banner');
      return;
    }

    dispatch(
      createMeetupRequest({
        title,
        description,
        date,
        location,
        banner_id: file,
      })
    );
  }

  async function handleSubmitUpdate({ title, description, date, location }) {
    dispatch(
      updateMeetupRequest({
        id: meetup.id,
        title,
        description,
        date,
        location,
        banner_id: file || meetup.banner.id,
      })
    );
  }

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <Form
        initialData={meetup}
        schema={schema}
        onSubmit={meetup ? handleSubmitUpdate : handleSubmitCreated}
      >
        <InputFile htmlFor="banner" name="file">
          <label htmlFor="banner">
            <img src={preview} alt="" />
            {!preview && (
              <div>
                <MdCameraAlt color="rgba(255, 255, 255, 0.3)" size={54} />
                <span>Selecione imagem</span>
              </div>
            )}

            <input
              type="file"
              id="banner"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </InputFile>

        <Input name="title" autoComplete="off" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          className="descriptionInput"
        />
        <DateTimeInput name="date" placeholder="Data do meetup" />

        <Input name="location" autoComplete="off" placeholder="Localização" />

        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
          </div>
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
