
/**
 * Actions and Action Creators
 **/

export function setPort( port ){
	return {
		type: 'PUSHER_SET_PORT',
		port: port
	}
}

export function setUsername( username ){
	return {
		type: 'PUSHER_SET_USERNAME',
		username: username
	}
}

export function connect(){
	return {
		type: 'PUSHER_CONNECT'
	}
}

export function disconnect(){
	return {
		type: 'PUSHER_DISCONNECT'
	}
}

export function restartMopidy(){
	return {
		type: 'PUSHER_INSTRUCT',
		data: {
			action: 'restart'
		}
	}
}

export function startUpgrade(){
	return {
		type: 'START_UPGRADE'
	}
}

export function getConnections(){
	return {
		type: 'GET_CONNECTIONS'
	}
}

export function instruct( data = null ){
	return {
		type: 'PUSHER_INSTRUCT',
		data: data
	}
}

export function sendAuthorization( recipient_connectionid, authorization, me ){
	return {
		type: 'PUSHER_SEND_AUTHORIZATION',
		recipient_connectionid: recipient_connectionid,
		authorization: authorization,
		me: me
	}
}

export function startRadio( uris ){
	return {
		type: 'START_RADIO',
		uris: uris
	}
}

export function stopRadio(){
	return {
		type: 'STOP_RADIO'
	}
}

export function debug( data = null ){
	return {
		type: 'PUSHER_DEBUG',
		data: data
	}
}

export function getQueueMetadata(){
	return {
		type: 'PUSHER_GET_QUEUE_METADATA'
	}
}

export function addQueueMetadata( tlids = [], from_uri = null ){
	return {
		type: 'PUSHER_ADD_QUEUE_METADATA',
		tlids: tlids,
		from_uri: from_uri
	}
}