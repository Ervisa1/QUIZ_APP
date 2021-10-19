FROM maven:3.6.3-openjdk-11 AS maven_build

COPY pom.xml /tmp/

COPY src /tmp/src/

WORKDIR /tmp/

RUN mvn package

#pull base image

FROM openjdk

#expose port 8080
EXPOSE 8080

#default command
CMD java -jar /data/quiz-0.0.1-SNAPSHOT.jar

#copy hello world to docker image from builder image

COPY --from=maven_build /tmp/target/quiz-0.0.1-SNAPSHOT.jar /data/quiz-0.0.1-SNAPSHOT.jar
