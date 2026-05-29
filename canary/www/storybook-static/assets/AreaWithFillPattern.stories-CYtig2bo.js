import{e as t}from"./iframe-Dbih6tM_.js";import{g as p}from"./zIndexSlice-F7HsGAhb.js";import{C as m}from"./ComposedChart-hkcoJXW_.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-BtAI4Kse.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u9L_0Kl5.js";import"./get-DVIR8H8G.js";import"./resolveDefaultProps-C6XhIduD.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./Curve-CbpaSJeH.js";import"./types-Bhc7gOzP.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./Layer-B42S8g5T.js";import"./ReactUtils-Bj9mmMxB.js";import"./Label-CzYO866A.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./ZIndexLayer-DaMCCGdS.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./useAnimationId-CWLhhp_H.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./graphicalItemSelectors-BbOSuOCl.js";const X={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Y=["FillPattern"];export{e as FillPattern,Y as __namedExportsOrder,X as default};
