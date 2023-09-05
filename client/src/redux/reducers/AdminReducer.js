const init = {
  users: [],
  companies: [],
  error: null,
};

export const selectUsers = (state) => state.Admin.users;
export const selectCompanies = (state) => state.Admin.companies;

const AdminReducer = (state = init, action) => {
  switch (action.type) {
    case "add_user_success":
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
      };
    case "approve_company_success":
      const updateCompanies = state.companies.map((company) =>
        company._id === action.payload._id
          ? { ...company, verified: true }
          : company
      );
      return {
        ...state,
        companies: updateCompanies,
        error: null,
      };

    case "add_user_error":
      return {
        ...state,
        error: action.payload,
      };

    case "delete_user_success":
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: updatedUsers,
        error: null,
      };

    case "delete_user_error":
      return {
        ...state,
        error: action.payload,
      };

    case "get_users_success":
      return {
        ...state,
        users: action.payload,
        error: null,
      };

    case "get_users_error":
      return {
        ...state,
        error: action.payload,
      };
    case "get_companies_success":
      return {
        ...state,
        companies: action.payload,
        error: null,
      };

    case "get_companies_error":
    case "approve_company_error":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AdminReducer;
