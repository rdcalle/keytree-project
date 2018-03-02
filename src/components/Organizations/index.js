import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, List } from 'antd';

class Organizations extends Component {
  render() {
    const { orgs, user } = this.props;

    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        {
          !!orgs.length
          ? (
            <List
              itemLayout="horizontal"
              dataSource={orgs}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar_url} />}
                    title={item.login}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          )
          : user
            ? <p>User <strong>{user.login}</strong> does not belong to any organization.</p>
            : <p>No repositories. Type a valid github user name and info will be shown here.</p>
        }
      </div>
    );
  }
}

Organizations.propTypes = {
  orgs: PropTypes.array.isRequired,
  user: PropTypes.shape({ login: PropTypes.string.isRequired })
}


export default connect(
  ({ orgs, user }) => ({ orgs, user })
)(Organizations);
