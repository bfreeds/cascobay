import { connect } from 'react-redux'
import { clickFeature, getCartodbData } from 'actions'
import Map from 'components/Map'

const mapStateToProps = (state) => {
  return {
    cartodbData: state.cartodbData,
    selectedFeature: state.selectedFeature
  }
}

// Allows us to dispatch actions as component props
  //Like this.onFeatureClick(feature)
const mapDispatchToProps = (dispatch)=> {
  // these dispatch methods become component props that happen to be functions
  return {
    getCartodbData: (username, query) => {
      dispatch(getCartodbData(username, query))
    },
    clickFeature: (feature) => {
      dispatch(clickFeature(feature))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer