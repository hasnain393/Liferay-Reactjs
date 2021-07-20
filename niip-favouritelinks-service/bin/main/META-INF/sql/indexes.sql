create index IX_FF3AC0B5 on niip_favouritelinks (title[$COLUMN_LENGTH:75$]);
create index IX_63D6E627 on niip_favouritelinks (uuid_[$COLUMN_LENGTH:75$], companyId);
create unique index IX_B260CA69 on niip_favouritelinks (uuid_[$COLUMN_LENGTH:75$], groupId);