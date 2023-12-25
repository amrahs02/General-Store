// YourComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../../actions/languageActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

class YourComponent extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <button
          className="bg-blue-500 rounded-full py-2 px-4 my-4 md:my-0 md:ml-4"
          onClick={this.props.toggleLanguage}
        >
            <FontAwesomeIcon icon={faLanguage} /> {/* Use the FontAwesomeIcon component with the desired icon */}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);
