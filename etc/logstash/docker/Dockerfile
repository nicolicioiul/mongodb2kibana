# https://github.com/elastic/logstash-docker
FROM docker.elastic.co/logstash/logstash:7.3.2
USER root
# Add your logstash plugins setup here
RUN logstash-plugin install logstash-input-mongodb
# Example: RUN logstash-plugin install logstash-filter-json
RUN logstash-plugin install logstash-filter-aggregate
RUN mkdir -p /scalaoutput/ELK/logstash-7.5.1/db_dir
RUN chmod -R 777 /scalaoutput/ELK/logstash-7.5.1/db_dir