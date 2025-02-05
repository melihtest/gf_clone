export type SideBarEvent = CustomEvent<{
  open: boolean | null;
}>;

declare global {
  interface DocumentEventMap {
    onSideBarEvent: SideBarEvent;
  }
}

export default function publishSideBarEvent(open: boolean | null) {
  const event = new CustomEvent("onSideBarEvent", {
    detail: {
      open: open,
    },
  });
  document.dispatchEvent(event);
}

export function subscribe(callback: (e: SideBarEvent) => void) {
  document.addEventListener("onSideBarEvent", callback);
}

export function unsubscribe(callback: (e: SideBarEvent) => void) {
  document.removeEventListener("onSideBarEvent", callback);
}
