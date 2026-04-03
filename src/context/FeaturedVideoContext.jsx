import React, { createContext, useContext, useMemo, useState } from "react"

const FeaturedVideoContext = createContext({
  featuredVideoPlaying: false,
  setFeaturedVideoPlaying: () => {},
})

export function FeaturedVideoProvider({ children }) {
  const [featuredVideoPlaying, setFeaturedVideoPlaying] = useState(false)
  const value = useMemo(
    () => ({ featuredVideoPlaying, setFeaturedVideoPlaying }),
    [featuredVideoPlaying]
  )
  return <FeaturedVideoContext.Provider value={value}>{children}</FeaturedVideoContext.Provider>
}

export function useFeaturedVideo() {
  return useContext(FeaturedVideoContext)
}
