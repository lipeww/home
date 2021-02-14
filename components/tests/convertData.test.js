'use strict'

import { expect, should } from 'chai'
import convertData from '../convertData'
should()

it("1 - Should be a function", () => {
  expect(convertData).to.be.a('function')
})

it('2 - convertData("25 janeiro 2020 15:54") should return 2020.1', () => {
  const before = convertData("25 janeiro 2020 15:54")
  const after = 2020.1
  expect(before).to.equal(after)
})

it('3 - convertData("20 fevereiro 2020 15:54") should return 2020.1', () => {
  const before = convertData("20 fevereiro 2020 15:54")
  const after = 2020.1
  expect(before).to.equal(after)
})

it('4 - convertData("12 março 2021 15:54") should return 2021.1', () => {
  const before = convertData("12 março 2021 15:54")
  const after = 2021.1
  expect(before).to.equal(after)
})

it('5 - convertData("12 abril 2022 15:54") should return 2022.1', () => {
  const before = convertData("12 abril 2022 15:54")
  const after = 2022.1
  expect(before).to.equal(after)
})

it('6 - convertData("12 Maio 2019 15:54") should return 2019.1', () => {
  const before = convertData("12 Maio 2019 15:54")
  const after = 2019.1
  expect(before).to.equal(after)
})

it('7 - convertData("12 Junho 2018 15:54") should return 2018.1', () => {
  const before = convertData("12 Junho 2018 15:54")
  const after = 2018.1
  expect(before).to.equal(after)
})

it('8 - convertData("12 Julho 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Julho 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('9 - convertData("12 Agosto 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Agosto 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('10 - convertData("12 Setembro 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Setembro 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('11 - convertData("12 Outubro 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Outubro 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('12 - convertData("12 Novembro 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Novembro 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('13 - convertData("12 Dezembro 2018 15:54") should return 2018.2', () => {
  const before = convertData("12 Dezembro 2018 15:54")
  const after = 2018.2
  expect(before).to.equal(after)
})

it('14 - convertData() should return "sem data"', () => {
  const before = convertData()
  const after = "sem data"
  expect(before).to.equal(after)
})

it('15 - convertData("12/12/2020") should return 2020.2', () => {
  const before = convertData("12/12/2020")
  const after = 2020.2
  expect(before).to.equal(after)
})

it('16 - convertData("12/06/2021") should return 2021.1', () => {
  const before = convertData("12/06/2021")
  const after = 2021.1
  expect(before).to.equal(after)
})

it('17 - convertData("12/11/2021") should return 2021.2', () => {
  const before = convertData("12/11/2021")
  const after = 2021.2
  expect(before).to.equal(after)
})

it('18 - convertData("12 marco 2021 15:54") should return 2021.1', () => {
  const before = convertData("12 marco 2021 15:54")
  const after = 2021.1
  expect(before).to.equal(after)
})