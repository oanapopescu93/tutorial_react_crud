import React from 'react';

function ContactPage(props) {		
	return (
		<div className="contactPage">   
			<h1>Contact me</h1>
            <table id="contact_info">
                <tbody>
                    <tr>
                        <td>Location:</td>
                        <td>Romania, Bucharest</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href="mailto:oanapopescu93@gmail.com">oanapopescu93@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td><a href="https://oana-popescu.000webhostapp.com/">oana-popescu.000webhostapp.com/</a></td>
                    </tr>
                    <tr>
                        <td>Github:</td>
                        <td><a href="https://github.com/oanapopescu93">github.com/oanapopescu93</a></td>
                    </tr>
                    <tr>
                        <td>LinkedIn:</td>
                        <td><a href="https://www.linkedin.com/in/oanapopescu93/">linkedin.com/in/oanapopescu93</a></td>
                    </tr>
                </tbody>
            </table>
		</div>
	);
}

export default ContactPage;
