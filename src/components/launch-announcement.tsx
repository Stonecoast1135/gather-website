"use client";

import { useEffect, useRef } from "react";
import { ActionLink, Logo } from "@/components/ui";
import { CloseIcon } from "@/components/site-header";
import { closeDialog, openDialog, trapDialogFocus } from "@/components/dialog";
import {
  canPersistLaunchDismissal,
  hasDismissedLaunchCampaign,
  launchCampaign,
  rememberLaunchDismissal,
  resetLaunchCampaign,
} from "@/lib/launch-campaign";

declare global {
  interface Window {
    resetGatherLaunch?: () => void;
  }
}

export function LaunchAnnouncement({
  allowPreviewReset = false,
}: {
  allowPreviewReset?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const eligibleAtRef = useRef<number | null>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;
    const canReset =
      process.env.NODE_ENV === "development" || allowPreviewReset;
    if (canReset) {
      window.resetGatherLaunch = () => {
        resetLaunchCampaign();
        window.location.reload();
      };
    }
    function tryOpening() {
      if (disposed || !dialog || hasDismissedLaunchCampaign()) return;
      const focused = document.activeElement;
      const isTyping =
        focused instanceof HTMLElement &&
        (focused.matches("input, textarea, select") ||
          focused.isContentEditable);
      const otherDialog = document.querySelector(
        'dialog[open], [role="dialog"][aria-modal="true"]',
      );
      if (document.visibilityState !== "visible" || isTyping || otherDialog) {
        timer = setTimeout(tryOpening, 750);
        return;
      }
      // If dismissal cannot survive reload, skip automatic display instead of
      // repeatedly interrupting a visitor. Never persist "seen" on their behalf.
      if (!canPersistLaunchDismissal()) return;
      openDialog(dialog, dialog.querySelector<HTMLElement>("h2"));
    }
    if (launchCampaign.enabled && !hasDismissedLaunchCampaign()) {
      eligibleAtRef.current ??= Date.now() + launchCampaign.delayMs;
      timer = setTimeout(
        tryOpening,
        Math.max(0, eligibleAtRef.current - Date.now()),
      );
    }
    return () => {
      disposed = true;
      if (timer) clearTimeout(timer);
      if (dialog) closeDialog(dialog);
      if (canReset) delete window.resetGatherLaunch;
    };
  }, [allowPreviewReset]);

  function dismiss() {
    rememberLaunchDismissal();
    if (dialogRef.current) closeDialog(dialogRef.current);
  }
  if (!launchCampaign.enabled) return null;
  return (
    <dialog
      ref={dialogRef}
      className="launch-announcement"
      aria-labelledby="launch-title"
      aria-describedby="launch-description"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onKeyDown={trapDialogFocus}
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="launch-announcement__card">
        <button
          className="icon-button launch-announcement__close"
          type="button"
          aria-label="Close launch announcement"
          onClick={dismiss}
        >
          <CloseIcon />
        </button>
        <Logo className="launch-announcement__logo" />
        <h2 id="launch-title" tabIndex={-1}>
          Gather just
          <br />
          launched!
        </h2>
        <p id="launch-description">
          Student signups are open. Join Gather and get ready to help your
          community.
        </p>
        <ActionLink className="launch-announcement__join" onClick={dismiss} />
        <button
          className="launch-announcement__dismiss"
          type="button"
          onClick={dismiss}
        >
          Keep exploring
        </button>
      </div>
    </dialog>
  );
}
