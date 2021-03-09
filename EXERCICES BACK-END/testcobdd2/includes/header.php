<!DOCTYPE html>
<html lang="fr">
  <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">   
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title><?php echo $titre; ?></title>
        <!-- <link rel="stylesheet" href="../bootstrap/style.css"> -->
<body>
                                                    <!-- div pincipale container fluide/flex -->
                                                    <div class="container-fluid">
                                                        <!-- header avec logo et tout le jardin  -->
              <header class="row justify-content-between">
                  <div class="col-12 col-sm 6col-md-8 col-lg-4">
                      <a href="index.php">
                          <img src="IMG/jarditou_logo.jpg" class="img-fluid w-50" alt="Logo jarditou" title="Logo jarditou" id="logo">
                      </a>
                  </div>
                  <div class="d-flex justify-content-end align-items-end col-12 col-sm-6 col-md-4 col-lg-8" id="toutjardin">
                      <p class="d-none mr-2 d-sm-block h2 font-weight-bold">La qualité depuis 70 ans</p>
                  </div>
              </header>
                                                      <!-- navbar qui se collapse en menu burger -->
              <nav class="navbar shadow navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="index.php">Jarditou : le site officiel</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                  <div class="collapse navbar-collapse" id="navbar1">
                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                          <a class="nav-link" href="index.php">Acceuil</a>
                          </li>
                          <li class="nav-item active">
                          <a class="nav-link" href="viewrecords.php">voir stations enregistrées</a>
                          </li>
                          <li class="nav-item active">
                          <a class="nav-link" href="form.php" tabindex="-1">formulaire form</a>
                          </li>
                      </ul>
                  <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Votre promotion" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
                  </form>
                  </div>
              </nav>
                                                                               <!-- logo promotion jarditou lames de terrasse  -->
                                                                               <div class="p-0 col-12">
                    <img src="IMG/promotion.jpg" class="w-100 img-fluid mb-2" title="depensez votre argent chez nous PUTAIN" alt="Image de promotion de lames de terasses" id="promo">
              </div>
            