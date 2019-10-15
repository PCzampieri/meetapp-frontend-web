import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { setHours, setMinutes, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

registerLocale('pt', pt);

export default function DateTimeInput({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current]); // eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  return (
    <Container>
      <ReactDatePicker
        className="bannerInput"
        placeholderText={placeholder}
        autoComplete="off"
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        withPortal
        locale="pt"
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Hora"
        dateFormat="d 'de' MMMM',' 'às' H'h'"
        minDate={new Date()}
        minTime={setHours(setMinutes(new Date(), 0), 7)}
        maxTime={setHours(setMinutes(new Date(), 0), 22)}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DateTimeInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
