import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-boxed-table',
  templateUrl: './boxed-table.component.html',
  styleUrls: ['./boxed-table.component.css']
})
export class BoxedTableComponent implements OnInit {
  newcomponent = "Entered in new component created";
  
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      var imageUrl = '';

      function selectBuilder() {
          var execs = [
              {firstN: 'Todd', lastN: 'Marksberry'},
              {firstN: 'David', lastN: 'Pierce'},
              {firstN: 'Ben', lastN: 'Greiving'},
              {firstN: 'Carole', lastN: 'Sumption'},
              {firstN: 'Chad', lastN: 'Shane'},
              {firstN: 'Chris', lastN: 'Chippindale'},
              {firstN: 'Colleen', lastN: 'Knoll'},
              {firstN: 'Joe', lastN: 'Greene'},
              {firstN: 'Sarah', lastN: 'Collins'},
              {firstN: 'Steve', lastN: 'Ferrero'},
          ]
  
          $('#imgSelect').append('<option value=""> </option>')
          $.each( execs, function(index) {
              $('#imgSelect').append('<option value="/assets/'+execs[index].firstN+'-'+execs[index].lastN+'.jpg">'+execs[index].firstN+' '+execs[index].lastN+'</option>');
          });
      }
  
      function imgScrambler()
      {
          $('#tableContainer').empty();
          $('#tableContainer').append('<table id="imageShuffleTable"></table>')

          $('#tableContainer').append('<table id="tableOverlay"></table>')
          
          var grid = [];
          var numCol = 5;
          var numRow = 5;
  
          var imgWidth = $('#rootImage').width();
          var imgHeight = $('#rootImage').height();
  
          var tile_height = imgHeight / numRow;
          var tile_width = imgWidth / numCol;
  
          for(i = numRow; i > 0; i--) {
              imgHeight = imgHeight - tile_height;
              for(n = numCol; n > 0; n--) {
                  imgWidth = imgWidth - tile_width;
                  grid.push({x: imgWidth, y: imgHeight});
              }
          }
  
          function shuffleArray(array) {
              for (var i = array.length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
  
              return array;
          }
  
          var gridShuffled = shuffleArray(grid);
  
          var gridTable = [];
          var gridBlankTable = [];
          var j = 0;
          var markupRow = '<tr>';
          var blankRow = '<tr>';
          var gridRows = grid.length / numRow;
  
          for( var i = gridRows; i > 0; i--) {
              for ( var n = 0; n < 5; n++){
                  j++;
                  var myImage = 'myImage' + j;
                  var markup = "<td><div class='img_background' id='"+myImage+"'></div></td>";
                  var blankSq = "<td><div class='blankBox' id='blankBox"+j+"'></div></td>";
                  gridTable.push(markup);
                  gridBlankTable.push(blankSq);
              }
  
              $.each( gridTable, function( key, value ) {
                  markupRow = markupRow + value;
              });

              $.each( gridBlankTable, function( key, value ) {
                blankRow = blankRow + value;
            });
              
              $('#imageShuffleTable').append(markupRow);
              $('#tableOverlay').append(blankRow);
              markupRow = '<tr>';
              gridTable = [];

              blankRow = '<tr>';
              gridBlankTable = [];
          }
  
          for (var i = gridShuffled.length - 1; i > 0; i--) {
              $('#myImage' + i).css('background-position-x', gridShuffled[i].x + 'px');
              $('#myImage' + i).css('background-position-y', gridShuffled[i].y + 'px');
          }
  
          $('.img_background').css('background-image', 'url(' + imageUrl + ')');
      }
  
      $('#imgSelect').on("change", function() {
          imageUrl = this.value;
          imgScrambler();
      });

      $('.refreshButton').on("click", function() {
        imgScrambler();
      });
  
      imgScrambler();
      selectBuilder()
  });

    
  }

}
