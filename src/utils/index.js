import { Loading, QSpinnerFacebook, Notify } from "quasar";

export const showLoading = () => {
  if (!Loading.isActive) {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "white",
      message: "Fetching Data. Please wait.",
    });
  }
};
export const hideLoading = () => {
  if (Loading.isActive) {
    Loading.hide();
  }
};

export const showErrorNotification = (err) => {
  Notify.create({
    progress: true,
    message: `${err}`,
    color: "red",
    textColor: "white",
    position: "top",
    icon: "warning",
    actions: [{
      icon: "close", color: "white", handler: () => {
      }
    }],
  });
};
