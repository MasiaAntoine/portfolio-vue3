import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'
import type { PdfGenerationOptions } from '@/types'

export async function generatePDF(options: PdfGenerationOptions): Promise<void> {
  const {
    elementId,
    filename,
    scale = 4,
    useCORS = true,
    allowTaint = true,
    backgroundColor = '#ffffff',
    logging = false,
    removeContainer = false,
    foreignObjectRendering = false,
    orientation = 'portrait',
    format = 'a4',
    compress = false,
    fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    onProgress,
    onError,
  } = options

  try {
    onProgress?.("Préparation de l'élément...")

    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error(`Élément avec l'ID "${elementId}" non trouvé`)
    }

    onProgress?.('Chargement des polices...')

    // Attendre que toutes les polices soient chargées
    await document.fonts.ready

    // Charger spécifiquement les polices Inter si elles existent
    const fontFaces = Array.from(document.fonts.values())
    const interFonts = fontFaces.filter((font) => font.family.includes('Inter'))
    await Promise.all(interFonts.map((font) => font.load()))

    onProgress?.("Génération de l'image...")

    // Générer le canvas avec html2canvas
    const canvas = await html2canvas(element, {
      scale,
      useCORS,
      allowTaint,
      backgroundColor,
      width: element.scrollWidth,
      height: element.scrollHeight,
      logging,
      removeContainer,
      foreignObjectRendering,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId)
        if (clonedElement) {
          // Retirer les bords arrondis pour le PDF
          ;(clonedElement as HTMLElement).style.borderRadius = '0'
          
          if (fontFamily) {
            ;(clonedElement as HTMLElement).style.fontFamily = fontFamily

            const allElements = clonedElement.querySelectorAll('*')
            allElements.forEach((el: Element) => {
              if ((el as HTMLElement).style) {
                ;(el as HTMLElement).style.fontFamily = fontFamily
              }
            })
          }
        }
      },
    })

    onProgress?.('Création du PDF...')

    // Convertir le canvas en image
    const imgData = canvas.toDataURL('image/png', 1.0)

    // Créer le PDF
    const pdf = new jsPDF({
      orientation,
      unit: 'mm',
      format,
      compress,
    })

    // Calculer les dimensions pour A4
    const imgWidth = orientation === 'portrait' ? 210 : 297
    const imgHeight = orientation === 'portrait' ? 297 : 210

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST')

    onProgress?.('Téléchargement du fichier...')

    // Sauvegarder le PDF
    pdf.save(filename)

    onProgress?.('PDF généré avec succès!')
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error : new Error('Erreur inconnue lors de la génération du PDF')
    onError?.(errorMessage)
    throw errorMessage
  }
}

// Fonction helper pour générer un nom de fichier avec timestamp
export function generatePdfFilename(baseName: string, extension: string = 'pdf'): string {
  const timestamp = new Date().toISOString().split('T')[0]
  return `${baseName}_${timestamp}.${extension}`
}

// Fonction helper pour nettoyer le nom de fichier
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-z0-9]/gi, '_')
    .replace(/_{2,}/g, '_')
    .replace(/^_|_$/g, '')
}
