from app.models import db, Brand

# Adds a demo user, you can add other users here if you want
def seed_brands():

    brand1 = Brand(brand="Discraft")
    brand2 = Brand(brand="Innova")
    brand3 = Brand(brand="Dynamic Discs")

    db.session.add(brand1)
    db.session.add(brand2)
    db.session.add(brand3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_brands():
    db.session.execute('TRUNCATE brands;')
    db.session.commit()
