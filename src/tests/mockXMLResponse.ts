export const MOCK_APP_DEP_WITH_DETAILS_FROM_ONLY = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetArrDepBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
            <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt8="http://thalesgroup.com/RTTI/2021-11-01/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                <lt4:generatedAt>2023-04-16T00:17:56.0709132+01:00</lt4:generatedAt>
                <lt4:locationName>London Kings Cross</lt4:locationName>
                <lt4:crs>KGX</lt4:crs>
                <lt4:platformAvailable>true</lt4:platformAvailable>
                <lt7:trainServices>
                    <lt7:service>
                        <lt4:sta>00:18</lt4:sta>
                        <lt4:eta>On time</lt4:eta>
                        <lt4:platform>9</lt4:platform>
                        <lt4:operator>Thameslink</lt4:operator>
                        <lt4:operatorCode>TL</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>8</lt4:length>
                        <lt4:serviceID>2664531KNGX____</lt4:serviceID>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>Peterborough</lt4:locationName>
                                <lt4:crs>PBO</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:previousCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Peterborough</lt7:locationName>
                                    <lt7:crs>PBO</lt7:crs>
                                    <lt7:st>22:54</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Huntingdon</lt7:locationName>
                                    <lt7:crs>HUN</lt7:crs>
                                    <lt7:st>23:10</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>St Neots</lt7:locationName>
                                    <lt7:crs>SNO</lt7:crs>
                                    <lt7:st>23:18</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Sandy</lt7:locationName>
                                    <lt7:crs>SDY</lt7:crs>
                                    <lt7:st>23:26</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Biggleswade</lt7:locationName>
                                    <lt7:crs>BIW</lt7:crs>
                                    <lt7:st>23:30</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Arlesey</lt7:locationName>
                                    <lt7:crs>ARL</lt7:crs>
                                    <lt7:st>23:35</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hitchin</lt7:locationName>
                                    <lt7:crs>HIT</lt7:crs>
                                    <lt7:st>23:44</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Stevenage</lt7:locationName>
                                    <lt7:crs>SVG</lt7:crs>
                                    <lt7:st>23:50</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>00:10</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:previousCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:std>00:33</lt4:std>
                        <lt4:etd>On time</lt4:etd>
                        <lt4:platform>9</lt4:platform>
                        <lt4:operator>Great Northern</lt4:operator>
                        <lt4:operatorCode>GN</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>8</lt4:length>
                        <lt4:serviceID>2671400KNGX____</lt4:serviceID>
                        <lt5:rsid>GN017200</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>Royston</lt4:locationName>
                                <lt4:crs>RYS</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:subsequentCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>00:38</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Stevenage</lt7:locationName>
                                    <lt7:crs>SVG</lt7:crs>
                                    <lt7:st>01:03</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hitchin</lt7:locationName>
                                    <lt7:crs>HIT</lt7:crs>
                                    <lt7:st>01:12</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Letchworth Garden City</lt7:locationName>
                                    <lt7:crs>LET</lt7:crs>
                                    <lt7:st>01:18</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Baldock</lt7:locationName>
                                    <lt7:crs>BDK</lt7:crs>
                                    <lt7:st>01:21</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Royston</lt7:locationName>
                                    <lt7:crs>RYS</lt7:crs>
                                    <lt7:st>01:29</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:subsequentCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:sta>00:46</lt4:sta>
                        <lt4:eta>On time</lt4:eta>
                        <lt4:operator>Thameslink</lt4:operator>
                        <lt4:operatorCode>TL</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>8</lt4:length>
                        <lt4:delayReason>This train has been delayed by trespassers on the railway earlier today</lt4:delayReason>
                        <lt4:serviceID>2643106KNGX____</lt4:serviceID>
                        <lt5:rsid>TL297100</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>Peterborough</lt4:locationName>
                                <lt4:crs>PBO</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:previousCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Peterborough</lt7:locationName>
                                    <lt7:crs>PBO</lt7:crs>
                                    <lt7:st>23:20</lt7:st>
                                    <lt7:at>23:25</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Huntingdon</lt7:locationName>
                                    <lt7:crs>HUN</lt7:crs>
                                    <lt7:st>23:35</lt7:st>
                                    <lt7:at>23:39</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>St Neots</lt7:locationName>
                                    <lt7:crs>SNO</lt7:crs>
                                    <lt7:st>23:43</lt7:st>
                                    <lt7:at>23:47</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Sandy</lt7:locationName>
                                    <lt7:crs>SDY</lt7:crs>
                                    <lt7:st>23:50</lt7:st>
                                    <lt7:at>23:55</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Biggleswade</lt7:locationName>
                                    <lt7:crs>BIW</lt7:crs>
                                    <lt7:st>23:54</lt7:st>
                                    <lt7:at>23:59</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Arlesey</lt7:locationName>
                                    <lt7:crs>ARL</lt7:crs>
                                    <lt7:st>23:59</lt7:st>
                                    <lt7:at>00:04</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hitchin</lt7:locationName>
                                    <lt7:crs>HIT</lt7:crs>
                                    <lt7:st>00:07</lt7:st>
                                    <lt7:at>00:10</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Stevenage</lt7:locationName>
                                    <lt7:crs>SVG</lt7:crs>
                                    <lt7:st>00:13</lt7:st>
                                    <lt7:at>00:16</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>00:40</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:previousCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:sta>00:58</lt4:sta>
                        <lt4:eta>Cancelled</lt4:eta>
                        <lt4:operator>Thameslink</lt4:operator>
                        <lt4:operatorCode>TL</lt4:operatorCode>
                        <lt4:isCancelled>true</lt4:isCancelled>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:cancelReason>This train has been cancelled because of more trains than usual needing repairs at the same time</lt4:cancelReason>
                        <lt4:serviceID>2661513KNGX____</lt4:serviceID>
                        <lt5:rsid>TL061100</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>Royston</lt4:locationName>
                                <lt4:crs>RYS</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:previousCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Royston</lt7:locationName>
                                    <lt7:crs>RYS</lt7:crs>
                                    <lt7:st>23:55</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Ashwell &amp; Morden</lt7:locationName>
                                    <lt7:crs>AWM</lt7:crs>
                                    <lt7:st>23:59</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Baldock</lt7:locationName>
                                    <lt7:crs>BDK</lt7:crs>
                                    <lt7:st>00:04</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Letchworth Garden City</lt7:locationName>
                                    <lt7:crs>LET</lt7:crs>
                                    <lt7:st>00:08</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hitchin</lt7:locationName>
                                    <lt7:crs>HIT</lt7:crs>
                                    <lt7:st>00:12</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Stevenage</lt7:locationName>
                                    <lt7:crs>SVG</lt7:crs>
                                    <lt7:st>00:18</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Knebworth</lt7:locationName>
                                    <lt7:crs>KBW</lt7:crs>
                                    <lt7:st>00:21</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Welwyn North</lt7:locationName>
                                    <lt7:crs>WLW</lt7:crs>
                                    <lt7:st>00:25</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Welwyn Garden City</lt7:locationName>
                                    <lt7:crs>WGC</lt7:crs>
                                    <lt7:st>00:30</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hatfield</lt7:locationName>
                                    <lt7:crs>HAT</lt7:crs>
                                    <lt7:st>00:34</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Potters Bar</lt7:locationName>
                                    <lt7:crs>PBR</lt7:crs>
                                    <lt7:st>00:39</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>00:51</lt7:st>
                                    <lt7:et>Cancelled</lt7:et>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:previousCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:sta>01:06</lt4:sta>
                        <lt4:eta>On time</lt4:eta>
                        <lt4:operator>Thameslink</lt4:operator>
                        <lt4:operatorCode>TL</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>8</lt4:length>
                        <lt4:cancelReason>This train has been cancelled because of more trains than usual needing repairs at the same time</lt4:cancelReason>
                        <lt4:delayReason>This train has been delayed by more trains than usual needing repairs at the same time</lt4:delayReason>
                        <lt4:serviceID>2671490KNGX____</lt4:serviceID>
                        <lt5:rsid>TL094800</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>Royston</lt4:locationName>
                                <lt4:crs>RYS</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:previousCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Royston</lt7:locationName>
                                    <lt7:crs>RYS</lt7:crs>
                                    <lt7:st>00:09</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Ashwell &amp; Morden</lt7:locationName>
                                    <lt7:crs>AWM</lt7:crs>
                                    <lt7:st>00:15</lt7:st>
                                    <lt7:at>On time</lt7:at>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Baldock</lt7:locationName>
                                    <lt7:crs>BDK</lt7:crs>
                                    <lt7:st>00:17</lt7:st>
                                    <lt7:et>00:19</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Letchworth Garden City</lt7:locationName>
                                    <lt7:crs>LET</lt7:crs>
                                    <lt7:st>00:21</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hitchin</lt7:locationName>
                                    <lt7:crs>HIT</lt7:crs>
                                    <lt7:st>00:28</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Stevenage</lt7:locationName>
                                    <lt7:crs>SVG</lt7:crs>
                                    <lt7:st>00:34</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Knebworth</lt7:locationName>
                                    <lt7:crs>KBW</lt7:crs>
                                    <lt7:st>00:36</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Welwyn North</lt7:locationName>
                                    <lt7:crs>WLW</lt7:crs>
                                    <lt7:st>00:38</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Welwyn Garden City</lt7:locationName>
                                    <lt7:crs>WGC</lt7:crs>
                                    <lt7:st>00:41</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hatfield</lt7:locationName>
                                    <lt7:crs>HAT</lt7:crs>
                                    <lt7:st>00:42</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Potters Bar</lt7:locationName>
                                    <lt7:crs>PBR</lt7:crs>
                                    <lt7:st>00:46</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>01:00</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>8</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:previousCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:std>01:10</lt4:std>
                        <lt4:etd>On time</lt4:etd>
                        <lt4:operator>Great Northern</lt4:operator>
                        <lt4:operatorCode>GN</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>6</lt4:length>
                        <lt4:serviceID>2671502KNGX____</lt4:serviceID>
                        <lt5:rsid>GN008700</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>Hertford North</lt4:locationName>
                                <lt4:crs>HFN</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:subsequentCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>01:15</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Harringay</lt7:locationName>
                                    <lt7:crs>HGY</lt7:crs>
                                    <lt7:st>01:18</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hornsey</lt7:locationName>
                                    <lt7:crs>HRN</lt7:crs>
                                    <lt7:st>01:20</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Alexandra Palace</lt7:locationName>
                                    <lt7:crs>AAP</lt7:crs>
                                    <lt7:st>01:23</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Bowes Park</lt7:locationName>
                                    <lt7:crs>BOP</lt7:crs>
                                    <lt7:st>01:26</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Palmers Green</lt7:locationName>
                                    <lt7:crs>PAL</lt7:crs>
                                    <lt7:st>01:28</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Winchmore Hill</lt7:locationName>
                                    <lt7:crs>WIH</lt7:crs>
                                    <lt7:st>01:31</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Grange Park</lt7:locationName>
                                    <lt7:crs>GPK</lt7:crs>
                                    <lt7:st>01:33</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Enfield Chase</lt7:locationName>
                                    <lt7:crs>ENC</lt7:crs>
                                    <lt7:st>01:35</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Gordon Hill</lt7:locationName>
                                    <lt7:crs>GDH</lt7:crs>
                                    <lt7:st>01:37</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Cuffley</lt7:locationName>
                                    <lt7:crs>CUF</lt7:crs>
                                    <lt7:st>01:41</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hertford North</lt7:locationName>
                                    <lt7:crs>HFN</lt7:crs>
                                    <lt7:st>01:49</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:subsequentCallingPoints>
                    </lt7:service>
                    <lt7:service>
                        <lt4:std>01:40</lt4:std>
                        <lt4:etd>On time</lt4:etd>
                        <lt4:operator>Great Northern</lt4:operator>
                        <lt4:operatorCode>GN</lt4:operatorCode>
                        <lt4:serviceType>train</lt4:serviceType>
                        <lt4:length>6</lt4:length>
                        <lt4:serviceID>2671405KNGX____</lt4:serviceID>
                        <lt5:rsid>GN059400</lt5:rsid>
                        <lt5:origin>
                            <lt4:location>
                                <lt4:locationName>London Kings Cross</lt4:locationName>
                                <lt4:crs>KGX</lt4:crs>
                            </lt4:location>
                        </lt5:origin>
                        <lt5:destination>
                            <lt4:location>
                                <lt4:locationName>Welwyn Garden City</lt4:locationName>
                                <lt4:crs>WGC</lt4:crs>
                            </lt4:location>
                        </lt5:destination>
                        <lt7:subsequentCallingPoints>
                            <lt7:callingPointList>
                                <lt7:callingPoint>
                                    <lt7:locationName>Finsbury Park</lt7:locationName>
                                    <lt7:crs>FPK</lt7:crs>
                                    <lt7:st>01:45</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Alexandra Palace</lt7:locationName>
                                    <lt7:crs>AAP</lt7:crs>
                                    <lt7:st>01:53</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>New Southgate</lt7:locationName>
                                    <lt7:crs>NSG</lt7:crs>
                                    <lt7:st>01:56</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Oakleigh Park</lt7:locationName>
                                    <lt7:crs>OKL</lt7:crs>
                                    <lt7:st>01:59</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>New Barnet</lt7:locationName>
                                    <lt7:crs>NBA</lt7:crs>
                                    <lt7:st>02:01</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Potters Bar</lt7:locationName>
                                    <lt7:crs>PBR</lt7:crs>
                                    <lt7:st>02:07</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Hatfield</lt7:locationName>
                                    <lt7:crs>HAT</lt7:crs>
                                    <lt7:st>02:13</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                                <lt7:callingPoint>
                                    <lt7:locationName>Welwyn Garden City</lt7:locationName>
                                    <lt7:crs>WGC</lt7:crs>
                                    <lt7:st>02:20</lt7:st>
                                    <lt7:et>On time</lt7:et>
                                    <lt7:length>6</lt7:length>
                                </lt7:callingPoint>
                            </lt7:callingPointList>
                        </lt7:subsequentCallingPoints>
                    </lt7:service>
                </lt7:trainServices>
            </GetStationBoardResult>
        </GetArrDepBoardWithDetailsResponse>
    </soap:Body>
</soap:Envelope>`;
