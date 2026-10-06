import { IsString, IsArray, IsBoolean, IsOptional } from 'class-validator';

export class CreateBlogDto {
  @IsString() title: string;
  @IsString() slug: string;
  @IsString() excerpt: string;
  @IsString() content: string;
  @IsArray() @IsOptional() tags: string[];
  @IsString() @IsOptional() coverImage: string;
  @IsBoolean() @IsOptional() published: boolean;
  @IsBoolean() @IsOptional() featured: boolean;
}
