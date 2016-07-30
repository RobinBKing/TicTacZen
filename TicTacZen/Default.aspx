<%@ Page Title="Tic Tac Zen" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TicTacZen._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="jumbotron" id="hero">
        <div class="title">
            <h1>Tic Tac Zen</h1>
        </div>
        <div class="logo">
            <img src="Images/banner.png" alt="banner"/>
        </div>
    </div>
    <div class="clearfix"></div>
    <div id="scorePanel">
        <div class="row">
            <div class="col-sm-4 playerX">
                <a class="playerIcon" href="#">
                    <img src="Images/paint-X-black.png" alt="X" />
                </a>
            </div>
            <div class="col-sm-4 gameSetup">
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
            <div class="col-sm-4 playerO">
                <a class="playerIcon" href="#">
                    <img class="playerImage" src="Images/paint-circle.png" alt="O" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 playerX">
                <input type="text" class="form-control name" placeholder="player X Name" />
            </div>
            <div class="col-sm-4 gameSetup">
                <div id="playBtn">
                    <button class="btn btn-custom" type="submit" name="action">Play</button>
                </div>
            </div>
            <div class="col-sm-4 playerO">
                <input type="text" class="form-control name" placeholder="player O Name" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 playerX">
                <input type="text" class="form-control score" placeholder="0" />
            </div>
            <div class="col-sm-4 gameSetup">
            </div>
            <div class="col-sm-4 playerO">
                <input type="text" class="form-control score" placeholder="0" />
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
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
</asp:Content>
