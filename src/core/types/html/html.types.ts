import { type DetailedHTMLProps, type HTMLAttributes, type SVGAttributes, type VideoHTMLAttributes } from 'react'

type IDivElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type ISvgElementProps = DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>

type IVideoElementProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

export type { IVideoElementProps, IDivElementProps, ISvgElementProps }
