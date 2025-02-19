CREATE TABLE `stories` (
	`id` integer PRIMARY KEY NOT NULL,
	`afaOffice` text NOT NULL,
	`linkedinProfileUrl` text NOT NULL,
	`Outcome` text NOT NULL,
	`story` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
