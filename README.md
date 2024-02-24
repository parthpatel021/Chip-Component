# Next.js User Search Chip Component

This project is a user search chip component built using Next.js. It allows users to search for other users and add them as chips in a search bar from a suggestion list.

## Features

- Users can search for other users.
- Suggestions are displayed based on the search query.
- Selected users can be added as chips in the search bar.
- Chips can be removed by clicking on them or using the backspace key.
- Navigation through the suggestion list using arrow keys.

## Technology Used

- Next.js
- React.js
- TailwindCSS

## Installation

To use this component in your Next.js project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/parthpatel021/Chip-Component.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Chip-Component
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the component.

## Usage

To use the user search chip component in your Next.js project, follow these steps:

1. Import the `Searchbar` component:

    ```js
    import Searchbar from '@/components/Searchbar';
    ```

2. Add the `Searchbar` component to your page:

    ```js
    <Searchbar />
    ```

## Components

### `Searchbar`

This component consists of a search bar where users can input their search queries and view suggestions. It also displays selected users as chips.

### `Chip`

This component represents a user chip displayed in the search bar. It includes the user's information and a button to remove the chip.

### `SearchSuggestion`

This component displays the suggestions based on the user's search query.

## Context

This project utilizes React Context API to manage the state of the user search and selected chips.
