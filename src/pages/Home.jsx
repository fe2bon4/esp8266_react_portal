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

export default class Home extends Component {

	render(){

		const deviceOverviewTable = (
			<DataTable plain>
				<TableBody>
					<TableRow>
						<TableColumn>Device Name</TableColumn>
						<TableColumn>HOSTNAME</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>WiFi Mode</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>WiFi Status</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>WiFi IP Address</TableColumn>
						<TableColumn>IPAddress</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Connection to Server</TableColumn>
						<TableColumn>Not Connected</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Serial Baudrate</TableColumn>
						<TableColumn>SerialBaudRate</TableColumn>
					</TableRow>
				</TableBody>
			</DataTable>
		)
		const systemDataTable = (
			<DataTable plain>
				<TableBody>
					<TableRow>
						<TableColumn>Flash Chip</TableColumn>
						<TableColumn>HOSTNAME</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Flash ID</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn>Flash Size</TableColumn>
						<TableColumn></TableColumn>
					</TableRow>
				</TableBody>
			</DataTable>
		)
		
		return (
			<div className="App" >
				<div className="md-grid" style={gridStyle}>
				
					<div className="md-cell--12" style={HeaderStyle}>
						<Card style={{backgroundColor:'#222'}}>
							<CardText >
								<img src="logo.svg" className="App-logo" alt="logo" />
						</CardText>			
						</Card>
					</div>

					<div className="md-cell--6">
						<Card style={cardStyle}>
							<CardTitle title="Device Overview"/>
							{deviceOverviewTable}
						</Card>
          </div>
          
					<div className="md-cell--6">
						<Card style={cardStyle}>
							<CardTitle title="Chip Information Hello World"/>
							{systemDataTable}
						</Card>
					</div>
				</div>
      </div>
		) 
	}
}