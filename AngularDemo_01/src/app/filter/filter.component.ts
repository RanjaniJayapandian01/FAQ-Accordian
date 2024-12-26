import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('dropdown-options')
  options : any[] =[];  // Full list of options
  isOpen = false;  // Dropdown open/close state
  selectedItems: string[] = [];  // Array to store selected items
  selectedOptions: { [key: string]: boolean } = {};  // Tracks selected options dynamically
  filteredOptions: any=this.options;// Options filtered based on search term  
  searchTerm: string = '';  // Search term for filtering
  @Input() FilterTerm: string ='';
  constructor() {    
  }
  @Output()
  newItemEvent = new EventEmitter<any>();
  EmitFilteredPlantType(value : string[] ){
    console.log(value);
    this.newItemEvent.emit(value);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.filteredOptions = this.options;  // Update filtered options when input changes
      }
  }
  // Toggle dropdown open/close
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  // Handle option selection
  onSelectionChange(option: string, event: any) {
    if (event.target.checked) {
      this.selectedItems.push(option);  // Add item to selected items
    } else {
      this.selectedItems = this.selectedItems.filter(item => item !== option);  // Remove item if unchecked
    }
    this.EmitFilteredPlantType(this.selectedItems);
  }
  filterOptions() {
    this.filteredOptions = this.options.filter(option =>option.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  // Toggle select all/deselect all
  selectAllToggle(event: any) {
    if (event.target.checked) {
      this.selectAllFiltered();
    } else {
      this.deselectAllFiltered();
    }
  }
   // Select all filtered options
   selectAllFiltered() {
    this.filteredOptions.forEach(option => {
      if (!this.selectedItems.includes(option)) {
        this.selectedItems.push(option);
      }
      this.selectedOptions[option] = true;
    });
    this.EmitFilteredPlantType(this.selectedItems);
  }
  // Deselect all filtered options
  deselectAllFiltered() {
    this.filteredOptions.forEach(option => {      this.selectedItems = this.selectedItems.filter(item => item !== option); this.selectedOptions[option] = false;
    });
    this.EmitFilteredPlantType(this.selectedItems);
  }
    // Close dropdown if clicked outside
    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        this.isOpen = false;  // Close the dropdown if clicking outside
      }
    }
  







    

}
