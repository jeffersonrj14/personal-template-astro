export default function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
