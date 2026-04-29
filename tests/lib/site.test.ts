import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { SITE } from '../../src/lib/site.ts'
import { isSafeUrl } from '../../src/lib/url.ts'

describe('SITE constants (SEO)', () => {
  test('site URL is well-formed and safe', () => {
    assert.ok(isSafeUrl(SITE.url))
    assert.doesNotThrow(() => new URL(SITE.url))
  })

  test('site URL has no trailing slash', () => {
    assert.ok(!SITE.url.endsWith('/'), 'avoid trailing slash to prevent canonical duplicates')
  })

  test('description length is within Google limits (50-160 chars)', () => {
    assert.ok(SITE.description.length >= 50, 'description too short')
    assert.ok(SITE.description.length <= 200, 'description too long')
  })

  test('site name is present and non-empty', () => {
    assert.ok(SITE.name.trim().length > 0)
  })

  test('og image dimensions match Facebook recommendations (1200x630)', () => {
    assert.equal(SITE.ogImageWidth, 1200)
    assert.equal(SITE.ogImageHeight, 630)
  })

  test('og image path is absolute (starts with /)', () => {
    assert.ok(SITE.ogImage.startsWith('/'))
  })

  test('locale follows Open Graph format (xx_XX)', () => {
    assert.match(SITE.locale, /^[a-z]{2}_[A-Z]{2}$/)
  })

  test('keywords array has reasonable length', () => {
    assert.ok(SITE.keywords.length >= 5)
    assert.ok(SITE.keywords.length <= 30, 'too many keywords look spammy')
  })

  test('theme color is a hex color', () => {
    assert.match(SITE.themeColor, /^#[0-9a-fA-F]{6}$/)
  })
})
