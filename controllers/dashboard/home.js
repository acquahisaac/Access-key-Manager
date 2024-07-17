
const home = (req, res) => {

    const data = getData();

  res.render("dashboard/index",{ data: data });
};

function getData() {
  return [
    {
      id: 1,
      name: "Isaac",
      role: "Administrator",
      status: "Active",
      email: "isaac@example.com",
      password: "password123",
      password_reset: "Not Required",
    },
    {
      id: 2,
      name: "Emma",
      role: "Editor",
      status: "Inactive",
      email: "emma@example.com",
      password: "password456",
      password_reset: "Required",
    },
    {
      id: 3,
      name: "John",
      role: "Reviewer",
      status: "Active",
      email: "john@example.com",
      password: "password789",
      password_reset: "Not Required",
    },
    {
      id: 4,
      name: "Sophia",
      role: "Writer",
      status: "Active",
      email: "sophia@example.com",
      password: "password101112",
      password_reset: "Required",
    },
    {
      id: 5,
      name: "Michael",
      role: "Contributor",
      status: "Inactive",
      email: "michael@example.com",
      password: "password131415",
      password_reset: "Not Required",
    },
    {
      id: 6,
      name: "Olivia",
      role: "Manager",
      status: "Active",
      email: "olivia@example.com",
      password: "password161718",
      password_reset: "Required",
    },
    {
      id: 7,
      name: "James",
      role: "Support",
      status: "Inactive",
      email: "james@example.com",
      password: "password192021",
      password_reset: "Not Required",
    },
  ];
}


module.exports = {
  home
};