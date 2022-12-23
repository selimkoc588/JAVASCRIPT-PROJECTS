class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }


    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <im src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fnature.html&psig=AOvVaw30ffitC-fPdFna4YjZUe4a&ust=1665656310315000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi607e72voCFQAAAAAdAAAAABAJ" class="img thumbnail">

        

                    </div>
                    <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            name: ${profile.name}
                        </li>
                        <li class="list-group-item">
                            username: ${profile.username}
                        </li>
                        <li class="list-group-item">
                            email: ${profile.email}
                        </li>
                        <li class="list-group-item">
                            address: ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                            ${profile.address.suite}
                        </li>
                        <li class="list-group-item">
                            phone: ${profile.phone}
                        </li>
                        <li class="list-group-item">
                            website: ${profile.website}
                        </li>
                        <li class="list-group-item">
                            company: ${profile.company.name}
                        </li>
                </div>




            </div>
        
        `;
    }
}