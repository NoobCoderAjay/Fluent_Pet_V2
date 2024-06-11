type NamedParams = {
  toggleFunc?: any;
  asyncMutateFunc: any;
  data?: any;
  onSuccessFunc?: any;
  navigation?: any;
} & (
  | { nextScreen?: any; goBack?: never }
  | { goBack?: boolean; nextScreen?: never }
);
export default async function submitWaitNavigate({
  toggleFunc = null,
  asyncMutateFunc,
  data = {},
  onSuccessFunc = null,
  navigation = null,
  nextScreen,
  goBack,
}: NamedParams) {
  if (toggleFunc) {
    toggleFunc(true);
  }

  try {
    await asyncMutateFunc(
      data,
      {
        onSuccess: () => {
          if (onSuccessFunc) {
            onSuccessFunc();
          }
          if (goBack) {
            navigation.goBack();
          } else if (nextScreen) {
            navigation.navigate(nextScreen);
          }
        },
      },
      {
        onError: (error: any) => {
          console.error(error); // log error to Sentry
          return false;
        },
      },
    );
  } finally {
    if (toggleFunc) {
      toggleFunc(false);
    }
  }
}
