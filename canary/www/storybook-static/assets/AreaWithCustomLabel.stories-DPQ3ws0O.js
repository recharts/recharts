import{R as r}from"./iframe-BNtNFygj.js";import{R as c}from"./zIndexSlice-B5_48POF.js";import{C as d}from"./ComposedChart-D__S-XeQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BCRJ4rSD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./throttle-D7zSzoPk.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./RechartsWrapper-CuiNtI3q.js";import"./axisSelectors-mpzDPz7I.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AvjMremu.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./Layer-BWvVPR01.js";import"./LabelList-BMYELo_i.js";import"./Label-CtODaKOy.js";import"./Text-CVsQWuYy.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./types-Bv6DwZgB.js";import"./activeStyles-B8Yp5U6S.js";import"./useAnimationId-DUqQXAVR.js";import"./dataEntryStyles-Bi8dthc7.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./Curve-CzR2ia5J.js";import"./step-3Vwob_iR.js";import"./useEffectiveDataKey-BUQC0_MU.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
