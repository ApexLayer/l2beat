import React, { SVGAttributes } from 'react'

import { Icon } from '../Icon'

export function TriangleWarningIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Icon
      aria-label="Sun icon"
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="yellow"
      {...props}
    >
      <path d="M36.5 36.5H4.5C3.783 36.5 3.123 36.117 2.766 35.496C2.41 34.875 2.412 34.111 2.773 33.492L18.773 5.492C19.131 4.878 19.789 4.5 20.5 4.5C21.211 4.5 21.869 4.878 22.228 5.492L38.228 33.492C38.589 34.111 38.591 34.875 38.235 35.496C37.879 36.117 37.216 36.5 36.5 36.5Z" />
      <path
        d="M18.5 30.642C18.5 30.373 18.547 30.127 18.643 29.896C18.737 29.668 18.872 29.47 19.046 29.304C19.217 29.136 19.428 29.005 19.67 28.911C19.914 28.819 20.188 28.77 20.494 28.77C20.8 28.77 21.076 28.819 21.322 28.911C21.572 29.005 21.783 29.136 21.954 29.304C22.129 29.47 22.264 29.668 22.357 29.896C22.453 30.127 22.5 30.373 22.5 30.642C22.5 30.912 22.453 31.158 22.357 31.382C22.263 31.607 22.128 31.801 21.954 31.97C21.783 32.136 21.572 32.266 21.322 32.362C21.076 32.454 20.8 32.5 20.494 32.5C20.187 32.5 19.914 32.454 19.67 32.361C19.428 32.265 19.217 32.135 19.046 31.969C18.871 31.8 18.736 31.606 18.643 31.381C18.547 31.157 18.5 30.911 18.5 30.642ZM21.98 26.5H19.007L18.586 14.5H22.4L21.98 26.5Z"
        fill="#5D4037"
      />
    </Icon>
  )
}