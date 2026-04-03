import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #marble;
    #granite;
    #exotic;
  };

  type Finish = {
    #polished;
    #honed;
    #flamed;
    #leathered;
    #sandblasted;
    #bushHammered;
  };

  type Size = {
    length : Nat;
    width : Nat;
    thickness : Nat;
  };

  type Product = {
    name : Text;
    category : Category;
    description : Text;
    origin : Text;
    finishes : [Finish];
    sizes : [Size];
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  type CompanyInfo = {
    name : Text;
    address : Text;
    phone : Text;
    email : Text;
    website : Text;
  };

  let products = Map.empty<Text, Product>();

  let companyInfo : CompanyInfo = {
    name = "Kishangarh Stones";
    address = "Kishangarh, Rajasthan, India";
    phone = "+91 12345 67890";
    email = "contact@kishangarhstones.com";
    website = "www.kishangarhstones.com";
  };

  public shared ({ caller }) func addProduct(product : Product) : async () {
    products.add(product.name, product);
  };

  public query func getProductsByCategory(cat : Category) : async [Product] {
    products.values().toArray().filter(func(p) { p.category == cat }).sort();
  };

  public query func getProduct(name : Text) : async Product {
    switch (products.get(name)) {
      case (null) { Runtime.trap("Product not found.") };
      case (?product) { product };
    };
  };

  public query func getCompanyInfo() : async CompanyInfo {
    companyInfo;
  };
};
