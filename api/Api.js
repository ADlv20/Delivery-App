export const api = {
    domain: "http://localhost:1337",
    fetchAllRestaurants: "/api/restaurants?populate=*",
    fetchAllFoodCategories: "/api/categories?populate=image",
    detailedRestaurant:
        "/api/restaurants/3?populate=menu.dishimage&populate=location",
};
