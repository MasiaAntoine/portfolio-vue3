export interface PdfGenerationOptions {
  elementId: string
  filename: string
  scale?: number
  useCORS?: boolean
  allowTaint?: boolean
  backgroundColor?: string
  logging?: boolean
  removeContainer?: boolean
  foreignObjectRendering?: boolean
  orientation?: 'portrait' | 'landscape'
  format?: string | number[]
  compress?: boolean
  fontFamily?: string
  onProgress?: (step: string) => void
  onError?: (error: Error) => void
}
