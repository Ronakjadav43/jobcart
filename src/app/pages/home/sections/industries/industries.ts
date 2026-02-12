// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-industries',
//   imports: [],
//   templateUrl: './industries.html',
//   styleUrl: './industries.css',
// })
// export class Industries {

// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndustryCard {
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.html',
   styleUrl: './industries.css',
})
export class Industries {
  industries: IndustryCard[] = [
    {
      id: 'warehousing',
      title: 'Warehousing',
      image: 'https://images.unsplash.com/photo-1587282177267-0a8d3ce61b0d?w=600&h=400&fit=crop',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Fulfillment',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    },
    {
      id: '3pl',
      title: 'Third-Party Logistics (3PL)',
      image: 'https://images.unsplash.com/photo-1600925260368-ae2f83cf8b7f?w=600&h=400&fit=crop',
    },
    {
      id: 'dining',
      title: 'Dining Facilities',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    },
    {
      id: 'stadiums',
      title: 'Stadiums & Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=600&h=400&fit=crop',
    },
    {
      id: 'retail',
      title: 'Retail Operations',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
    },
  ];
}
