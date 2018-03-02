import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Badge, List } from 'antd';

class Repositories extends Component {
  render() {
    const { repos, user } = this.props;

    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        {
          !!repos.length
          ? (
            <List
              itemLayout="horizontal"
              dataSource={repos}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge count={item.stargazers_count} style={{ backgroundColor: 'cornflowerblue' }}>
                        <Avatar shape="square" icon="star-o" />
                      </Badge>
                    }
                    title={<strong>{item.name}</strong>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          )
          : user
            ? <p>User <strong>{user.login}</strong> has any repository yet.</p>
            : <p>No repositories. Type a valid github user name and info will be shown here.</p>
        }
      </div>

    );
  }
}

Repositories.propTypes = {
  repos: PropTypes.array.isRequired,
  user: PropTypes.shape({ login: PropTypes.string.isRequired })
}

export default connect(
  ({ repos, user }) => ({ repos, user }),
)(Repositories);
