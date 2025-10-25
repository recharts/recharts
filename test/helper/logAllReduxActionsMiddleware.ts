export function logAllReduxActionsMiddleware(actionsThatLogPayload?: RegExp) {
  return () => (next: any) => (action: any) => {
    console.log('Dispatching action:', action.type, actionsThatLogPayload?.test(action.type) ? action.payload : '');
    return next(action);
  };
}
