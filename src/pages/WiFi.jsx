import React, { Component } from 'react'

import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

const HeaderStyle = {
	width:"100%",
	height:"150px",
	justifyContent: 'center',
	textAlign: 'center',
}
const cardStyle = {
	width:"100%",
	height:"450px",
	justifyContent: 'center',
	textAlign: 'center',
	padding: "5%"
}
const colStyle= {
	justifyContent: 'center',
	textAlign: 'center'
}
const gridStyle= {
	justifyContent:'center'
}

export default class WiFi extends Component {
	constructor(){
		super()
		this.state = {
			APS: [
				{
					name: "PLDT-HOMEDSL",
					signal: -65
				}
			]
		}
	}
	render(){
		const { APS } = this.state

		const deviceOverviewTable = (
			<DataTable plain>
				<TableBody>
					<TableRow>
						<TableColumn>Mode</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Status</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>IP Address</TableColumn>
						<TableColumn>IPAddress</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Signal Strength</TableColumn>
						<TableColumn>IPAddress</TableColumn>
					</TableRow>
				</TableBody>
			</DataTable>
		)
		const WiFi_APS = (
			<DataTable>
				<TableHeader>
					<TableRow>
						<TableColumn>Access Point</TableColumn>
						<TableColumn>Signal</TableColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						APS.map((item, i)=>{
							return(
								<TableRow key={i}>
									<TableColumn>{item.name}</TableColumn>
									<TableColumn>{item.signal}</TableColumn>
								</TableRow>
							)
						})
					}
				</TableBody>
			</DataTable>
		)
		
		return (
			<div className="App" >
				<div className="md-grid" style={gridStyle}>
				
					<div className="md-cell--6">
						<Card style={cardStyle}>
							<CardTitle title="WiFi Status"/>
							{deviceOverviewTable}
						</Card>
          </div>
          
					<div className="md-cell--6">
						<Card style={cardStyle}>
							<CardTitle title="WiFi Networks"/>
							{WiFi_APS}

							<div className="md-cell--bottom">
							
							<CardActions>
								<Button raised label="Action 1" />
								<Button raised label="Action 2" />
							</CardActions>
							</div>
							</Card>
					</div>
				</div>
      </div>
		) 
	}
}