import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { RootState } from '../../store/reducers';
import { Creators as GlobalCreators } from '../../store/reducers/global';

import Button from '../Button';
import Text from '../Text';

import { ModalMessageStyled, ViewModal } from './styles';

const mapStateToProps = ({ global }: RootState) => ({
  modal: global.getIn(['modal']),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      setModal: GlobalCreators.setModalRequest,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ModalMessage = ({ modal, setModal }: PropsFromRedux) => {
  const onClose = useCallback(() => {
    setModal({ open: false });
  }, [setModal]);

  return (
    <Modal visible={modal.open} onRequestClose={onClose} transparent>
      <ViewModal>
        <ModalMessageStyled>
          <Text>{modal.message}</Text>
          <Button
            width="150px"
            height="48px"
            onPress={onClose}
            textColor="white">
            Ok
          </Button>
        </ModalMessageStyled>
      </ViewModal>
    </Modal>
  );
};

export default connector(ModalMessage);
