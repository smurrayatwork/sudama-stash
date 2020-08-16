import React from 'react';
import { graphql } from 'gatsby';

 const Weapons = (props) => {
   console.log(props);
  const { data } = props;
  return (
    <>
  <h2>{data.weaponYaml.name}</h2>
  <div>{data.weaponYaml.weapon.type}</div>
  <div>{data.weaponYaml.weapon.description}</div>
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
      }
    }
  }
`