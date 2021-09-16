import { notification } from "antd";

const openNotification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
  });
};

export default openNotification;
