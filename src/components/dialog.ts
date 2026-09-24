import type { KeyboardEvent } from "react";

const openDialogs = new WeakMap<HTMLDialogElement, () => void>();
let scrollLocks = 0;
let originalOverflow = "";

/** Native modal dialogs supply background inertness; this also locks page scrolling. */
export function openDialog(
  dialog: HTMLDialogElement,
  firstFocus?: HTMLElement | null,
) {
  if (dialog.open) return false;
  const previousFocus =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
  dialog.showModal();
  if (scrollLocks === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  scrollLocks += 1;
  const restore = () => {
    if (!openDialogs.has(dialog)) return;
    openDialogs.delete(dialog);
    dialog.removeEventListener("close", restore);
    scrollLocks = Math.max(0, scrollLocks - 1);
    if (scrollLocks === 0) document.body.style.overflow = originalOverflow;
    if (previousFocus?.isConnected)
      previousFocus.focus({ preventScroll: true });
    document.dispatchEvent(new Event("gather:dialogchange"));
  };
  openDialogs.set(dialog, restore);
  dialog.addEventListener("close", restore);
  firstFocus?.focus({ preventScroll: true });
  document.dispatchEvent(new Event("gather:dialogchange"));
  return true;
}

export function closeDialog(dialog: HTMLDialogElement) {
  if (dialog.open) dialog.close();
  openDialogs.get(dialog)?.();
}

/** Keep Tab within the native dialog, including when initial focus is on its heading. */
export function trapDialogFocus(event: KeyboardEvent<HTMLDialogElement>) {
  if (event.key !== "Tab") return;
  // Traverse explicitly: WebKit's default keyboard setting can skip anchors,
  // otherwise moving focus outside the dialog before either endpoint is reached.
  event.preventDefault();
  const focusable = Array.from(
    event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hidden && element.getClientRects().length > 0);
  if (!focusable.length) return;
  const activeIndex = focusable.indexOf(document.activeElement as HTMLElement);
  const nextIndex =
    activeIndex === -1
      ? event.shiftKey
        ? focusable.length - 1
        : 0
      : (activeIndex + (event.shiftKey ? -1 : 1) + focusable.length) %
        focusable.length;
  focusable[nextIndex].focus();
}
