import {
  forward,
  createEvent,
  createStore,
  createEffect,
  PageContext,
} from "effector-next";

export const pageLoaded = createEvent<PageContext>();
export const buttonClicked = createEvent();

const effect = createEffect({
  handler(value: any) {
    return Promise.resolve({ value });
  },
});

export const $data = createStore(null);

// @ts-ignore
$data.on(effect.done, (_, { result }) => result);

forward({
  from: pageLoaded.map(() => "value-from-server"),
  to: effect,
});

forward({
  from: buttonClicked.map(() => "value-from-client"),
  to: effect,
});
