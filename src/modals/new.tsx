import * as React from 'react';
import { connect } from 'react-redux';
import { Field, Form, FormProps, reduxForm } from 'redux-form';

import { newMap } from '../map/actions';
import { closeModal } from './actions';

// import { Store } from '../reducers';

interface DispatchProps {
  closeModal: typeof closeModal;
  newMap: typeof newMap;
}

type Props = FormProps<{}, {}, {}> & DispatchProps;

class NewModal extends React.PureComponent<Props> {
  public render() {
    const { handleSubmit } = this.props as any;
    return (
      <Form onSubmit={handleSubmit(this.newMap)}>
        <label htmlFor="width">Width</label>
        <Field name="width" component="input" type="number"/>
        <label htmlFor="height">Height</label>
        <Field name="height" component="input" type="number"/>
        <button type="submit">New</button>
      </Form>
    );
  }

  private newMap = (data: any) => {
    this.props.newMap(parseInt(data.width, 10) || 1, parseInt(data.height, 10) || 1);
    this.props.closeModal();
  }
}

const AsForm = reduxForm({
  form: 'newModal',
})(NewModal as any);
export default connect(null, { closeModal, newMap })(AsForm);
