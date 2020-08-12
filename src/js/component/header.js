import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
/* import { DropdownItem } from "react-bootstrap/DropdownItem";
import { DropdownButton } from "react-bootstrap/DropdownButton"; */

export function Header() {
	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<img src="https://images.moviesanywhere.com/d31f56d46deb859a13c976d2e621731f/7451b8bf-a6d7-4586-8764-531564416425.png?r=2x1&w=300" />

				<Dropdown className="dropdown">
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>
					<Dropdown.Menu className="drop_menu ">
						<Dropdown.Item className="text-warning" href="#/action-1">
							Action
						</Dropdown.Item>
						<Dropdown.Item className="text-warning" href="#/action-2">
							Another action
						</Dropdown.Item>
						<Dropdown.Item className="text-warning" href="#/action-3">
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
}
