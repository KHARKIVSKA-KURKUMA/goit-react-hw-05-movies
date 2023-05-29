export function genresDetail(array) {
  return array.map(genre => genre.name).join(', ');
}
