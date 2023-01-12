import * as React from 'react';
import axios from 'axios';
import { allUsers } from '../utils/urls'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages/Home';
import { useFetch } from '../components/index'



it('Should check the single user click', () => {
    render(<Home />)
    
    // Prefer using getByTestId or getByRole
    const button = screen.getByTestId('userSinglePage')

    // expect(screen.queryByText('Content')).toBeNull()

    fireEvent.click(button)

    expect(screen.getByText('organization')).toBeInTheDocument()

    // fireEvent.click(button)

    // expect(screen.queryByText('My Content')).toBeNull()
})

// it("renders users data", async () => {
//   const fakeUsers = [
//     {"createdAt":"2072-12-27T03:44:22.522Z","orgName":"labore-dolor-et","userName":"Wilburn.Rice","email":"Maverick.Hyatt83@gmail.com","phoneNumber":"(553) 208-0727 x31321","lastActiveDate":"2099-02-28T23:17:40.013Z","profile":{"firstName":"Darian","lastName":"Rolfson","phoneNumber":"494-278-0946","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg","gender":"Male","bvn":"815809412","address":"Gusikowski Locks","currency":"NGN"},"guarantor":{"firstName":"Celine","lastName":"Monahan","phoneNumber":"1-482-227-3654 x71086","gender":"Male","address":"O'Hara Centers"},"accountBalance":"496.00","accountNumber":"GWQUSEH1","socials":{"facebook":"@lendsqr","instagram":"@lendsqr","twitter":"@lendsqr"},"education":{"level":"Bsc","employmentStatus":"Employed","sector":"FinTech","duration":"2 Years","officeEmail":"Edna4@yahoo.com","monthlyIncome":["128.57","118.07"],"loanRepayment":"122.47"},"id":"1"},
// ]

// const { data, isLoading } = useFetch(allUsers);
// jest.mock(data);

// describe("Home component", () => {
//     // After each test clear the mock
//   beforeEach(() => jest.clearAllMocks());

//   it("should render pokemon names when api responds", async () => {
//     // For this test, when getPokemonsFromApi is called
//     // return the given value wrapped in a Promise
//     await useFetch(allUsers)
//     // Render the component
//     render(<Home />);
//     // See if the pokemon name we returned in the mock is visible
//     await waitFor(() => {
//       screen.getByText("labore-dolor-et");
//     });
//   });
// });