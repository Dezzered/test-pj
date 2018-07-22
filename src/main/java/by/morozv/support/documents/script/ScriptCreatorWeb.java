package by.morozv.support.documents.script;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class ScriptCreatorWeb {

    @RequestMapping("/")
    public String welcome(Map<String,Object> model){
        return "/welcome";
    }
}
