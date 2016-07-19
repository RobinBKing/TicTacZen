<%@ Page Title="Tic Tac Zen" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TicTacZen._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

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

    <div id="scorePanel">
        <div class="row">
            <div class="col-md-4 playerX">
                <div class="wrapper">
                    <a class="gfx" href="#">
                        <img src="Images/paint-X-black.png" alt="X" />
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <h2>Get more libraries</h2>
                <p>
                    NuGet is a free Visual Studio extension that makes it easy to add, remove, and update libraries and tools in Visual Studio projects.
                </p>
                <p>
                    <a class="btn btn-default" href="http://go.microsoft.com/fwlink/?LinkId=301949">Learn more &raquo;</a>
                </p>
            </div>
            <div class="col-md-4">
                <h2>Web Hosting</h2>
                <p>
                    You can easily find a web hosting company that offers the right mix of features and price for your applications.
                </p>
                <p>
                    <a class="btn btn-default" href="http://go.microsoft.com/fwlink/?LinkId=301950">Learn more &raquo;</a>
                </p>
            </div>
        </div>
    </div>
</asp:Content>
