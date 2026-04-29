import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { isSafeUrl, sanitizeUrl } from '../../src/lib/url.ts'

describe('isSafeUrl', () => {
  test('accepts http/https', () => {
    assert.equal(isSafeUrl('https://example.com'), true)
    assert.equal(isSafeUrl('http://example.com'), true)
  })

  test('accepts mailto and tel', () => {
    assert.equal(isSafeUrl('mailto:foo@bar.com'), true)
    assert.equal(isSafeUrl('tel:+5583999614629'), true)
  })

  test('accepts hash and absolute path', () => {
    assert.equal(isSafeUrl('#about'), true)
    assert.equal(isSafeUrl('/projects'), true)
  })

  test('rejects javascript: protocol (XSS vector)', () => {
    assert.equal(isSafeUrl('javascript:alert(1)'), false)
    assert.equal(isSafeUrl('JAVASCRIPT:alert(1)'), false)
    assert.equal(isSafeUrl('  javascript:alert(1)'), false)
  })

  test('rejects data: protocol (XSS vector)', () => {
    assert.equal(isSafeUrl('data:text/html,<script>alert(1)</script>'), false)
    assert.equal(isSafeUrl('DATA:text/html,foo'), false)
  })

  test('rejects vbscript: protocol', () => {
    assert.equal(isSafeUrl('vbscript:msgbox(1)'), false)
  })

  test('rejects file: protocol', () => {
    assert.equal(isSafeUrl('file:///etc/passwd'), false)
  })

  test('rejects null/undefined/empty', () => {
    assert.equal(isSafeUrl(null), false)
    assert.equal(isSafeUrl(undefined), false)
    assert.equal(isSafeUrl(''), false)
    assert.equal(isSafeUrl('   '), false)
  })

  test('rejects malformed URLs', () => {
    assert.equal(isSafeUrl('http://'), false)
    assert.equal(isSafeUrl('not a url'), false)
  })

  test('rejects protocol-relative URLs', () => {
    assert.equal(isSafeUrl('//evil.com/javascript:alert(1)'), false)
  })
})

describe('sanitizeUrl', () => {
  test('returns the url when safe', () => {
    assert.equal(sanitizeUrl('https://example.com'), 'https://example.com')
  })

  test('returns fallback when unsafe', () => {
    assert.equal(sanitizeUrl('javascript:alert(1)'), '#')
    assert.equal(sanitizeUrl('data:text/html,foo'), '#')
  })

  test('returns custom fallback when provided', () => {
    assert.equal(sanitizeUrl('javascript:x', '/safe'), '/safe')
  })

  test('returns fallback for null/undefined', () => {
    assert.equal(sanitizeUrl(null), '#')
    assert.equal(sanitizeUrl(undefined), '#')
  })

  test('trims whitespace from safe urls', () => {
    assert.equal(sanitizeUrl('  https://example.com  '), 'https://example.com')
  })
})
