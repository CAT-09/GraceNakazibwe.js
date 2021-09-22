//Assignment on Constructor functions JavaScript. 
//Create seven classes with a minimum of seven properties and three methods  in each construction function. 
//with atleast two methods and atleast three instances of objects. 



 //A class of Tree with the different properties of the Tree class.
function Tree(name, height, width, location, product, radius, color,) {//Parameters are assigned in this function.
    this.name = name; //The name property is  assigned the value that will be passed in the name parameter.
    this.height = height;//The height property is assigned the value that will be passed in the height parameter.
    this.width = width;//The  width property is assigned  the value that will be passed in the width parameter.
    this.location = location;//The location property is assigned the value that will  be passed in the  location parameter.
    this.product = product//The product property is assigned the value  that will be passed in the product parameter.
    this.radius = radius;//The radius property is assigned the value that will be passed in the radius parameter. 
    this.color = color//The color property is assigned the value that will be passed in the color parameter.
    this.planting= function(plantingStyle) {//The planting property is assigned a value that will come from this function.
        return    this.name  +  plantingStyle;//A return statement returning the name property  and whatever will be passed in the function  plantingStyle parameter. 
        
    }
    this.shedding= function(leavesshedding){//The shedding  property is assigned a value that will come from this method.
        return    this.name   +  leavesshedding;//A return statement returning the name property  and whatever will be passed in the leavesshedding parameter. 
}
    this.windybehavior = function(leaveswaving) {//The windy behavior is assigned a value that will come from this method. 
        return      this.name +   leaveswaving ;//A return statement that is returning the name property and whatever will be passed in the leaveswaving parameter. 
    }
}


//The firstTree is the first object to be instatiated using the constructor. 
const firstTree = new Tree(' Mutuba tree' , 300, 100, ' Mabira forest ' , 'We get COVID medicine', 50, 'Brown');
//Logging the firstTree object to the console.
console.log(firstTree);
//Logging an output to the console while  passing the arguement for the function that was assigned to the planting property.
console.log(firstTree.planting(' is planted using seeds .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the shedding property.
console.log(firstTree.shedding(' is shedding leaves  4 times a year .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the windybehavior property.
console.log(firstTree.windybehavior( ' is  dancing left and right  when the wind blows .'));


//The secondTree is the second object to be instatiated using the constructor.
const secondTree = new Tree(' Mvule tree ' , 200,  150, 'Bwindi forest' , ' We get COUGH medicine ' , 60, 'Light Grey')
//Logging the secondTree object to the console.
console.log(secondTree);
//Logging an output to the console while  passing the arguement for the function that was assigned to the planting property.
console.log(secondTree.planting(' is planted using stems .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the shedding property.
console.log(secondTree.shedding(' is shedding leaves  10 times a year .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the windybehavior property.
console.log(secondTree.windybehavior( ' is  dancing up and down when the wind blows .'));


//The thirdTree is the second object to be instatiated using the constructor.
const thirdTree = new Tree('Palm tree', 500, 100, 'Zanzibar coast ', ' We get palm oil ', 70, 'Light Brown')
//Logging the thirdTree object to the console.
console.log(thirdTree);
//Logging an output to the console while  passing the arguement for the function that was assigned to the planting property.
console.log(thirdTree.planting(' is planted using seeds .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the shedding property.
console.log(thirdTree.shedding(' is shedding leaves   once  a year .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the windybehavior property.
console.log(thirdTree.windybehavior( ' is  dancing right mostly  when the wind blows .'));

//A class of Aircraft with a template of the properties
function Aircraft( name, model, functionality , capacity, color, manufacturedate, engine ){
    this.name=name;//The name  property has been assigned the value  that will be passed inside the name parameter.
    this.model=model;//The  model property has been assigned the value  that will be passed inside the model parameter.
    this.functionality = functionality;//The functionality  property has been assigned the value that will be passed inside the functionality  parameter. 
    this.capacity = capacity;//The capacity property has been assigned the value that will be passed inside capacity parameter.
    this.color = color;//The  color property has been assigned the value that will be passed inside the color parameter. 
    this.manufacturedate = manufacturedate;//The manufacturedate has been assigned the value that will be passed inside the manufacturedate parameter. 
    this.engine= engine;//The engine has  been assigned the value that will be passed inside the engine parameter. 
    this.enginestart= function(enginerstartsound){//The enginestart property  has been assigned a value that will be  got from this  method
       return  this.name +  enginerstartsound;//A return statement that is returning the name property and whatever will be passed inside the parameter.
    }
    this.enginestop=function(enginestopsound){//The enginestop property has been assigned a value that will be  got from this  method
        return  this.name +  enginestopsound;//A return statement that is returning the name property and whatever will be passed inside the parameter.
    }
    this.landing= function (landingsound) {//The landing property has been assigned a value that will be  got from this  method
        return  this.name +  landingsound;//A return statement that is returning the name property and whatever will be passed inside the parameter.
        
    }

}

//The first object to be instantiated by the constructor. 
const firstAircraft = new Aircraft('Airbus A350 XWB' , 'AB009', 'Passenger plane', 3000, 'White', '13th October 2012', 3400005);
//Logging the firstAircraft object to the console.
console.log(firstAircraft);
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginerstart property.
console.log(firstAircraft.enginestart(' when  the engine is  turned on makes a squiking sound  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginestop property.
console.log(firstAircraft.enginestop('  when the engine is turned off makes a bubbling sound .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the landing property.
console.log(firstAircraft.landing( '  lands as its making a quaking sound when it touches down'));


//The second object to be instantiated by the constructor. 
const secondAircraft = new Aircraft(' Bombadier A689 WES', 'BO9057', 'Fighter Jet' , 400, 'Army Green', '10th January 2019', 46789046);
//Logging the secondAircraft object to the console.
console.log(secondAircraft);
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginerstart property.
console.log(secondAircraft.enginestart(' when  the engine is  turned on makes a boilinglike  sound  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginestop property.
console.log(secondAircraft.enginestop('  when the engine is turned off makes no  sound  at all.'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the landing property.
console.log(secondAircraft.landing( '  lands as it makes no sound  when it  touches down'));

//The third object to be instantiated by the constructor.
const thirdAircraft = new Aircraft('Boeing 767-300F' , 'BE67947', 'Chargo Plane', 6000, 'Aura Black' , '1st February 2010', 3697958);
//Logging the secondAircraft object to the console.
console.log(thirdAircraft);
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginerstart property.
console.log(thirdAircraft.enginestart(' when  the engine is  turned on makes a blast   sound  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the enginestop property.
console.log(thirdAircraft.enginestop('  when the engine is turned off makes a cracking  sound .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the landing property.
console.log(thirdAircraft.landing( '  lands as its making a rumbling mumbling  sound when it touches down'));

//A class of Parent with the different properties. 
function Tribe(name, traditionalleader, region, language ,ethnicgroup , staplefood, traditionalwear,  ) {
    this.name = name;//The name  property has been assigned the value  that will be passed inside the name parameter.
    this.traditionalleader= traditionalleader;//The traditionalleader property has been assigned to the value that will be passed inside the traditionalleader parameter.
    this.region = region ;//The region property has been assigned to the value that will be passed inside the region parameter. 
    this.language = language;//The language property has been assigned to the value that will be passed inside the language parameter. 
    this.ethnicgroup = ethnicgroup;//The ethnicgroup property has been assigned to the value that will be passed inside the ethnicgroup parameter
    this.staplefood = staplefood;//The staplefood property has been assigned to the value that will be passed inside the staplefood parameter.
    this.traditionalwear= traditionalwear;//The traditionalwear property has been assigned to the value that will be passed inside the traditionalwear parameter.
    this.succession = function (successionpattern) {//The succession property has been assigned to this method.
        return this.name + successionpattern; //A return statement that returns the name property and whatever will be passed inside the successionpattern.
    }
    this.naming=function(namingpattern) {//The naming property has been assigned to this method.
        return this.name + namingpattern; //A return statement that returns the name property and whatever will be passed inside namingpattern.
    }
    this.culturaldance= function (dance) {//The culturaldance property is assigned to this method.
        return this.name + dance ; //A return statement that returns the name property and whatever will be passed in dance.  
    }

}

//The first object to be instantiated by the constructor. 
const firstTribe = new Tribe('Baganda ', 'Kabaka', 'Central', 'Luganda', 'Bantu', 'Matooke & Nkooko', 'Gomesi & Kanzu');
//Logging the firstTribe object to the console.
console.log(firstTribe);
//Logging an output to the console while  passing the arguement for the function that was assigned to the succession property.
console.log(firstTribe .succession(' cultural leader is only succeded by his son, a king cannot be elected  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the naming property.
console.log(firstTribe .naming(' give names according to the clan you belong to, this is followed strictly.  '));
//Logging an output to the console while  passing the arguement for the function that was assigned to the culturaldance property.
console.log(firstTribe .culturaldance( ' traditional dance is the Amaganda dance '));

//The second object to be instantiated by the constructor. 
const secondTribe = new Tribe('Basoga' , 'Kyabazinga', 'Eastern', 'Lusoga', 'Bantu', 'Mbooli & Nvuruga','Gomesi & Kanzu');
//Logging the secondTribe object to the console.
console.log(secondTribe);
//Logging an output to the console while  passing the arguement for the function that was assigned to the succession property.
console.log(secondTribe .succession(' cultural leader is not necessarily  succeded by his son, a king can be elected  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the naming property.
console.log(secondTribe .naming(' give names according to the clan you belong to, but this may not be followed strictly, as some clans have the same names.  '));
//Logging an output to the console while  passing the arguement for the function that was assigned to the culturaldance property.
console.log(secondTribe .culturaldance( ' traditional dance is the Amasoga  dance '));

//The third object to be instantiated by the constructor. 
const thirdTribe = new Tribe('Batoro', 'Omukama', 'Western', 'Lutooro', 'Bantu', 'Akaalo & Filinda', 'Mushanana & Kanzu');
//Logging the thirdTribe object to the console.
console.log(thirdTribe);
//Logging an output to the console while  passing the arguement for the function that was assigned to the succession property.
console.log(thirdTribe .succession(' cultural leader is only succeded by his son, a king cannot be elected  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the naming property.
console.log(thirdTribe .naming(' give names according to the clan you belong to, however this is not strictly followed since names in clans can be the same, Pet names are also given. '));
//Logging an output to the console while  passing the arguement for the function that was assigned to the culturaldance property.
console.log(thirdTribe .culturaldance( ' traditional dance is the Orunyege-Ntogoro  dance '));


//A class of Toddler with the different properties. 
function Toddler(name, weight, height, color, gender, character,age ){
this.name = name;//The name property has been assigned to the value that will be passed inside the name parameter.
this.weight = weight;//The  weight property has been assigned the value that will be passed inside the weight parameter.
this.height = height;//The height property has been assigned the value that will be passed inside the height parameter.
this.color = color;//The color property has been assigned the value that will be passed inside the color parameter.
this.gender = gender;//The gender property has been assigned the value that will be passed inside the gender parameter.
this.character = character;//The character property has been assigned the value that will be passed inside the character parameter.
this.age = age;//The age property has been assigned the value that will be passed inside the age parameter.
this.laugh = function(laughsound){//The laugh property has been assigned this method. 
    return this.name + laughsound};//A return statement returns the name property and whatever will be passed inside laughsound.
this.cry = function(crysound){//The cry property has been assigned this method. 
    return this.name + crysound};//A return statement returns the name property and whatever will be passed inside crysound.
this.play = function(game){//The play property has been assigned this method. 
    return this.name + game};//A return statement returns the name property and whatever will be passed inside game.

}

//The first object to be instantiated by the constructor. 
const firstToddler = new Toddler ('Muyanja Joshua Emmanuel', 20, 100, 'Brown', 'Male', 'Extrovert', 4);
//Logging the firstToddler object to the console.
console.log(firstToddler);
//Logging an output to the console while  passing the arguement for the function that was assigned to the laugh property.
console.log(firstToddler.laugh(' laughs howling on the floor and rubbing his feet on the floor  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the cry property.
console.log(firstToddler.cry(' cries very loudly throwing himself in the air  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the play property.
console.log(firstToddler.play(' plays with a ball and mables as he juggles both  .'));

//The second object to be instantiated by the constructor. 
const secondToddler = new Toddler( 'Namuyanja Shalom Patience' , 30, 150, 'Black', 'Female', 'Introvert', 3); 
//Logging the secondToddler object to the console.
console.log(secondToddler);
//Logging an output to the console while  passing the arguement for the function that was assigned to the laugh property.
console.log(secondToddler.laugh(' laughs very quietly and is barely loud  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the cry property.
console.log(secondToddler.cry(' cries very quietly and hiddes when she cries  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the play property.
console.log(secondToddler.play(' plays with a building blocks and plays with a doll house .'));

//The second object to be instantiated by the constructor. 
const thirdToddler = new Toddler('Belicia Kisakye ', 20, 120, 'Black', 'Female', 'Introvert', 5);
//Logging the thirdToddler object to the console.
console.log(thirdToddler);
//Logging an output to the console while  passing the arguement for the function that was assigned to the laugh property.
console.log(thirdToddler.laugh(' laughs while jumping up and down then occasionally running around  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the cry property.
console.log(thirdToddler.cry(' cries very loudly, runs away and hides and  she doesnot come out  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the play property.
console.log(thirdToddler.play(' plays with  robots, crayons  and plays with a doll house .'));

//A class of Aircraft with a template of the properties
function Company(name, type, address, registrationnumber, lisence, age , constitution   ){
    this.name  = name;//The name property has been assigned a value that will be passed inside the name parameter.
    this.type= type;//The type property has been assigned a value that will be passed inside the type parameter.
    this.address = address; //The address  property has been assigned a value that will be passed inside the address parameter. 
    this.registrationnumber= registrationnumber;//The registrationnumber property has been assigned a value that will be passed inside the registrationnumber paramter.
    this.lisence= lisence;//The lisence property has been assigned a value that will be  passed inside the lisence parameter. 
    this.age = age;//The age property has been assigned a value that will be passed inside the age parameter.
    this.constitution = constitution;//The constitution property has been assigned a value that will be passed inside the constitution parameter.
    this.CSR = function (activity) {//The CSR property has been assigned a value that will come from this method. 
      return this.name + activity; //A return statement that returns the name property and whatever will be passed inside activity. 
    }
    this.paytaxes=function(tax){//The paytaxes property has been assigned a value that will come from this method.
        return this.name + tax; //A return statement that returns the name property and whatever will be passed in tax.
    }
    this.paysalaries=function(salaries){//The paysalaries property has been assigned a value that will come from this method. 

        return this.name + salaries; //A return statement that returns the name property and  whatever will be passed inside salaries.
    }
       
}


//The first object to be instantiated by the constructor. 
const firstCompany = new Company('USHINDI CO.' , 'Non-profit organization', '65Street Brooklyn' , 'REG003564' , 'NGO lisence', 1 , 'NGO  Laws' );
//Logging the firstComapay object to the console.
console.log(firstCompany);
//Logging an output to the console while  passing the arguement for the function that was assigned to the CSR property.
console.log(firstCompany.CSR(' cleans the streets of Brooklyn as part of the CSR of the organization  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paytaxes property.
console.log(firstCompany.paytaxes('  pays the company taxes of upto a tune of $50000 once every year.'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paysalaries property.
console.log(firstCompany.paysalaries('  pays the company salaries to employees  of upto a tune of $1000  every month.'));


//The second object to be instantiated by the constructor. 
const secondCompany = new Company ('ORARE CO.', 'Profit Organization ', 'Rwenzori Towers,Nakasero', 'REG86849', 'Mining lisense', 25, 'Company law');
//Logging the secondComapay object to the console.
console.log(secondCompany);
//Logging an output to the console while  passing the arguement for the function that was assigned to the CSR property.
console.log(secondCompany.CSR(' donates money to the Sanyu babies home orphanage  as part of the CSR of the organization  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paytaxes property.
console.log(secondCompany.paytaxes('  pays the company taxes of upto a tune of $1,000,000 once every year.'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paysalaries property.
console.log(secondCompany.paysalaries('  pays the company salaries to employees  of upto a tune of $950,000  every month.'));

//The third object to be instantiated by the constructor. 
const thirdCompany = new Company('MATO PRESS CO.', 'Profit Organization', '13 Industial street, Namanve', 'REG4674049', 'Manufacturing lisence', 75, 'Company Law');
//Logging the thirdComapay object to the console.
console.log(thirdCompany);
//Logging an output to the console while  passing the arguement for the function that was assigned to the CSR property.
console.log(thirdCompany.CSR(' donates money to the Kiruddu referral hospital  as part of the CSR of the organization  .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paytaxes property.
console.log(thirdCompany.paytaxes('  pays the company taxes of upto a tune of $900,000 once every year.'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the paysalaries property.
console.log(thirdCompany.paysalaries('  pays the company salaries to employees  of upto a tune of $550,000  every month.'));


//A class of Watervessel with the different properties. 
function Watervessel(name, type, capacity, engine, color, height, model,   ){
    this.name = name;//The name property has been assigned a value that will be passed inside the name parameter.
    this.type = type;//The type property has been assigned a value that will be passed inside the type parameter.
    this.capacity= capacity;//The capacity property has been assigned a value that will be passed inside the capacity parameter.
    this.engine = engine;//The engine property  has been assigned a value that will be passed inside the engine parameter.
    this.color = color;//The color property has been assigned a value that will be passed inside the color parameter.
    this.height = height;//The height property has been assigned a value that will be passed inside the height parameter.
    this.model = model//The model property has been assigned a value that will be passed inside the model parameter.
    this.boatenginestart = function(boatenginestartsound){//The boatenginestart property has been assigned the value that will come from this method. 
     return    this.name + boatenginestartsound;//A return statement that returns the name property and whatever will be passed inside boatenginestartsound. 
    }
    this.boatenginestop = function (boatenginestopsound) {//The boatenginestop has been assigned the value that will come from this method.
        return    this.name + boatenginestopsound; //A return statement that returns the name property and whatever will be passed inside boatenginestopsound. 
    }
     
}

//The first object to be instantiated by the constructor. 
const firstWatervessel = new Watervessel('Dirty Oar', 'Yatch', 400, 'DO56783', 'WhiteSmoke ', 1200, 'OAR46682');
//Logging the firstWatervessel object to the console.
console.log(firstWatervessel);
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestart property.
console.log(firstWatervessel.boatenginestart(' makes a rumbling sound when the engine is started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestop property.
console.log(firstWatervessel.boatenginestop('  makes a squiking sound when the engine is stopped.'));

//The second object to be instantiated by the constructor. 
const secondWatervessel = new Watervessel('TITANIC', 'Ship', 650000, 'TI764787', 'White', 7894657 , 'RMS TITANIC');
//Logging the secondWatervessel object to the console.
console.log(secondWatervessel);
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestart property.
console.log(secondWatervessel.boatenginestart(' made a bubbling  sound when the engine  started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestop property.
console.log(secondWatervessel.boatenginestop('  made a sharp steamy sound when the engine  stopped.'));

//The third object to be instantiated by the constructor. 
const thirdWatervessel = new Watervessel('Tumeric', 'Boat', 537838, 'TM23774ER', 'Ocean Blue', 1009384 , 'TUM3648D');
//Logging the thirdWatervessel  object to the console.
console.log(thirdWatervessel);
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestart property.
console.log(thirdWatervessel.boatenginestart(' makes  a thunderous  sound when the engine  is  started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the boatenginestop property.
console.log(thirdWatervessel.boatenginestop('  makes no sound  at all  when the engine  stopped, for some reason its a quiet halt.'));

//A class of Train with the different properties. 
function Train(name, type, capacity, engine, color, height, model,   ){
    this.name = name;//The name property has been assigned a value that will be passed inside the name parameter.
    this.type = type;//The type property has been assigned a value that will be passed inside the type parameter.
    this.capacity= capacity;//The capacity property has been assigned a value that will be passed inside the capacity parameter.
    this.engine = engine;//The engine property  has been assigned a value that will be passed inside the engine parameter.
    this.color = color;//The color property has been assigned a value that will be passed inside the color parameter.
    this.height = height;//The height property has been assigned a value that will be passed inside the height parameter.
    this.model = model//The model property has been assigned a value that will be passed inside the model parameter.
    this.trainenginestart = function(trainenginestartsound){//The trainenginestart property has been assigned the value that will come from this method. 
     return    this.name + trainenginestartsound;//A return statement that returns the name property and whatever will be passed inside trainenginestartsound. 
    }
    this.trainenginestop = function (boatenginestopsound) {//The trainenginestop has been assigned the value that will come from this method.
        return    this.name + boatenginestopsound; //A return statement that returns the name property and whatever will be passed inside boatenginestopsound. 
    }
     
}

//The first object to be instantiated by the constructor. 
const firstTrain = new Train('Flying Scotsman', 'Steam  train', 25000, 'FS7773T',  'Gray ', 96570, 'FM73873' );
//Logging the firstTrain object to the console.
console.log(firstTrain);
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestart property.
console.log(firstTrain.trainenginestart(' makes  a thunderous  sound that shakes the ground when the engine  is  started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestop property.
console.log(firstTrain.trainenginestop('  makes a squiking sound  when the engine  stopped .'));

//The second object to be instantiated by the constructor. 
const secondTrain = new Train('Bullet Train', 'Electric  train', 285600, 'BU7773T',  'White ', 62390, 'BT88886' );
//Logging the secondTrain object to the console.
console.log(secondTrain);
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestart property.
console.log(secondTrain.trainenginestart(' makes  a bubbling   sound  when the engine  is  started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestop property.
console.log(secondTrain.trainenginestop('  makes no sound at all  when the engine is  stopped, it just quietly halts .'));

//The third object to be instantiated by the constructor. 
const thirdTrain = new Train('Eurostar Train', 'Steam  train', 568908 , 'EU67693',  'Black ', 100000, 'EURO479D ' );
//Logging the thirdTrain object to the console.
console.log(thirdTrain);
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestart property.
console.log(thirdTrain.trainenginestart(' makes  a swissssing   sound  when the engine  is  started .'));
//Logging an output to the console while  passing the arguement for the function that was assigned to the trainenginestop property.
console.log(thirdTrain.trainenginestop('  makes a squiky sound  when the engine is  stopped.'));

