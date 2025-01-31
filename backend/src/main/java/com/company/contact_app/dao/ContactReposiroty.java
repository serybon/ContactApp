package com.company.contact_app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.contact_app.entity.Contact;

public interface ContactReposiroty extends JpaRepository<Contact, Long> {

}
