import * as React from 'react';
import { Menu as FoundationMenu, MenuItem, MenuText, Row, TopBar, TopBarLeft }  from 'react-foundation';
import { connect } from 'react-redux';

import { openModal } from '../actions';

interface DispatchProps {
  openModal: typeof openModal;
}

type Props = DispatchProps;

export class Menu extends React.PureComponent<Props> {
  public render () {
    return (
      <TopBar>
        <Row>
          <TopBarLeft>
            <FoundationMenu>
              <MenuText>
                Dungeonbuilder
              </MenuText>
              <MenuItem>
                <a onClick={this.props.openModal}>
                  New
                </a>
              </MenuItem>
            </FoundationMenu>
          </TopBarLeft>
        </Row>
      </TopBar>
    );
  }
}

export default connect(null, { openModal })(Menu);
