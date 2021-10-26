import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => {
    return (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    );
  });

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// Here we mapping the redux state to a prop in this component to have access to it
const mapStateToProps = (state) => ({
  alerts: state.alert, // state.{Whatever we want from the alert reducer}
});

export default connect(mapStateToProps)(Alert);
