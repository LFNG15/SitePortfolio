import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import {
  CONTACT,
  buildWhatsAppUrl,
  buildProjectInterestMessage,
  buildMailtoUrl,
} from '../../src/lib/contact.ts'

describe('CONTACT constants', () => {
  test('phone is in E.164 format (digits only, country code)', () => {
    assert.match(CONTACT.phoneE164, /^\d{12,13}$/)
    assert.ok(CONTACT.phoneE164.startsWith('55'))
  })

  test('email is well-formed', () => {
    assert.match(CONTACT.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  test('display phone has formatting', () => {
    assert.ok(CONTACT.phoneDisplay.includes('-'))
  })
})

describe('buildWhatsAppUrl', () => {
  test('returns base URL when no message', () => {
    assert.equal(buildWhatsAppUrl(), `https://wa.me/${CONTACT.phoneE164}`)
    assert.equal(buildWhatsAppUrl(''), `https://wa.me/${CONTACT.phoneE164}`)
    assert.equal(buildWhatsAppUrl('   '), `https://wa.me/${CONTACT.phoneE164}`)
  })

  test('encodes message safely', () => {
    const url = buildWhatsAppUrl('Olá, mundo!')
    assert.ok(url.includes('?text='))
    assert.ok(url.includes('Ol%C3%A1'))
  })

  test('escapes special characters that could break the URL', () => {
    const url = buildWhatsAppUrl('a&b=c#d')
    const params = new URL(url).searchParams
    assert.equal(params.get('text'), 'a&b=c#d')
  })

  test('escapes potential injection payload', () => {
    const url = buildWhatsAppUrl('"><script>alert(1)</script>')
    assert.ok(!url.includes('<script>'))
    assert.ok(url.includes('%3Cscript%3E'))
  })
})

describe('buildProjectInterestMessage', () => {
  test('produces a stable greeting', () => {
    assert.equal(
      buildProjectInterestMessage('Desenvolvimento Mobile'),
      'Olá, estou interessado(a) em Projeto do Desenvolvimento Mobile'
    )
  })

  test('trims category whitespace', () => {
    assert.equal(
      buildProjectInterestMessage('  Posters  '),
      'Olá, estou interessado(a) em Projeto do Posters'
    )
  })
})

describe('buildMailtoUrl', () => {
  test('returns mailto: with email', () => {
    assert.equal(buildMailtoUrl(), `mailto:${CONTACT.email}`)
  })

  test('appends encoded subject', () => {
    const url = buildMailtoUrl('Orçamento de site')
    assert.ok(url.startsWith(`mailto:${CONTACT.email}?subject=`))
    assert.ok(url.includes('Or%C3%A7amento'))
  })
})
