# AutomationPracticeTests

This is a simple build to represent a framework for autmated tests using Cucumber.

## Get the code

Git:

    git clone https://github.com/Aboppudi21/AutomationPracticeTests.git
    cd Java-Projects

## Use Gradle

Open a command window and run:

    mvn clean test

This runs Cucumber features, found under `src/test/resource`

## Viewing the reports


The Cucumber runtime parses command line options to know what features to run, where the glue code lives, what plugins to use etc.
When you use the JUnit runner, these options are generated from the `@CucumberOptions` annotation on your test.

Sometimes it can be useful to override these options without changing or recompiling the JUnit class. This can be done with the
`cucumber.options` system property. The general form is:

Using Gradle:

    gradlew -Dcucumber.options="..." test

Let's look at some things you can do with `cucumber.options`. Try this:

    -Dcucumber.options="--help"

That should list all the available options.

### Run a subset of Features or Scenarios

Specify a particular scenario by *line* (and use the pretty plugin, which prints the scenario back)

    -Dcucumber.options="classpath:skeleton/belly.feature:4 --plugin pretty"

This works because Maven puts `./src/test/resource` on your `classpath`.

### Specify a different formatter:

For example a JUnit formatter:

    -Dcucumber.options="--plugin junit:target/cucumber-junit-report.xml"

