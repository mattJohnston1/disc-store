from .db import db


class Watchlist(db.Model):
      __tablename__ = 'watchlist'

      id = db.Column(db.Integer, primary_key=True)
      user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
      disc_id = db.Column(db.Integer, db.ForeignKey("discs.id"), nullable=False)


      def to_dict(self):
          return {
            "disc_id": self.disc_id,
          }
