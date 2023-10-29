use world;

select count(*) from city where countrycode is null;

#insert를 이용하여 city 테이블에 id 10000 name gimpo countrycode "" district ky population 100000를 입력하시오.

#country 값이 존재하지 않는 city 포함 조회
select count(*) from city left join country on city.countrycode= country.code;

#country주엥 도시 수가 하나도 없는 country

INSERT INTO city
SELECT * FROM city
WHERE id = 10000 and name = "gimpo" and countrycode = "" and district = "ky" and population = 100000;

#select * from 테이블1 join 테이블2 on 테이블1.컬럼명=테이블2.컬럼명….
# 1. city 테이블과 country 테이블의 공통되는 부분을 확인하여 그 컬럼을 이용하여 조인하시오.
select * from city join country
on city.CountryCode = country.Code;

# 2. countryCode와 해당 나라의 GNP를 출력하시오.
select * from city join country
on city.CountryCode = country.code;

select city.CountryCode, country.GNP, LifeExpectancy
from city join country
on city.CountryCode = country.code;

