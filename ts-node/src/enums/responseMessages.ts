export enum DatabaseMessages{
    DatabaseNotConfigured ='Database name is not configured',
 }

 export enum PermissionMessages{
     PermissionNotFound='Privilege Not Found',
     PermissionDeleted ='Privilege deleted successfully.',
     PermissionCreated='New privilege added successfully.',
     PermissionsFetched = 'Privileges successfully fetched',
     PermissionAlreadyExists= 'Privilege already Exists',
     PermissionUpdated='Privilege updated successfully.',
     RoutesAssigned='Routes Assigned successfully'
 
 
 }
 
 export enum UserMessages {
    UserNotFound = "Incorrect username or password. Please try again.",
    LoginSuccessful = "Welcome back! You're logged in.",
    PasswordChangedSuccessfully = "Password changed successfully",
    RefreshTokenSuccessful = "Refresh Token Successful",
    RegisterSuccessfully = "You Are Successfully Register"
}

export enum ValidationMessages {
    EmailAndPasswordRequired = "Email and password are required",
    InvalidCredentials = "Incorrect username or password. Please try again!",
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    InvalidRefreshToken = "Invalid RefreshToken",
    AllFieldsRequired = "All Field is Requires"
}

export enum ErrorMessages {
    InternalServerError = "Internal Server Error",
    UnknownError = "An unknown error occurred",
    MissingRecaptchaToken = "Missing Recaptcha Token",
    InvalidRecaptchaToken = "Invalid Recaptcha Token",
    RecaptchaVerificationFailed = "Recaptcha Validation Failed",
    InvalidRequest = "Invalid Request"
}

 
 export enum RoleMessages{
 RoleUpdated="Role updated successfully.",
 RoleNotFound ='Role Not Found',
 RoleAlreadyExists ='Role Alredy Exists',
 RoleCreated = "New role added successfully.",
 RolesFetched = "Roles Fetched",
 RoleFetched='Role Fetched',
 RoleAssociatedWithUser = "Can not delete Role is associated with user",
 RoleDeleted='Role deleted successfully.'
 }
 
 export enum TenantMessages{
     CreateSuccessful="New record has been successfully created",
     TenantAlreadyExists = "Company already exists.",
     StatusUpdateSuccessful = "Company Status updated successfully",
     Fetched = "'Company fetched successfully'",
     CompaniesFetched = "Companies fetched successfully",
     DomainAlreadyExists="Tenant with this domain name already exists",
     CompanyNotExists="Company not found.",
     AddressNotFound="Address not found for tenant.",
     UpdateSuccessful = "The record has been updated successfully.",
     AddressFetchSuccessful ="Addresses fetched successfully"
 
 
 }
 
 export enum CustomerMessages{
     UserNameTaken="User Name Already Taken",
     CreateCustomerFailed="Customer creation failed",
     PhoneNumberAlreadyExists="Phone number already exist",
     CustomerNotFound="Customer not found",
     CustomerDeleted = "Customer deleted successfully.",
     DeleteCustomerFailed = "Delete Customer Failed",
     FetchCustomerFailed = "Fetch Customer Failed",
     FetchCustomersFailed = "Fetch Customers Failed",
     UpdateCustomerFailed = "No fields were updated. Please check the fields and try again.",
     CustomerAlreadyExists = "Customer Already Exists",
     CreateSuccessful = "New customer added successfully.",
     FetchSuccessful = "Customers fetched Successfully",
     UpdateSuccessful = 'Customer details updated successfully.',
     DeleteSuccessful = "Delete Successful",
     CustomerRecovered ="Customer recovered successfully.",
     CustomerStatusChangedSuccessfully="Customer status changed successfully."
 
 }
 
 export enum  StaffMessages{
   StaffAlreadyExists="Staff already exisits",
   StaffNotFound = "Staff Not Found",
   CreateSuccessful = "New record added successfully.",
   UpdateSuccessfull = "The record updated successfully.",
   FetchSuccessful = "Fetch Successful",
   DeleteSuccessfull = "The record deleted successfully.",
   StatusChangedSuccessfull = "Staff/Provider status changed successfully.",
 
 }
 
 export enum CategoryMessages{
     CategoryRecovered = "Category Recovered successfully",
     CreateSuccessful = "Category created successfully",
     CategoryAlreadyExists = "Category Already Exists",
     CategoryNotFound = "Category Not Found",
     CategoryUpdated = "Category Updated successfully",
     CategoryFetched = "Category Fetched successfully",
     CategoryDeleted="Category Deleted successfully",
 }
 
 export enum ServiceMessages{
     ServiceRecovered = "Service Recovered successfully",
     ServiceAlreadyExists ='Service Already Exists',
     ServiceNotFound = "Service NotFound",
     CreateSuccessful = "New service added successfully.",
     ServiceUpdated = "Service updated successfully.",
     StatusChangeSuccessful = "Status Changed Successfully",
     FetchSuccessful = "FetchSuccessful",
     DeleteSuccessful = "Service deleted successfully."
 }
 
 export enum InvoiceMessages{
     InvoiceNotFound="Not found ",
     CreateSuccessful = "New record added successfully ",
     InvoiceUpdated = "Record Updated successfully",
     FetchSuccessful = "Fetch Successful",
     CustomerNotFound = "Customer Not Found",
     ProviderNotFound = "Provider Not Found"
 }

 