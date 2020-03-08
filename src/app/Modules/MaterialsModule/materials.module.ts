import { NgModule } from "@angular/core";
import {
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule
} from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatBadgeModule } from "@angular/material/badge";
const Materials = [
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatBadgeModule
];

@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialsModule {}
