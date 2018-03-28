import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../../service/pet.service';
import { SelectItem } from 'primeng/api';
declare var jquery: any;
declare var $: any;

@Component({
	selector: 'app-addpet',
	templateUrl: './addpet.component.html',
	styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

	pet: any = {};
	petGender: SelectItem[];

	constructor(
		private router: Router,
		private petService: PetService
	) {
		this.petGender = [
			{
				label: 'Unknow', value: null
			},
			{
				label: 'Male', value: 'Male'
			},
			{
				label: 'Female', value: 'Female'
			}
		]
	}

	ngOnInit() {
		$('select').material_select();
	}

	onSubmit() {
		if (!this.pet.type) {
			this.pet.type = null;
		}
		if (!this.pet.breed) {
			this.pet.breed = null;
		}
		if (!this.pet.ageYear) {
			this.pet.ageYear = null;
		}
		if (!this.pet.ageMonth) {
			this.pet.ageMonth = null;
		}
		if (!this.pet.color) {
			this.pet.color = null;
		}
		if (!this.pet.gender) {
			this.pet.gender = null;
		}
		this.petService.createPet(this.pet).subscribe(
			resp => {
				if (resp.status === 201) {
					this.router.navigate(['/petlist']);
				}
			},
			err => {
				localStorage.clear();
				this.router.navigate(['/login']);
			});
	}

	chkNum(evt) {
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;

		return true;
	}

	chkspace(evt) {
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode == 32)
			return false;
		return true;
	}


}
