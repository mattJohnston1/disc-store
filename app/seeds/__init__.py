from flask.cli import AppGroup
from .users import seed_users, undo_users
from .brands import seed_brands, undo_brands
from .types import seed_types, undo_types
from .stabilities import seed_stabilities, undo_stabilities
from .discs import seed_discs, undo_discs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_brands()
    seed_types()
    seed_stabilities()
    seed_discs()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_brands()
    undo_types()
    undo_stabilities()
    undo_discs()
    # Add other undo functions here
