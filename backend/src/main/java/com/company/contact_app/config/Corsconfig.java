package com.company.contact_app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.company.contact_app.entity.Contact;
import com.company.contact_app.env.SettingsApp;

@Configuration
class CorsConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
            CorsRegistry cors) {
        config.exposeIdsFor(Contact.class);
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(SettingsApp.getHOST())
                .allowedMethods("GET", "POST", "DELETE", "PUT")
                .allowCredentials(true);
    }

}
