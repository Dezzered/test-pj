package by.morozv.support.documents.script;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Slf4j
@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping("/test")
    public List<String> getList() {
        return Arrays.asList("a", "b", "c", "d");
    }

    @RequestMapping("/userInfo")
    public List<User> getUsers(@RequestParam(value = "testParam") String testParam) {
        log.info("param value {}", testParam);
        User user = new User();
        user.setName("Name");
        user.setSecondName("SecondName");

        User user1 = new User();
        user1.setName("Name1");
        user1.setSecondName("SecondName1");

        return Arrays.asList(user, user1);
    }

}
