exports.up = function(knex){
    return knex.schema.createTable('account', (table) => {
      
      table.increments("user_id");
  
      table.string('name');    
      
      table.string("birthData");

      table.string("sex");

      table.string("email");

      table.string("password");

      table.string("uf");

      table.boolean("administer");
      
    })
    .then(()=>console.log("Success Table Users"))    
  }; 
  
  exports.down = function (knex) {
    return knex.schema.dropTable('account')
  };