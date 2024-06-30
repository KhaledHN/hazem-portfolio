import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hazem Khaled\'s Website',
    short_name: 'Hazem',
    description: 'Scaling things',
    theme_color: '#fff',
    background_color: '#2962FF',
    start_url: '/',
    display: 'browser'.
    'orientation': 'portrait'
  }
}
