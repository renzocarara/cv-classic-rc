<?php
session_start();

if(isset($_POST['submit']) && !empty($_POST['submit'])){
        // check if re-captcha was successful
        if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
            //my recaptcha secret key
            $secret = '6LclxrMUAAAAAHes-fC6pgtNJab5O_lYNSa9fHrR';
            //get recaptha verify response data
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);
               // check if re-captcha was successful
                if($responseData->success){
                    //contact form submission code
                    if(isset($_POST['name'])) {

                        $name = $_POST['name'];
                        $email = $_POST['email'];
                        $remail = $_POST['remail'];;
                        $formmessage = ($_POST['message']);
                        $agree = $_POST['agree'];
                        $emailmessage = "Hai ricevuto una richiesta dal tuo modulo di contatto.

                        Name: $name
                        Email: $email
                        Confirm email: $remail
                        Message: $formmessage
                        Trattamento dati: $agree";

                        $to = "renzo.carara@libero.it";
                        $subject = "Richiesta di contatto";
                        $headers = "From: $email";
                        // Your contact request have submitted successfully
                        $confirm = "./message-sent.html";

                        if(isset($name)) {
                            mail($to,$subject,$emailmessage,$headers);
                            echo "<META HTTP-EQUIV=\"refresh\" content=\"0;URL=".$confirm."\">";
                        }
                    }
                }else{
                      echo'<script type="text/javascript">alert("ATTENZIONE: Verifica antispam fallita! Pregasi riprovare.");window.history.go(-1);</script>';
                     }
        }else{
              echo'<script type="text/javascript">alert("ATTENZIONE: Captcha non spuntato!");window.history.go(-1);</script>';
             }
  }
?>
