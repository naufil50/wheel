#!/bin/sh

set -e
echo "ENVIRONMENT: $RAILS_ENV"

# remove any existing pid file
rm -f $APP_PATH/tmp/pids/server.pid

cp $APP_PATH/config/database.yml.postgresql $APP_PATH/config/database.yml

# append bundle exec to every command
bundle exec ${@}