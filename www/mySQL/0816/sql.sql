#1. 데이터베이스 sakila의 actor 테이블에서 배우의 이름과 성을 출력하라.
use sakila;
select first_name, last_name from actor;


#2. 데이터베이스 world의 country에서 나라이름이 아프카니스탄, 방글라데시, 중국인인 곳의 컬럼을 출력하라.
use world;
select * from country 
where name ="Afghanistan" or name = "Bangladesh" or name = "China";
#└> 동일: select * from country where name in(,"Afghanistan", "Bangladesh", "China");


#create, alter, drop
#3. actor 컬럼의 middle_name을 first_name과 last_name 사이에 추가하라(DDL)
alter table actor add middle_name varchar(45) after first_name;
desc actor;


#4. 추가한 컬럼 이름을 middle_name에서 blob으로 변경하라(DDL)
alter table actor modify column middle_name blob;


#5. 추가한 컬럼을 삭제하라
alter table actor drop column middle_name;


#6. 데이터베이스 sakila에서 회원의 풀네임과 주소를 출력하라.
(#select * from 테이블1 join 테이블2 on 테이블1.컬럼명=테이블2.컬럼명….)
select s.first_name as fname, s.last_name as lname, a.address as addr 
from staff s INNER JOIN address a
on s.address_id = a.address_id;

#city 테이블의 내용에서 국가코드 'kor'인 도시들을 city_new 테이블을 만들어 넣어 보자.
use world;
create table city_e_asia select name, countryCode from city where countryCode='kor';
select * from city_e_asia;
drop table city_new;

#city_e_asia 테이블에 일본을 추가하시오.
insert into city_e_asia select name, countryCode from city where countryCode = "chn";
drop table city_e_asia;


#도시명과 countryCode population 컬럼이 있는 city_new 테이블을 만들고 city 테이블에서 population이 백만 이상인도시들만 city_new에 입력하시오.
create table city_new select name, countrycode, population from city;
insert into city_new select name, countrycode, population from city where Population >= 1000000;
select * from city_new;


#city에서 도시명이 3자를 넘는 경우 앞쪽 세 글자를 대문자로 출력, 도시인구수도 출력
select
 case
	when length(Name) > 5 
		then upper(mid(Name, 1, 3))
	when length(Name) <= 5
		then mid(Name, 1, 3)
	end as names,
		population from city;





















