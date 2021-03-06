
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import Icon from './Icon'
import Thumbnail from './Thumbnail'
import SearchForm from './SearchForm'
import Dropzones from './Dropzones'

import FontAwesome from 'react-fontawesome'
import * as mopidyActions from '../services/mopidy/actions'

class Sidebar extends React.Component{

	constructor(props) {
		super(props)
	}

	render(){
		return (
			<aside>
					
				{ this.props.current_track && this.props.current_track.album && this.props.current_track.album.images ? <Thumbnail size="large" images={this.props.current_track.album.images} /> : null }

				<div className="liner">

		        	<SearchForm context="sidebar" />

		        	<nav>

		        		<section>
							<Link activeClassName="active" to={global.baseURL+"queue"}>
								<Icon name="play" className="white" />
								Now Playing
							</Link>
						</section>

						<section>
							<title>Discover</title>
							<Link activeClassName="active" to={global.baseURL+"discover/recommendations"}>
								<Icon name="compass" className="white" />
								Discover
							</Link>
							<Link activeClassName="active" to={global.baseURL+"discover/categories"}>
								<Icon name="grid" className="white" />
								Genre / Mood
							</Link>
							<Link activeClassName="active" to={global.baseURL+"discover/featured"}>
								<Icon name="star" className="white" />
								Featured playlists
							</Link>
							<Link activeClassName="active" to={global.baseURL+"discover/new-releases"}>
								<Icon name="leaf" className="white" />
								New releases
							</Link>
						</section>

						<section>
							<title>My Music</title>
							<Link activeClassName="active" to={global.baseURL+"library/playlists"}>
								<Icon name="playlist" className="white" />
								Playlists
							</Link>
							<Link activeClassName="active" disabled={!this.props.spotify_authorized} to={this.props.spotify_authorized ? global.baseURL+"library/artists" : null}>
								<Icon name="mic" className="white" />
								Artists
							</Link>
							<Link activeClassName="active" disabled={!this.props.spotify_authorized} to={this.props.spotify_authorized ? global.baseURL+"library/albums" : null}>
								<Icon name="cd" className="white" />
								Albums
							</Link>
							<Link activeClassName="active" disabled={!this.props.spotify_authorized} to={this.props.spotify_authorized ? global.baseURL+"library/tracks" : null}>
								<Icon name="music" className="white" />
								Tracks
							</Link>
							<Link activeClassName="active" to={global.baseURL+"library/local"}>
								<Icon name="folder" className="white" />
								Local
							</Link>
						</section>

						<section>
							<Link activeClassName="active" to={global.baseURL+"settings"}>
								<Icon name="cog" className="white" />
								Settings
								{ !this.props.mopidy_connected || !this.props.spotify_connected || !this.props.pusher_connected ? <FontAwesome name="exclamation-triangle" className="red-text pull-right" /> : null }
							</Link>
						</section>

			        </nav>

			    </div>

		       	<Dropzones />

			</aside>
		);
	}
}


/**
 * Export our component
 *
 * We also integrate our global store, using connect()
 **/

const mapStateToProps = (state, ownProps) => {
	return {
		mopidy_connected: state.mopidy.connected,
		pusher_connected: state.pusher.connected,
		spotify_connected: state.spotify.connected,
		spotify_authorized: state.spotify.authorized,
		current_track: state.ui.current_track,
		dragger: state.ui.dragger
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		mopidyActions: bindActionCreators(mopidyActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
