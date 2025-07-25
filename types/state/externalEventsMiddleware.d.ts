import { SyntheticEvent } from 'react';
import { CategoricalChartFunc } from '../chart/types';
type ExternalEventActionPayload = {
    reactEvent: SyntheticEvent;
    handler: CategoricalChartFunc | undefined;
};
export declare const externalEventAction: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ExternalEventActionPayload, string>;
export declare const externalEventsMiddleware: import("@reduxjs/toolkit").ListenerMiddlewareInstance<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, import("redux").AnyAction>, unknown>;
export {};
