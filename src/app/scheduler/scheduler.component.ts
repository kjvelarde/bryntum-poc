/**
 * App component script
 */
 import { AfterViewInit, Component, ViewChild } from '@angular/core';
 import { BryntumResourceHistogramComponent, BryntumSchedulerProComponent } from '@bryntum/schedulerpro-angular';
 import { ResourceHistogram, SchedulerPro } from '@bryntum/schedulerpro/schedulerpro.lite.umd.js';
 
 import { histogramConfig, schedulerProConfig } from '../app.config';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements AfterViewInit {
  schedulerProConfig = schedulerProConfig;
  histogramConfig = histogramConfig;

  schedulerPro: SchedulerPro;
  resourceHistogram: ResourceHistogram;

  @ViewChild(BryntumSchedulerProComponent) schedulerProComponent: BryntumSchedulerProComponent;
  @ViewChild(BryntumResourceHistogramComponent) resourceHistogramComponent: BryntumResourceHistogramComponent;

  ngAfterViewInit(): void {
      this.schedulerPro = this.schedulerProComponent.instance;
      this.resourceHistogram = this.resourceHistogramComponent.instance;
      this.resourceHistogram.addPartner(this.schedulerPro);
  }

  /**
   * handles clicks on toolbar checkboxes
   */
  onCheckboxAction({ source }, option: string): void {
      this.resourceHistogram[option] = source.checked;
  }

  /**
   * Handles zoom-in click event
   */
  onZoomIn(): void {
      this.schedulerPro.zoomIn();
  }

  /**
   * Handles zoom-out click event
   */
  onZoomOut(): void {
      this.schedulerPro.zoomOut();
  }


}
