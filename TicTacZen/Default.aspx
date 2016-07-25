<%@ Page Title="Tic Tac Zen" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TicTacZen._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row">
        <div id="rightSidePanel" class="col-sm-3 sidePanel"> 
        </div>
        <div id="mainPanel" class="col-sm-9">

            <div id="scorePanel">
                <div class="jumbotron" id="hero">
                    <div class="wrapper">
                        <div class="title">
                            <h1>Tic Tac Zen</h1>
                        </div>
                        <div class="logo">
                            <img src="Images/banner.png" alt="banner"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 playerX">
                        <div class="wrapper">
                            <a class="gfx" href="#">
                                <img src="Images/paint-X-black.png" alt="X" />
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4 gameSetup">
                        <div class="wrapper">
                            <div id="boardSize">
                                <div class="form-group">
                                    <label for="boardSelect">Board</label>
                                    <select id="boardSelect" class="form-control">
                                        <option value=3>3 X 3</option>
                                        <option value=4>4 X 4</option>
                                        <option value=5>5 X 5</option>
                                        <option value=6>6 X 6</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 playerO">
                        <div class="wrapper">
                            <a class="gfx" href="#">
                                <img src="Images/paint-circle.png" alt="O" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 playerX">
                        <div class="wrapper">
                            <div class="name">
                                <input type="text" class="form-control" placeholder="player X Name" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 gameSetup">
                        <div class="wrapper">
                            <div class="ctx">
                                  <button class="btn btn-custom" type="submit" name="action">Play</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 playerO">
                        <div class="wrapper">
                            <div class="name">
                                <input type="text" class="form-control" placeholder="player O Name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gameBoard">
                <div class="row">
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                    <div class="col-sm-3 cell">
                        <div class="X">
                            <img src='/gfx/paint-X-black.png' />
                        </div>
                        <div class="O">
                            <img src='/gfx/paint-circle.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</asp:Content>
