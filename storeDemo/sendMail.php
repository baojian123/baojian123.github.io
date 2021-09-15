<?php
    include('JSON.php');
    function encode($val)
    {
        $json = new Services_JSON();
        return $json->encode($val);
    }

    function decode($val)
    {
        $json = new Services_JSON();
        return $json->decode($val);
    }


$to = "Zhian.Chen-1@student.uts.edu.au";
$subject = "Thank you for your purchase!";

// $user_info = $_GET['user_info'];
// $cart_list = $_GET['cart_list'];
$data = file_get_contents("php://input");
// header('Content-Type:text/html;charset=UTF-8');
$data = decode($data, TRUE);
$user_info = $data->user_info;
$cart_list = $data->cart_list;
$to = $user_info->email;
// print_r($user_info);
// $to = $user_info.email;
$message = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Thank you for your purchase!</title>
</head>
<body>
  <div class="background">
  <style>
    .background{
      width:60%;
      margin:0px auto;
      background-color: #17212e;
      color:#ffffff;
    }
    .list{
      text-align:center;
      width:90%;
      margin:0px auto;
      display:flex;
      flex-direction:column;
    }
    tr>th{
      border-bottom:1px solid #ffffff;
    }
    .list th,td{
      width:150px;
    }
    img{
      height: 60px;
    }
  </style>
    <h2 style="color:#66c0f4">
    Hello, '.$user_info->firstName." ".$user_info->lastName;

$message .= "</h2>
<p><b>Thank you for your purchase</b></p>
  <p>Our product will be sent to ".$user_info->address.", ".$user_info->suburb.", ".$user_info->state.".</p>";
$message .= '    <p>Here is your purchase detail list:</p>
    <div class="list">
      <table>
      <tr>
        <th>
          Thumbnail
        </th>
        <th>
          Vehicle
        </th>
        <th>
          Rental Day
        </th>
        <th>
          Price
        </th>
      </tr>';
foreach($cart_list as $row) {
  $message.="<tr>";
  $cnt =0;
  $message.="<td>";
  $message.='<img src="http://www-student.it.uts.edu.au/~zhiachen/ass2/'.$row->image.'"/>';
  $message.="</td>";
  $message.="<td>";
  $message.=$row->ModelYear.'-'.$row->Brand.'-'.$row->Model;
  $message.="</td>";
  $message.="<td>";
  $message.=$row->amount;
  $message.="</td>";
  $message.="<td>";
  $message.='$ '.$row->total_price;
  $message.="</td>";
  // foreach($row as $item) {
  //   $cnt+=1;
  //   if($cnt==4|$cnt==5|$cnt==3){
  //     continue;
  //   }
  //   $message.="<td>";
  //   $message.=$item;
  //   $message.="</td>";
  // }
  $message.="</tr>";
}

$message .= "
</table>
</div>
</div>
</body>
</html>
";
$message = wordwrap($message,50,"\n",false);
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Zhian.Chen-1@student.uts.edu.au'."\r\n";
// $headers .= 'Cc: '.$user_info.email. "\r\n";

// echo $message;
mail($to,$subject,$message,$headers);
?>
