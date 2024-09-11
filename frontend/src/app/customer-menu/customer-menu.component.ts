import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {
  
  menuItems = [
    { name: 'Paneer Tikka', description: 'Grilled Indian cheese with spices and vegetables.', price: 1500, type: 'veg', time: 'dinner', country: 'Indian', image: 'assets/images/paneer_tikka.jpg' },
    { name: 'Masala Dosa', description: 'Crispy rice crepes filled with spiced potatoes.', price: 700, type: 'veg', time: 'breakfast', country: 'Indian', image: 'assets/images/masala_dosa.jpg' },
    { name: 'Palak Paneer', description: 'Indian cottage cheese cooked in a spinach gravy.', price: 1200, type: 'veg', time: 'lunch', country: 'Indian', image: 'assets/images/palak_paneer.jpg' },
    { name: 'Vegetable Biryani', description: 'Basmati rice cooked with mixed vegetables and spices.', price: 1000, type: 'veg', time: 'lunch', country: 'Indian', image: 'assets/images/vegetable_biryani.jpg' },
    { name: 'Aloo Gobi', description: 'Potatoes and cauliflower cooked with Indian spices.', price: 900, type: 'veg', time: 'dinner', country: 'Indian', image: 'assets/images/aloo_gobi.jpg' },
    { name: 'Chole Bhature', description: 'Spicy chickpea curry served with fried bread.', price: 1000, type: 'veg', time: 'lunch', country: 'Indian', image: 'assets/images/chole_bhature.jpg' },
    { name: 'Pav Bhaji', description: 'Spicy mashed vegetables served with buttered bread rolls.', price: 650, type: 'veg', time: 'lunch', country: 'Indian', image: 'assets/images/pav_bhaji.jpg' },
    { name: 'Baingan Bharta', description: 'Smoky roasted eggplant mashed with spices.', price: 800, type: 'veg', time: 'dinner', country: 'Indian', image: 'assets/images/baingan_bharta.jpg' },
    { name: 'Daal Makhani', description: 'Slow-cooked lentils with butter and cream.', price: 900, type: 'veg', time: 'dinner', country: 'Indian', image: 'assets/images/daal_makhani.jpg' },
    { name: 'Paneer Butter Masala', description: 'Indian cottage cheese cooked in a rich tomato-based gravy.', price: 1200, type: 'veg', time: 'dinner', country: 'Indian', image: 'assets/images/paneer_butter_masala.jpg' },
   
  
    { name: 'Chicken Biryani', description: 'Fragrant rice cooked with tender chicken and spices.', price: 1700, type: 'nonVeg', time: 'lunch', country: 'Indian', image: 'assets/images/chicken_biryani.jpg' },
    { name: 'Butter Chicken', description: 'Tender chicken pieces cooked in a creamy tomato gravy.', price: 1300, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/butter_chicken.jpg' },
    { name: 'Mutton Rogan Josh', description: 'Slow-cooked lamb in aromatic Kashmiri spices.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/mutton_rogan_josh.jpg' },
    { name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, grilled in a tandoor.', price: 1600, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/tandoori_chicken.jpg' },
    { name: 'Goan Fish Curry', description: 'Fish cooked with coconut and spicy curry sauce.', price: 1400, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/goan_fish_curry.jpg' },
    { name: 'Prawn Malai Curry', description: 'Prawns cooked in a creamy coconut sauce.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/prawn_malai_curry.jpg' },
    { name: 'Chicken Korma', description: 'Chicken cooked in a mildly spiced, creamy sauce.', price: 1300, type: 'nonVeg', time: 'dinner', country: 'Indian', image: 'assets/images/chicken_korma.jpg' },
    { name: 'Keema Paratha', description: 'Flatbread stuffed with spiced minced lamb.', price: 1100, type: 'nonVeg', time: 'lunch', country: 'Indian', image: 'assets/images/keema_paratha.jpg' },
   
       
       { name: 'Gulab Jamun', description: 'Deep-fried dough balls soaked in syrup.', price: 400, type: 'veg', time: 'dessert', country: 'Indian', image: 'assets/images/gulab_jamun.jpg' },
       { name: 'Rasgulla', description: 'Soft, spongy balls of chhena soaked in sugar syrup.', price: 500, type: 'veg', time: 'dessert', country: 'Indian', image: 'assets/images/rasgulla.jpg' },
   
       { name: 'Vegetable Roti', description: 'Flatbread stuffed with spiced vegetables.', price: 300, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/vegetable_roti.jpg' },
       { name: 'Pol Sambol', description: 'Coconut relish with chili and lime.', price: 200, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/pol_sambol.jpg' },
       { name: 'Gotu Kola Sambol', description: 'Fresh herb salad with coconut and lime.', price: 300, type: 'veg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/gotu_kola_sambol.jpg' },
       { name: 'Parippu (Lentil Curry)', description: 'Red lentils cooked with coconut milk and spices.', price: 500, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/parippu.jpg' },
       { name: 'Kottu Roti (Veg)', description: 'Chopped flatbread stir-fried with vegetables.', price: 800, type: 'veg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/veg_kottu_roti.jpg' },
       { name: 'Jackfruit Curry (Polos)', description: 'Young jackfruit curry cooked with spices.', price: 700, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/jackfruit_curry.jpg' },
       { name: 'Pittu', description: 'Steamed rice flour and coconut mixture, often served with curries.', price: 300, type: 'veg', time: 'breakfast', country: 'Sri Lankan', image: 'assets/images/pittu.jpg' },
       { name: 'Mallung', description: 'A stir-fried green leafy vegetable dish with coconut.', price: 400, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/mallung.jpg' },
       { name: 'Coconut Sambol', description: 'Spicy grated coconut side dish.', price: 200, type: 'veg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/coconut_sambol.jpg' },
       { name: 'Beetroot Curry', description: 'Sliced beetroot cooked with coconut milk and spices.', price: 500, type: 'veg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/beetroot_curry.jpg' },
     
      
       { name: 'Chicken Kottu', description: 'Chopped flatbread stir-fried with chicken and vegetables.', price: 1000, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/chicken_kottu.jpg' },
       { name: 'Sri Lankan Fish Curry', description: 'Fish cooked in a tangy coconut milk gravy.', price: 1300, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/fish_curry.jpg' },
       { name: 'Sri Lankan Chicken Curry', description: 'Chicken cooked with coconut milk and aromatic spices.', price: 1200, type: 'nonVeg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/chicken_curry.jpg' },
       { name: 'Devilled Prawns', description: 'Prawns stir-fried in a spicy sauce.', price: 1600, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/devilled_prawns.jpg' },
       { name: 'Egg Hoppers', description: 'Bowl-shaped pancakes made with fermented rice flour and eggs.', price: 600, type: 'nonVeg', time: 'breakfast', country: 'Sri Lankan', image: 'assets/images/egg_hoppers.jpg' },
       { name: 'Mutton Curry', description: 'Tender mutton pieces cooked in a spicy gravy.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/mutton_curry.jpg' },
       { name: 'Crab Curry', description: 'Spicy crab curry with rich coconut milk and spices.', price: 1900, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/crab_curry.jpg' },
       { name: 'Fish Ambul Thiyal', description: 'Sour fish curry made with goraka (tamarind-like fruit).', price: 1400, type: 'nonVeg', time: 'lunch', country: 'Sri Lankan', image: 'assets/images/fish_ambul_thiyal.jpg' },
       { name: 'Beef Fry', description: 'Stir-fried beef with chili and spices.', price: 1300, type: 'nonVeg', time: 'dinner', country: 'Sri Lankan', image: 'assets/images/beef_fry.jpg' },
       { name: 'Lunu Miris Egg Hopper', description: 'Crispy hopper with egg and spicy onion relish.', price: 700, type: 'nonVeg', time: 'breakfast', country: 'Sri Lankan', image: 'assets/images/lunu_miris_hopper.jpg' },
     
       
       { name: 'Watalappan', description: 'Coconut custard pudding spiced with cardamom.', price: 400, type: 'veg', time: 'dessert', country: 'Sri Lankan', image: 'assets/images/watalappan.jpg' },
       { name: 'Kiribath', description: 'Rice cooked in coconut milk, traditionally served with sweet or savory sides.', price: 300, type: 'veg', time: 'dessert', country: 'Sri Lankan', image: 'assets/images/kiribath.jpg' },
       { name: 'Bibikkan', description: 'Traditional coconut cake made with treacle and spices.', price: 500, type: 'veg', time: 'dessert', country: 'Sri Lankan', image: 'assets/images/bibikkan.jpg' },
       { name: 'Kalu Dodol', description: 'Sticky coconut milk fudge made with jaggery.', price: 600, type: 'veg', time: 'dessert', country: 'Sri Lankan', image: 'assets/images/kalu_dodol.jpg' },
       { name: 'Pani Walalu', description: 'Fried dough soaked in treacle syrup.', price: 400, type: 'veg', time: 'dessert', country: 'Sri Lankan', image: 'assets/images/pani_walalu.jpg' },
   
     { name: 'Vegetable Tempura', description: 'Crispy fried vegetables with dipping sauce.', price: 900, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/vegetable_tempura.jpg' },
     { name: 'Miso Soup', description: 'Traditional Japanese soup with tofu, seaweed, and green onions.', price: 800, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/miso_soup.jpg' },
     { name: 'Edamame', description: 'Steamed and salted green soybeans in the pod.', price: 300, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/edamame.jpg' },
     { name: 'Yakisoba', description: 'Stir-fried noodles with vegetables and soy-based sauce.', price: 1300, type: 'veg', time: 'dinner', country: 'Japanese', image: 'assets/images/yakisoba.jpg' },
     { name: 'Kappa Maki', description: 'Cucumber sushi roll served with soy sauce and wasabi.', price: 900, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/kappa_maki.jpg' },
     { name: 'Inari Sushi', description: 'Sushi rice wrapped in sweetened tofu pouches.', price: 1200, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/inari_sushi.jpg' },
     { name: 'Agedashi Tofu', description: 'Deep-fried tofu served in a dashi broth.', price: 1100, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/agedashi_tofu.jpg' },
     { name: 'Onigiri', description: 'Rice balls filled with vegetables and wrapped in seaweed.', price: 800, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/onigiri.jpg' },
     { name: 'Shiitake Mushroom Teriyaki', description: 'Grilled shiitake mushrooms glazed with teriyaki sauce.', price: 1500, type: 'veg', time: 'dinner', country: 'Japanese', image: 'assets/images/shiitake_teriyaki.jpg' },
     { name: 'Japanese Salad', description: 'Fresh salad with mixed greens, cucumbers, and carrot ginger dressing.', price: 1000, type: 'veg', time: 'lunch', country: 'Japanese', image: 'assets/images/japanese_salad.jpg' },
   
     
     { name: 'Sushi Platter', description: 'Assorted sushi with fresh fish and vegetables.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/sushi_platter.jpg' },
     { name: 'Teriyaki Chicken', description: 'Grilled chicken with a savory teriyaki sauce.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/teriyaki_chicken.jpg' },
     { name: 'Ramen', description: 'Japanese noodle soup with pork, vegetables, and egg.', price: 1600, type: 'nonVeg', time: 'lunch', country: 'Japanese', image: 'assets/images/ramen.jpg' },
     { name: 'Tonkatsu', description: 'Breaded and deep-fried pork cutlet served with rice.', price: 1900, type: 'nonVeg', time: 'lunch', country: 'Japanese', image: 'assets/images/tonkatsu.jpg' },
     { name: 'Tempura Shrimp', description: 'Battered and fried shrimp served with dipping sauce.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/tempura_shrimp.jpg' },
     { name: 'Unagi Donburi', description: 'Grilled eel served over rice.', price: 1900, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/unagi_donburi.jpg' },
     { name: 'Yakitori', description: 'Grilled chicken skewers glazed with teriyaki sauce.', price: 1200, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/yakitori.jpg' },
     { name: 'Beef Tataki', description: 'Seared and thinly sliced beef served with ponzu sauce.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/beef_tataki.jpg' },
     { name: 'Tuna Sashimi', description: 'Thinly sliced raw tuna served with soy sauce and wasabi.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/tuna_sashimi.jpg' },
     { name: 'Okonomiyaki', description: 'Savory Japanese pancake with pork, seafood, and vegetables.', price: 1600, type: 'nonVeg', time: 'dinner', country: 'Japanese', image: 'assets/images/okonomiyaki.jpg' },
   
     
     { name: 'Mochi', description: 'Soft, chewy rice cakes filled with sweet red bean paste.', price: 300, type: 'veg', time: 'dessert', country: 'Japanese', image: 'assets/images/mochi.jpg' },
     { name: 'Dorayaki', description: 'Pancake sandwich filled with sweet red bean paste.', price: 500, type: 'veg', time: 'dessert', country: 'Japanese', image: 'assets/images/dorayaki.jpg' },
     { name: 'Matcha Ice Cream', description: 'Green tea-flavored ice cream.', price: 600, type: 'veg', time: 'dessert', country: 'Japanese', image: 'assets/images/matcha_ice_cream.jpg' },
     { name: 'Daifuku', description: 'Rice cake filled with sweet filling, often with red bean paste.', price: 500, type: 'veg', time: 'dessert', country: 'Japanese', image: 'assets/images/daifuku.jpg' },
     { name: 'Anmitsu', description: 'A traditional Japanese dessert made with agar jelly, fruit, and red bean paste.', price: 700, type: 'veg', time: 'dessert', country: 'Japanese', image: 'assets/images/anmitsu.jpg' },
     
      { name: 'Vegetarian Quesadilla', description: 'Grilled tortilla with melted cheese and vegetables.', price: 900, type: 'veg', time: 'dinner', country: 'Mexican', image: 'assets/images/vegetarian_quesadilla.jpg' },
      { name: 'Vegetarian Tacos', description: 'Soft tacos filled with seasoned vegetables and guacamole.', price: 800, type: 'veg', time: 'lunch', country: 'Mexican', image: 'assets/images/vegetarian_tacos.jpg' },
      { name: 'Guacamole Salad', description: 'Fresh avocado salad with tomatoes, onions, and lime.', price: 700, type: 'veg', time: 'lunch', country: 'Mexican', image: 'assets/images/guacamole_salad.jpg' },
      { name: 'Vegetable Tamales', description: 'Corn masa filled with vegetables and steamed in corn husks.', price: 1000, type: 'veg', time: 'dinner', country: 'Mexican', image: 'assets/images/vegetable_tamales.jpg' },
      { name: 'Chiles Rellenos', description: 'Poblano peppers stuffed with cheese and fried.', price: 1200, type: 'veg', time: 'dinner', country: 'Mexican', image: 'assets/images/chiles_rellenos.jpg' },
    
      
      { name: 'Tacos Al Pastor', description: 'Corn tortillas filled with marinated pork, onions, and pineapple.', price: 1300, type: 'nonVeg', time: 'lunch', country: 'Mexican', image: 'assets/images/tacos_al_pastor.jpg' },
      { name: 'Chicken Enchiladas', description: 'Corn tortillas stuffed with shredded chicken, topped with enchilada sauce.', price: 1500, type: 'nonVeg', time: 'dinner', country: 'Mexican', image: 'assets/images/chicken_enchiladas.jpg' },
      { name: 'Beef Burrito', description: 'Flour tortilla filled with beef, beans, and cheese, served with salsa.', price: 1200, type: 'nonVeg', time: 'lunch', country: 'Mexican', image: 'assets/images/beef_burrito.jpg' },
      { name: 'Carnitas', description: 'Slow-cooked pork served with tortillas and salsa.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Mexican', image: 'assets/images/carnitas.jpg' },
      { name: 'Shrimp Tacos', description: 'Soft tortillas filled with seasoned shrimp and cabbage slaw.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Mexican', image: 'assets/images/shrimp_tacos.jpg' },
    
     
      { name: 'Churros', description: 'Fried dough pastry dusted with cinnamon sugar, served with chocolate sauce.', price: 400, type: 'veg', time: 'dessert', country: 'Mexican', image: 'assets/images/churros.jpg' },
      { name: 'Flan', description: 'Creamy caramel custard dessert.', price: 600, type: 'veg', time: 'dessert', country: 'Mexican', image: 'assets/images/flan.jpg' },
      { name: 'Tres Leches Cake', description: 'Moist cake soaked in three types of milk.', price: 700, type: 'veg', time: 'dessert', country: 'Mexican', image: 'assets/images/tres_leches_cake.jpg' },
      { name: 'Sopapillas', description: 'Fried dough drizzled with honey and cinnamon.', price: 500, type: 'veg', time: 'dessert', country: 'Mexican', image: 'assets/images/sopapillas.jpg' },
      { name: 'Mexican Hot Chocolate', description: 'Rich, spiced hot chocolate served with cinnamon.', price: 400, type: 'veg', time: 'dessert', country: 'Mexican', image: 'assets/images/mexican_hot_chocolate.jpg' },
   
       
     { name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', price: 1500, type: 'veg', time: 'lunch', country: 'Italian', image: 'assets/images/margherita_pizza.jpg' },
     { name: 'Penne Arrabbiata', description: 'Penne pasta in a spicy tomato sauce.', price: 1300, type: 'veg', time: 'lunch', country: 'Italian', image: 'assets/images/penne_arrabbiata.jpg' },
     { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with olive oil.', price: 900, type: 'veg', time: 'lunch', country: 'Italian', image: 'assets/images/caprese_salad.jpg' },
     { name: 'Minestrone Soup', description: 'Hearty vegetable soup with pasta and beans.', price: 800, type: 'veg', time: 'lunch', country: 'Italian', image: 'assets/images/minestrone_soup.jpg' },
     { name: 'Vegetarian Lasagna', description: 'Layered pasta with vegetables, tomato sauce, and ricotta cheese.', price: 1600, type: 'veg', time: 'dinner', country: 'Italian', image: 'assets/images/vegetarian_lasagna.jpg' },
   
     
     { name: 'Spaghetti Carbonara', description: 'Creamy pasta with pancetta, egg, and Parmesan cheese.', price: 1700, type: 'nonVeg', time: 'dinner', country: 'Italian', image: 'assets/images/spaghetti_carbonara.jpg' },
     { name: 'Lasagna', description: 'Layers of pasta with Bolognese sauce and creamy béchamel.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Italian', image: 'assets/images/lasagna.jpg' },
     { name: 'Chicken Parmesan', description: 'Breaded chicken breast topped with marinara and melted cheese.', price: 1900, type: 'nonVeg', time: 'dinner', country: 'Italian', image: 'assets/images/chicken_parmesan.jpg' },
     { name: 'Osso Buco', description: 'Braised veal shanks served with gremolata and risotto.', price: 1800, type: 'nonVeg', time: 'dinner', country: 'Italian', image: 'assets/images/osso_buco.jpg' },
     { name: 'Seafood Risotto', description: 'Creamy risotto cooked with seafood and white wine.', price: 1600, type: 'nonVeg', time: 'dinner', country: 'Italian', image: 'assets/images/seafood_risotto.jpg' },
   
     
     { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.', price: 700, type: 'veg', time: 'dessert', country: 'Italian', image: 'assets/images/tiramisu.jpg' },
     { name: 'Panna Cotta', description: 'Creamy vanilla-flavored dessert topped with berry compote.', price: 600, type: 'veg', time: 'dessert', country: 'Italian', image: 'assets/images/panna_cotta.jpg' },
     { name: 'Cannoli', description: 'Crispy pastry tubes filled with sweet ricotta cream.', price: 500, type: 'veg', time: 'dessert', country: 'Italian', image: 'assets/images/cannoli.jpg' },
     { name: 'Gelato', description: 'Italian-style ice cream available in various flavors.', price: 400, type: 'veg', time: 'dessert', country: 'Italian', image: 'assets/images/gelato.jpg' },
     { name: 'Sfogliatella', description: 'Flaky pastry filled with ricotta and candied fruit.', price: 500, type: 'veg', time: 'dessert', country: 'Italian', image: 'assets/images/sfogliatella.jpg' },
    ];
    cart: any[] = [];
    total: number = 0;
    searchTerm: string = '';
    paymentMethod: string = 'cash';
    filters = { veg: false, nonVeg: false, breakfast: false, lunch: false, dinner: false };
    selectedCountry: string = 'All';
    filteredMenuItems: any[] = [];
    countries = ['All', 'Indian', 'Italian', 'Mexican', 'Japanese', 'Sri Lankan'];
  
    constructor(private router: Router, private http: HttpClient) {}
  
    ngOnInit() {
      this.filterMenu();
    }
  
  
    filterMenu() {
      this.filteredMenuItems = this.menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchesVeg = this.filters.veg ? item.type === 'veg' : true;
        const matchesNonVeg = this.filters.nonVeg ? item.type === 'nonVeg' : true;
        const matchesBreakfast = this.filters.breakfast ? item.time === 'breakfast' : true;
        const matchesLunch = this.filters.lunch ? item.time === 'lunch' : true;
        const matchesDinner = this.filters.dinner ? item.time === 'dinner' : true;
        const matchesCountry = this.selectedCountry === 'All' ? true : item.country === this.selectedCountry;
        return matchesSearch && matchesVeg && matchesNonVeg && matchesBreakfast && matchesLunch && matchesDinner && matchesCountry;
      });
    }
  
    
    setCountry(country: string) {
      this.selectedCountry = country;
      this.filterMenu();
    }
  
   
    addToCart(item: any) {
      this.cart.push(item);
      this.total += item.price;
    }
  
   
    removeFromCart(item: any) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1); 
        this.total -= item.price; 
      }
    }
  
    
    confirmPayment() {
      const paymentDetails = {
        userId: 1, 
        amount: this.total,
        paymentMethod: this.paymentMethod
      };
  
     
      this.http.post('http://localhost:5000/payments', paymentDetails)
        .subscribe((response: any) => {
          console.log('Payment confirmed:', response);
          alert('Payment confirmed successfully!');
          this.generateBill(); 
        }, (error) => {
          console.error('Error confirming payment:', error);
          alert('Error processing payment');
        });
    }
  
   
    generateBill() {
      let billDetails = 'Bill Details:\n';
      this.cart.forEach(item => {
        billDetails += `Item: ${item.name}, Price: LKR ${item.price}\n`;
      });
      billDetails += `Total: LKR ${this.total}\n`;
      billDetails += `Payment Method: ${this.paymentMethod}`;
      alert(billDetails);  
    }
  }