!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "ButterflyFX" "Software\Clients\StartMenuInternet\ButterflyFX\Capabilities"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX\Capabilities\StartMenu" "StartMenuInternet" "ButterflyFX"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX" "" "ButterflyFX"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX\Capabilities" "ApplicationDescription" "A software testing and snapshot capturing tool"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX\Capabilities" "ApplicationName" "ButterflyFX"
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX\InstallInfo" "IconsVisible" 1
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX\shell\open\command" "" "$0\ButterflyFX.exe"
  WriteRegStr HKCU "SOFTWARE\Classes\BraveBetaHTML\shell\open\command" "" '"$0\ButterflyFX.exe" -- "%1"'
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\BraveBeta\Capabilities\URLAssociations" "http" "ButterflyFX"
!macroend
!macro customUnInstall
  DeleteRegKey HKCU "SOFTWARE\Classes\ButterflyFX"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\ButterflyFX"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "ButterflyFX"
!macroend