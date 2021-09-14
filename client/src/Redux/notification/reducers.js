import Notification from 'rc-notification';
import { SHOW_NOTIFICATION } from './actions';

const notificationState = {}
const key = 'updatable'

export default function notificationReducer(state = notificationState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      Notification.newInstance({}, notification => {
        notification.notice({
          content: 'content'
        });
      });
      return state

    default:
      return state
  }
}
