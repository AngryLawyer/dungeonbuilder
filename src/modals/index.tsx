import * as React from 'react';
import Modal from 'react-foundation-modal';
import { connect } from 'react-redux';

import { Store } from '../reducers';
import { closeModal } from './actions';
import { CurrentModal } from './types';

interface ConnectedProps {
  currentModal: CurrentModal;
}

interface DispatchProps {
  closeModal: typeof closeModal;
}

type Props = ConnectedProps & DispatchProps;

class Modals extends React.PureComponent<Props> {
  public render() {
    return (
      <Modal
        open={this.props.currentModal !== CurrentModal.CLOSED}
        isModal={true}
        size="medium"
        closeModal={this.props.closeModal}
      >
        Hi there
      </Modal>
    );
  }
}

function mapStateToProps(store: Store): ConnectedProps {
  return {
    currentModal: store.modal.currentModal,
  }
}

export default connect(mapStateToProps, {closeModal})(Modals);
