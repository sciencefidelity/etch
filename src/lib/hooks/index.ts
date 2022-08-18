import type { GetSession } from '@sveltejs/kit'
import type { Writable } from 'svelte/store'
import { getCookieValue } from '$lib/getCookieValue'
import { isTheme } from '../types'

export type SessionData = { theme: 'light' | 'dark' }
export type SessionStore = Writable<SessionData>

const getThemeFromCookie = (cookie: string | null) => {
  const theme = getCookieValue(cookie, 'theme')
  return isTheme(theme) ? theme : null
}

export const getSession: GetSession<undefined, undefined, SessionData> = () => {
  const theme = 'dark'
  return { theme }
}
