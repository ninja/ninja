import {Layout} from './layout';
import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100vmin'
};

function WelcomeComponent (props) {
  return (
    <Layout>
      <div style={style}>
      {props.components.map(({key, name}) => {
        return <Link key={key} to={`/${key}`}>{name}</Link>;
      })}
      </div>
    </Layout>
  );
}

WelcomeComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

function mapStateToProps (state) {
  return {components: state.components};
}

export const Welcome = connect(mapStateToProps)(WelcomeComponent);
