# An-online-store---Trabalho-Web

## Group 2
- Luísa Souza Moura - 10692179
- Thiago Preischadt Pinheiro  - 10723801

## Requirements

- There must be 2 types of users: customers and admins.
  - Customers are users who access the system to buy shirts.
  - Administrators are resposible for managing users and products. The default admin account is `admin@gmail.com` with password `admin`.
- The admin record includes: name, id, phone, email.
- Customer records include:  name, id, address, phone, email.
- Product records include: shirt name, shirt description, shirt category, id, photo, price, quantity in stock for each size, quantity sold.
  - Shirt categories can be: camisa, regata, linha básica or estilosa.
- Process of ordering shirt(s): select products, quantity and size  and add to the cart or proceed to checkout. The order is finished by using a credit card (any card number with the right format is accepted). The quantities of each of the sold products are updated in the system: subtract the quantity in stock and add to the quantity sold. Carts are emptied only after payment or by customers choice.
- Product management: admins can create, update, read and delete (CRUD) shirts records (e.g. quantity in stock, shirt category).
- The system must provide accessibility requirements and provide good usability. The system must be responsive.

## Project Description

The project is a T-shirt online store named Brusinhas.

The store has the following functionalities:
- For users:
  - Create an account
  - Login (via email/password)
  - Update their profile
  - Navigate throw the products, seeing all of them or a subset
  - Select products and see more details about them
  - Add a certain product to the cart, after choosing the size and amount
  - View cart items and update quantities from there
  - Finish purchase
- For administrators:
  - Manage users (see, remove and make administrator)
  - Manage products (see, remove, update and create)

Screen mockups are available in this repository and can be found in [mockup](/mockup) folder. They were made using figma ([direct link to the project](https://www.figma.com/file/qaK26uRE7uRbZp1nA8w15X/Home-Page?node-id=0%3A1)).

The server will store information about the user and about the products:
- For users:
  - ID
  - Name
  - Address
  - Email
  - Password
  - Phone numbers
  - Flag indicating wheter a user is administrator or not
- For products:
  - ID
  - Name
  - Description
  - Price
  - Photo
  - Category
  - Quantity in stock for each size
  - Quantity in sold for each size

## Comments about the code

## Test Plan

## Test Results

## Build Procedures

## Problems

## Comments
