import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { hasMedia, isVideoSource, isImageSource } from '../../src/lib/media.ts'

describe('hasMedia', () => {
  test('detects valid media paths', () => {
    assert.equal(hasMedia('/images/foo.jpg'), true)
    assert.equal(hasMedia('/videos/bar.webm'), true)
  })

  test('rejects placeholders', () => {
    assert.equal(hasMedia('/'), false)
    assert.equal(hasMedia(''), false)
    assert.equal(hasMedia(null), false)
    assert.equal(hasMedia(undefined), false)
    assert.equal(hasMedia('   '), false)
  })
})

describe('isVideoSource', () => {
  test('detects video extensions', () => {
    assert.equal(isVideoSource('/x.webm'), true)
    assert.equal(isVideoSource('/x.mp4'), true)
    assert.equal(isVideoSource('/x.mov'), true)
    assert.equal(isVideoSource('/x.ogv'), true)
  })

  test('case-insensitive', () => {
    assert.equal(isVideoSource('/X.WEBM'), true)
    assert.equal(isVideoSource('/X.Mp4'), true)
  })

  test('rejects non-video', () => {
    assert.equal(isVideoSource('/x.jpg'), false)
    assert.equal(isVideoSource('/x.png'), false)
    assert.equal(isVideoSource('/x.webp'), false)
  })

  test('rejects placeholders', () => {
    assert.equal(isVideoSource('/'), false)
    assert.equal(isVideoSource(''), false)
    assert.equal(isVideoSource(null), false)
  })
})

describe('isImageSource', () => {
  test('returns true for non-video media', () => {
    assert.equal(isImageSource('/x.jpg'), true)
    assert.equal(isImageSource('/x.webp'), true)
  })

  test('returns false for videos', () => {
    assert.equal(isImageSource('/x.webm'), false)
  })

  test('returns false for placeholders', () => {
    assert.equal(isImageSource('/'), false)
    assert.equal(isImageSource(''), false)
  })
})
