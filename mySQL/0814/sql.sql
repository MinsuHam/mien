use world;

select count(*) from city where countrycode is null;

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



# 국가코드 kor인 도시들 중 인구수 많은 순서로 상위 10개만 조회하자.
select * from city where CountryCode = 'kor' 
order by Population desc
#page함수 = (page -1) * 목록 수
limit 10, 20;

#select aggregation_function(컬럼명) from 테이블명 where 조건절; 
#city 테이블에서 
#한국의 도시 수
#한국의 인구수 총합
#한국의 인구수 평균
#한국의 도시중 가장 인구수가 많은 도시의 인구수
#한국의 도시중 가장 인구수가 적은 도시의 인구수

select count(*) from city where CountryCode = 'kor';
select sum(Population) from city where CountryCode = 'kor';
select avg(Population) from city where CountryCode = 'kor';
select max(Population) from city where CountryCode = 'kor';
select min(Population) from city where CountryCode = 'kor';

#1. Country에서 name의 글자수를 출력
#2. Country에서 나라명(Name)의 앞 세글자만 뽑아서 대문자로 출력하라
#3. 기대수명(LifeExpectancy)을 소수점 첫쨰자리에서 반올림해서 표시.alter

select length(name) , name from country;
select upper(mid(name,1,3)) from country;
select round(LifeExpectancy, 0) from country;

select left(name,3) from country; 







