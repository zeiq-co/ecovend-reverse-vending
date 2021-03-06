import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .heading {
    padding-left: 0.75rem;
  }
  .table td,
  .table th {
    border: none;
    padding: 1rem 0.5rem 1rem 1rem;
    line-height: 34px;
  }

  .table th {
    font-weight: 600;
  }

  .table.is-striped tbody tr:not(.is-selected):nth-child(odd) {
    background-color: #fafafa;
  }

  .table.is-striped tbody tr:not(.is-selected):nth-child(even) {
    background-color: #fde6d8 !important;
  }

  .table__wrapper {
    overflow-x: auto;
  }

  .data {
    width: 100%;
  }

  .panel-block {
    border: none;
  }

  .image {
    height: auto;
    width: 70%;
  }
`;

const Machines = ({ data }) => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4 has-text-centered">
            <h1 className="title is-5 has-text-danger">
              MODEL:<span> {data.machineName}</span>
            </h1>
            <img
              src={data.machineImage.file.url}
              alt={data.machineImage.title}
            />
          </div>
          <div className="column">
            <h1 className="title is-5 has-text-danger heading">
              SPECIFICATIONS
            </h1>
            <div className="panel">
              <div className="panel-block">
                <div className="data">
                  <div className="table__wrapper">
                    <table className="table  is-fullwidth is-striped">
                      <tbody>
                        {data.location && (
                          <tr>
                            <th>LOCATION:</th>
                            <td>{data.location}</td>
                          </tr>
                        )}
                        {data.dimensions && (
                          <tr>
                            <th>DIMENSIONS:</th>
                            <td>
                              {data.dimensions &&
                                data.dimensions.map(items => (
                                  <span className="is-block">{items}</span>
                                ))}
                            </td>
                          </tr>
                        )}
                        {data.screenSize && (
                          <tr>
                            <th>SCREEN SIZE:</th>
                            <td>
                              {data.screenSize &&
                                data.screenSize.map(items => (
                                  <span className="is-block">{items}</span>
                                ))}
                            </td>
                          </tr>
                        )}
                        {data.touchScreen && (
                          <tr>
                            <th>TOUCH SCREEN:</th>
                            <td>{data.touchScreen}</td>
                          </tr>
                        )}
                        {data.rewardsSystems && (
                          <tr>
                            <th>REWARD SYSTEM:</th>
                            <td>{data.rewardsSystems}</td>
                          </tr>
                        )}
                        {data.materialTypes && (
                          <tr>
                            <th>MATERIAL TYPES:</th>
                            <td>{data.materialTypes}</td>
                          </tr>
                        )}
                        {data.capacity && (
                          <tr>
                            <th>CAPACITY:</th>
                            <td>{data.capacity}</td>
                          </tr>
                        )}
                        {data.automation && (
                          <tr>
                            <th>AUTOMATION:</th>
                            <td>{data.automation}</td>
                          </tr>
                        )}
                        {data.maxContainerSize && (
                          <tr>
                            <th>MAX CONTAINER SIZE:</th>
                            <td>{data.maxContainerSize}</td>
                          </tr>
                        )}
                        {data.materialSortingCompaction && (
                          <tr>
                            <th>MATERIAL SORTING & COMPACTION:</th>
                            <td>{data.materialSortingCompaction}</td>
                          </tr>
                        )}
                        {data.outputs && (
                          <tr>
                            <th>OUTPUTS:</th>
                            <td>{data.outputs}</td>
                          </tr>
                        )}
                        {data.reporting && (
                          <tr>
                            <th>REPORTING:</th>
                            <td>{data.reporting}</td>
                          </tr>
                        )}
                        {data.powerSupply && (
                          <tr>
                            <th>POWER SUPPLY:</th>
                            <td>{data.powerSupply}</td>
                          </tr>
                        )}
                        {data.productivity && (
                          <tr>
                            <th>PRODUCTIVITY</th>
                            <td>{data.productivity}</td>
                          </tr>
                        )}
                        {data.ipRating && (
                          <tr>
                            <th>IP RATING:</th>
                            <td>{data.ipRating}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Machines;
