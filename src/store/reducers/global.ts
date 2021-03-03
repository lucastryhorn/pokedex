import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { AnyAction } from 'redux';

import { Modal } from '../../commom-types';

type GetGlobalTypes = {
  setModalRequest(params: Modal): AnyAction;
};

export type InitalGlobalTypes = {
  modal: Modal;
};

export const INITIAL_STATE: ImmutableObject<InitalGlobalTypes> = Immutable({
  modal: { open: false },
});

const setModalRequest = (state = INITIAL_STATE, { params }: AnyAction) =>
  state.merge({ modal: params });

export const { Types, Creators } = createActions<AnyAction, GetGlobalTypes>({
  setModalRequest: ['params'],
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_MODAL_REQUEST]: setModalRequest,
});
