# Magic the gathering database. 
It'll be populated with one set. Players will be able to view all the cards and filter them by any of their values or combination of (color, cost, artist, etc...). Players will be able to save cards they like into a collection to create a deck.

One to one: a card can only have one card name and id and an id and card name can only be on one card.

One to many: a card will have one artist, a list of evergreen words (if applicable. For example, a creature would only have one instance of Trample (example of an evergreen word) that would be applicable to it, though it could appear numerous times on a card.). A card can have one type, but be on many cards.

many to many: Many artists can have their artwork on many cards. Many cards can have many different colors. Many cards can have many evergreen words and colors and/or types.