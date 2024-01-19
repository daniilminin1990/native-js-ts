export type UserType = {
  name: string,
  hair: number,
  address: {title: string}
}

export type LaptopType = {
  title: string
}

export type UserWithLaptop = UserType & {
  laptop: LaptopType
}


export function upgradeUserLaptop (u: UserWithLaptop, laptop: string) {
  return {
    ...u,
    laptop: {
      ...u.laptop,
      title: laptop
    }
  }
}