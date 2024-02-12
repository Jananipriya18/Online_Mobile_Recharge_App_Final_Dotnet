import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../models/player';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  player: Player | undefined; // Initialize player as undefined

  constructor(
    public playersService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];
    this.playersService.getPlayer(this.id).subscribe(
      (data: Player) => {
        this.player = data;
      },
      (error) => {
        console.error('Error loading player details:', error);
      }
    );
  }

  // Define the onBackToPlayersList() method
  onBackToPlayersList() {
    // Implement the logic to navigate back to the players list page
    this.router.navigateByUrl('players/list');
  }
}
