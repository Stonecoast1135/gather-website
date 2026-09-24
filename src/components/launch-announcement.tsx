"use client";

import { useEffect, useRef } from "react";
import { ActionLink, Logo } from "@/components/ui";
import { CloseIcon } from "@/components/site-header";
import { closeDialog, openDialog, trapDialogFocus } from "@/components/dialog";
import {
  hasSeenLaunchCampaign,
  launchCampaign,
  rememberLaunchCampaign,
  resetLaunchCampaign,
} from "@/lib/launch-campaign";

declare global {
  interface Window {
    resetGatherLaunch?: () => void;
  }
}

export function LaunchAnnouncement() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;
    if (process.env.NODE_ENV === "development") {
      window.resetGatherLaunch = () => {
        resetLaunchCampaign();
        window.location.reload();
      };
    }
    function tryOpening() {
      if (disposed || !dialog || hasSeenLaunchCampaign()) return;
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
      // Persist before display to prevent reload loops. If both stores are denied,
      // skip the automatic announcement; the page's signup links remain available.
      if (!rememberLaunchCampaign("seen")) return;
      openDialog(dialog, dialog.querySelector<HTMLElement>("h2"));
    }
    if (launchCampaign.enabled && !hasSeenLaunchCampaign())
      timer = setTimeout(tryOpening, launchCampaign.delayMs);
    return () => {
      disposed = true;
      if (timer) clearTimeout(timer);
      if (dialog) closeDialog(dialog);
      if (process.env.NODE_ENV === "development")
        delete window.resetGatherLaunch;
    };
  }, []);

  function dismiss() {
    rememberLaunchCampaign();
    if (dialogRef.current) closeDialog(dialogRef.current);
  }
  if (!launchCampaign.enabled) return null;
  return (
    <dialog
      ref={dialogRef}
      className="launch-announcement"
      aria-labelledby="launch-title"
      aria-describedby="launch-description"
      onClose={() => rememberLaunchCampaign()}
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
