from .db import db


class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    disc_id = db.Column(db.Integer, db.ForeignKey(
        "discs.id"), nullable=False)

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "disc_id": self.disc_id,
        }
