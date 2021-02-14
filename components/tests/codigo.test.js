'use strict'

import { expect } from 'chai'
import codigo from '../codigo'

it('Should be a function', () => {
  expect(codigo).to.be.a('function')
})

it('Should return number', () => {
  const before = 'string'
  expect(codigo(before)).to.be.a('number')
})

it('String Medicina should return 1', () => {
  const before = 'Medicina'
  const after = 1
  expect(codigo(before)).to.equal(after)
})

it('String Enfermagem should return 2', () => {
  const before = 'Enfermagem'
  const after = 2
  expect(codigo(before)).to.equal(after)
})

it('String Farmacia should return 5', () => {
  const before = 'Farmacia'
  const after = 5
  expect(codigo(before)).to.equal(after)
})

it('String Fisioterapia should return 6', () => {
  const before = 'Fisioterapia'
  const after = 6
  expect(codigo(before)).to.equal(after)
})

it('String Psicologia should return 10', () => {
  const before = 'Psicologia'
  const after = 10
  expect(codigo(before)).to.equal(after)
})

it('String Odontologia should return 23', () => {
  const before = 'Odontologia'
  const after = 23
  expect(codigo(before)).to.equal(after)
})