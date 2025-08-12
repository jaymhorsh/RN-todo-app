import { Notifier, NotifierComponents } from 'react-native-notifier';

type AlertType = 'success' | 'error' | 'warn' | 'info';

export const showToast = (type: AlertType, message: string, options: Partial<Parameters<typeof Notifier.showNotification>[0]> = {}) => {
  const { componentProps, ...restOptions } = options;
  Notifier.showNotification({
    title: type === 'error' ? 'Error' : type === 'warn' ? 'Warning' : type === 'info' ? 'Info' : 'Success',
    description: message,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type,
      ...(componentProps || {}),
    },
    ...restOptions,
  });
};

export const showNotification = (
  title: string,
  description?: string,
  options: Partial<Parameters<typeof Notifier.showNotification>[0]> = {},
) => {
  Notifier.showNotification({
    title,
    description,
    Component: NotifierComponents.Notification,
    ...options,
  });
};
