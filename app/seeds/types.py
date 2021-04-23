from app.models import db, Type

# Adds a demo user, you can add other users here if you want
def seed_types():

    type1 = Type(type="Distance Driver")
    type2 = Type(type="Midrange")
    type3 = Type(type="Putter")

    db.session.add(type1)
    db.session.add(type2)
    db.session.add(type3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_types():
    db.session.execute('TRUNCATE types;')
    db.session.commit()
