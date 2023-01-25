//declearing html element

const imgDiv = document.querySelector('.profil');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const upload = document.querySelector('#upload');

//if user hover img div 



file.addEventListener('change',Function()
	{
		const choosedFile= this.files[0];
		if(choosedFile){
			const reader = new FileReader();
			reader.addEventListener('load',function()
			{
				img.serAttribute('src',reader.result);
			});
			reader.readAsDataURL(choosedFile);

		}
	});
 