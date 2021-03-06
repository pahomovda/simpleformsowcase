import { createActionTypes } from 'utils';

export const ActionTypes = createActionTypes('pages/registration/', {
  NAME_CHANGED: null,
  SURNAME_CHANGED: null,
  PROFESSION_CHANGED: null,
  PHONE_CHANGED: null,
  PROFESSION_HINT_SET_STATE: null,
  PHONE_HINT_SET_STATE: null,
  NEW_PHONE_COUNTRY_SELECTED: null
});

export const Actions = {
  changeName: (text) => ({
    type: ActionTypes.NAME_CHANGED,
    playload: text
  }),

  changeSurname: (text) => ({
    type: ActionTypes.SURNAME_CHANGED,
    playload: text
  }),

  changeProfession: (text) => ({
    type: ActionTypes.PROFESSION_CHANGED,
    playload: text
  }),

  changePhone: (text) => ({
    type: ActionTypes.PHONE_CHANGED,
    playload: text
  }),

  toggleProfessionHint: (isopen) => ({
    type: ActionTypes.PROFESSION_HINT_SET_STATE,
    playload: isopen
  }),

  togglePhoneHint: (isopen) => ({
    type: ActionTypes.PHONE_HINT_SET_STATE,
    playload: isopen
  }),

  selectNewPhoneCountry: (code) => ({
    type: ActionTypes.NEW_PHONE_COUNTRY_SELECTED,
    playload: code
  })
};
