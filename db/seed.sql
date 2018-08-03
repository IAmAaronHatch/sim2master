create table houses (
    id serial primary key,
    name varchar(20),
    address text,
    city text,
    state varchar(2),
    zipcode integer
);

insert into houses (
    name, address, city, state, zipcode
) values (
    'Aaron', '123 fake lane drive', 'Salt Lake City', 'UT', 90000
), ('Hannah', '124 fakest lane drive', 'SLC', 'UT', 90000);

alter table houses
add image text,
monthlyMortgage integer,
desiredRent integer;

select * from houses;

