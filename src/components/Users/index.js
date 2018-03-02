import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Col, Divider, Row } from 'antd';

class Users extends Component {
  render() {
    const { user } = this.props;

    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        {
          user 
          ? (
            <Row gutter={16}>
              <Col sm={10}>
                <Card
                  cover={<img alt="avatar" src={user.avatar_url} />}
                >
                  <Card.Meta
                    title={user.name}
                    description={user.location}
                  />
                </Card>
              </Col>
              <Col sm={14} className="gutter-row">
                {
                  user.bio &&
                    <div>
                      <Divider>Biography</Divider>
                      <p>{user.bio}</p>
                    </div>
                }
                <Divider />
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
              </Col>
            </Row>
          )
          : <p>No user info to be shown. Type a valid github user name and info will be shown here.</p>
        }
      </div>
    )
  }
}

Users.propTypes = {
  user: PropTypes.shape({
    bio: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    name: PropTypes.string 
  })
}

export default connect(
  ({ user }) => ({ user })
)(Users);