import React from 'react';

import 'bulma';

// import { Container } from './styles';

import {loadPeoples} from "../../../services/api";

const list = loadPeoples();

const max_taglist = 3;
const ConditionList = (props) => {
    let tags;
    return (
            {props.tags.map((id, index) =>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">{props.name}</span>
                        <span className="tag is-info">{props.score}</span>
                    </div>
                </div>
            )}
        );
    }else{
        return (<a href={"/"}>More...</a>);
    }
};


export default function ListPeoples() {
    return (
        <>
            <div className="columns is-multiline">
                {list.map((id) =>
                    <div className="column is-two-fifths">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-96x96">
                                            <img src={id.photo} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{id.name}</p>
                                        <p className="subtitle is-6">{id.information.psychologist}</p>
                                        <div className="field is-grouped is-grouped-multiline">



                                            <ConditionList tags={id.information.tags}/>



                                        </div>

                                    </div>
                                </div>
                                <div className="content">
                                    {id.information.content}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}