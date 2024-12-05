---
title: new orders
---
# Introduction

This document will walk you through the implementation of the "new orders" feature in the admin panel.

The "new orders" feature allows administrators to search and view new orders efficiently.

We will cover:

1. Initial state setup and data handling.
2. Search functionality implementation.
3. Rendering the search results.
4. Handling user interactions.

# Initial state setup and data handling

<SwmSnippet path="/src/Admin/NewOrders/NewOrders.js" line="1">

---

We start by defining the initial state and importing necessary modules. The `useState` hook is used to manage the search input and the search results. The initial search results are set to the data imported from <SwmPath>[src/Admin/NewOrders/Data.json](/src/Admin/NewOrders/Data.json)</SwmPath>.

```
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './Data.json';

const NewOrders = ({ handleContent }) => {
  const [searchitem, setSearchItem] = useState('');
  const [resultsearch, setResultsearch] = useState(data);
```

---

</SwmSnippet>

# Search functionality implementation

<SwmSnippet path="/src/Admin/NewOrders/NewOrders.js" line="9">

---

The `handleSearch` function is crucial for filtering the orders based on the search input. It updates the search input state and filters the data to match the order ID with the search input.

```
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    const results = data.filter((item) => item.orderid.includes(e.target.value));
    setResultsearch(results);
  };
```

---

</SwmSnippet>

# Rendering the search results

<SwmSnippet path="/src/Admin/NewOrders/NewOrders.js" line="16">

---

The component returns a form for the search input and dynamically renders the search results. If there are matching results, it maps through the results and displays each order's details. If no results are found, it shows a message indicating no matches.

```
  return (
    <>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>New Orders ({data.length})</h2>
        <form >
          <p>
            <input
              className="input border round card"
              placeholder="Search Orders..."
              value={searchitem}
              onChange={handleSearch}
            />
          </p>
        </form>
      </div>
      {
      resultsearch.length > 0 ? (resultsearch.map((items) => (
        <div
          className="container white card margin-bottom padding-16"
          style={{ maxWidth: '770px', marginLeft: '15px' }}
        >
          <h5>Order Id : {items.orderid}</h5>
          <span className="text-grey">{items.orderTime}</span>
          <div className="row">
            <div className="col s6 m6 16">
              <h6>No Of Items : {items.NoOfItems}</h6>
              <h4>
                Total : {'\u20B9'} &nbsp;<b> {items.Total}</b>
              </h4>
            </div>
```

---

</SwmSnippet>

# Handling user interactions

<SwmSnippet path="/src/Admin/NewOrders/NewOrders.js" line="58">

---

Each order item includes buttons for confirming the order and viewing more details. The "View" button triggers the `handleContent` function with the order ID, allowing further actions based on the selected order.

```
          </div>
          <hr />
          <div className="center">
            <button className="btn black round small left">Confirmed</button>
            <span className="text-theme center">
              <b>order confirmed</b>
            </span>
            <Link
            onClick={()=>handleContent('View',items.orderid)}
              className="btn blue right round small"
            >
              View
            </Link>
```

---

</SwmSnippet>

# Conclusion

<SwmSnippet path="/src/Admin/NewOrders/NewOrders.js" line="79">

---

The `NewOrders` component is exported for use in other parts of the application.

```
export default NewOrders;
```

---

</SwmSnippet>

This concludes the walkthrough of the "new orders" feature implementation. The design decisions focused on efficient state management, dynamic rendering, and user interaction handling to provide a smooth experience for administrators managing new orders.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBUk1TLWZyb250ZW5kJTNBJTNBVmFpc2huYXZpU3VydmFzZQ==" repo-name="RMS-frontend"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
