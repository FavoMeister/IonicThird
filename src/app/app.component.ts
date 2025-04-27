import { Component } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(private platform: Platform) {}

  async ngOnInit() {
    // Wait until the app is ready
    if (this.platform) {
      await this.platform.ready();
    }

    // Locck Orientation
    await ScreenOrientation.lock({ orientation: 'portrait' });
    
    // Optional: listen changes
    ScreenOrientation.addListener('screenOrientationChange', (data) => {
      console.log('Orientación actual:', data.type);
    });
  }
}
