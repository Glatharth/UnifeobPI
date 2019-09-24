import React from 'react';

import 'bulma';

// import { Container } from './styles';

import {loadPeoples} from "../../../services/api";

const list = loadPeoples();

export default function ListPeoples() {
    return (
        <>
            <div className="columns is-multiline">
                {list.map(id =>
                    <div className="column is-two-fifths">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-96x96">
                                            <img src={id.photo} alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{id.name}</p>
                                        <p className="subtitle is-6">{id.information.psychologist}</p>
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