import React from 'react';
import { graphql } from 'gatsby';
import { Flex, View, Heading, Text, Divider } from '@adobe/react-spectrum';

 const Weapons = (props) => {
   console.log(props);
  const { data } = props;
  return (
    <>
      <Heading level={2} gap="size-0" >{data.weaponYaml.name}</Heading>
      <Divider marginBottom="size-100" />
      <View><Text>{data.weaponYaml.weapon.type}</Text></View>
      <View><Text>{data.weaponYaml.weapon.description}</Text></View>
      <div className="spectrum-Table" role="grid">
        <div className="spectrum-Table-head" style={{display: 'flex'}} role="row">
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Break
          </div>
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Block
          </div>
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Constitution
          </div>
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Courage
          </div>
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Stamina
          </div>
          <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" tabIndex="0">
            Strength
          </div>
        </div>
        <div className="spectrum-Table-body" role="rowgroup" style={{height: "120px"}}>
          <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
            <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.break}
            </div>
            <div classname="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.block}
            </div>
            <div classname="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.stats.constitution}
            </div>
            <div classname="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.stats.courage}
            </div>
            <div classname="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.stats.stamina}
            </div>
            <div classname="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">
              {data.weaponYaml.weapon.stats.strength}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Weapons;

export const query = graphql`
  query($slug: String!) {
    weaponYaml(fields: { slug: { eq: $slug } }) {
      name
      weapon {
        type
        description
        break
        block
        stats {
          constitution
          courage
          stamina
          strength
        }
      }
    }
  }
`