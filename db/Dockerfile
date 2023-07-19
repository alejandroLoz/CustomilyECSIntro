FROM postgres:alpine

ENV POSTGRES_USER=devopsChallenge \
    POSTGRES_PASSWORD=superSecurePassword \
    POSTGRES_DB=devopsChallengeDatabase

COPY init.sql /docker-entrypoint-initdb.d/