import { UserType, UserWithLaptop, upgradeUserLaptop } from "./10_01"

function hairdresser (u: UserType, power: number) {
  const copy = {
    ...u
  }
  copy.hair = u.hair / power

  return copy
}

test ('reference type test', () => {
  let user: UserType = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }

  const awesomeUser = hairdresser(user, 2)

  expect(awesomeUser.hair).toBe(16)
  expect(user.hair).toBe(32)
})

test ('reference type test', () => {
  let user: UserWithLaptop = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const userCopy = upgradeUserLaptop(user, 'Macbook')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(userCopy.laptop.title).toBe('Macbook')
  expect(user.laptop.title).toBe('ZenBook')
})