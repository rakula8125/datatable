package com.test.datatable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class DataTableApplication extends SpringBootServletInitializer {
	
	private static Logger logger = LoggerFactory.getLogger(DataTableApplication.class);
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(DataTableApplication.class);
    }
	
	public static void main(String[] args) {
		ConfigurableApplicationContext applicationContext = 
				SpringApplication.run(DataTableApplication.class, args);
		
		if(logger.isDebugEnabled()) {
			for(String name : applicationContext.getBeanDefinitionNames()) {
				logger.debug(name);
			}
		}
	}
}
