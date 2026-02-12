import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Solution {
  title: string;
  description: string;
  icon: 'short' | 'long' | 'permanent';
}

@Component({
  selector: 'app-solutions',
  imports: [CommonModule],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
solutions: Solution[] = [
    {
      icon: 'short',
      title: 'Short-term temporary workers',
      description: 'For one-off events and seasonal demand spikes. AI optimization for immediate productivity.',
    },
    {
      icon: 'long',
      title: 'Long-term temporary workers',
      description: 'For longer-term and project-based work. AI matching for consistent reliability.',
    },
    {
      icon: 'permanent',
      title: 'Permanent workers to join your team',
      description: 'For hiring your next permanent team member. AI interviews for the perfect fit.',
    },
  ];
}



