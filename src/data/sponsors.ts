export interface SponsorTier {
  level: string
  sponsors: string[]
}

export const tiers: SponsorTier[] = [
  { level: 'Platinum', sponsors: ['Grace Foundation', 'Emmanuel Ministries'] },
  { level: 'Gold', sponsors: ['Bethel Community Church', 'Indian Christian Network', 'Faith & Hope Trust'] },
  { level: 'Silver', sponsors: ['Austin Indian Fellowship', 'Cornerstone Publishers', 'Agape Foods', 'Kingdom Builders Inc.'] },
]
