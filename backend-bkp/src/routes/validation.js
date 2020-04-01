const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  
  incidents: {
    
    create: celebrate({
      
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown(),

      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(5),
        description: Joi.string().required().min(5),
        value: Joi.number().required().min(2)
      })
      
    }),
    
    list: celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    }),

    delete: celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    }),

  },

  profile: {
    list: celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },

  ongs: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        name:     Joi.string().required(),
        email:    Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city:     Joi.string().required(),
        uf:       Joi.string().required().length(2),
      })
    })
  },

  sessions: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
      })
    })
  }

}