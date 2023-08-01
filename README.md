# Video game library

## Authentication

In order to query the PlayStation Network API, you'll need to get an 'NPSSO'. Per the [PSN API documentation][psn-api-documentation]:

1. Log into the [PlayStation website][playstation-website] in a browser
2. Visit <https://ca.account.sony.com/api/v1/ssocookie> and copy the 64-character `npsso` value
3. Create a `.env` file at the top-level of this repository and paste the value from the previous step with the key `NPSSO`, per the example below (this is a fake value)

```text
NPSSO=aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooopppp
```

[playstation-website]: https://www.playstation.com
[psn-api-documentation]: https://psn-api.achievements.app/authentication/authenticating-manually
