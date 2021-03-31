from app.models import db, Stability

# Adds a demo user, you can add other users here if you want
def seed_stabilities():

    stability1 = Stability(stability="Overstable")
    stability2 = Stability(stability="Stable")
    stability3 = Stability(stability="Understable")


    db.session.add(stability1)
    db.session.add(stability2)
    db.session.add(stability3)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_stabilities():
    db.session.execute('TRUNCATE stabilities;')
    db.session.commit()
