Feature:  Grant admin permissions to a user

	Scenario: Scenario 1
		Given a logged in admin user 'Zainab.Bako@horatioconsult.com'
		When the admin user grants 'Tania Shaw' admin permissions
		Then the user 'tanya@horatio.com' has admin permissions
		And the user 'tanya@horatio.com' has access to settings screen.	 
