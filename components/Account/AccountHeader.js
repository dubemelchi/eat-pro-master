import { Header, Icon, Segment, Label } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment secondary inverted color='yellow'>
      <Label
        color='red'
        size='large'
        ribbon
        style={{ textTransform: 'capitalize' }}
        content={role}
      />
      <Header inverted textAlign='center' as='h1' icon>
        <Icon name='user' />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
