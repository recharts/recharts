import{R as r}from"./iframe-DNnhIzqd.js";import{R as c}from"./zIndexSlice-CZnRUfU-.js";import{C as d}from"./ComposedChart-Dwrm7GV8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-xUZTCsu1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./throttle-QyoUWs98.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./RechartsWrapper-CrR43_nu.js";import"./axisSelectors-D3RI42dK.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Layer-BC8osa1v.js";import"./dataEntryStyles-BLzS4I_n.js";import"./Label-zRO_Glrc.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./types-BRWBXBDp.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./Curve-BuuEl7Oa.js";import"./step-CcvBplbA.js";import"./useEffectiveDataKey-DDl_vZE8.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
