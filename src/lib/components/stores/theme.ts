import { browser } from '$app/env'
import { session } from '$app/stores'
import type { SessionStore } from '../../hooks'
import { derived } from 'svelte/store'

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const theme = derived<SessionStore, Theme>(session, ($session, set) => {
  if ($session.theme) {
    set($session.theme)
  } else if (browser) {
    set(window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light)
  }
})
