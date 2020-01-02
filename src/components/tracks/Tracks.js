import React from "react";
import { Fragment } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/spinner";
import Track from "./Track";

class Tracks extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track}></Track>
                  ))}
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
