import{R as r}from"./iframe-3bLAQ3jn.js";import{R as c}from"./zIndexSlice-MjxnTwUQ.js";import{C as d}from"./ComposedChart-DG0emu8-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BAEe-XhD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BuQ3fxbC.js";import"./index-awsJe2Eb.js";import"./index-xiU2DbNU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aDW5W-_U.js";import"./isWellBehavedNumber-BX_nblg7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7ESk0vAy.js";import"./axisSelectors-qjgTgHdP.js";import"./d3-scale-CEKTBlSM.js";import"./index-DCRVqNzU.js";import"./index-3A7c9_Pr.js";import"./renderedTicksSlice-C8ZppDJj.js";import"./index-6Ojv9TCM.js";import"./CartesianChart-C-eExA3r.js";import"./chartDataContext-DAaLengz.js";import"./CategoricalChart-DMmsyMWW.js";import"./Layer-BIgar30Y.js";import"./activeStyles-CAdLKBhw.js";import"./Label-Dn58gwL2.js";import"./Text-DqxBCtXi.js";import"./pageBackground-2DSYbj3P.js";import"./useId-BfAkDmBs.js";import"./useBackwardsCompatibleTheme-CCnkHGsk.js";import"./ZIndexLayer-DiKAWbLw.js";import"./useAnimationId-Bz90LZyV.js";import"./dataEntryStyles-BmtIjxjW.js";import"./ActivePoints-Cx1YGcZP.js";import"./Dot-6DZHOl7o.js";import"./types-DN7oIxRd.js";import"./GraphicalItemClipPath-DfyNoqlW.js";import"./SetGraphicalItem-DodAswVv.js";import"./getRadiusAndStrokeWidthFromDot-D9mbRMV7.js";import"./ActiveShapeUtils-D6QRbruv.js";import"./Curve-CuK08rWF.js";import"./step-ATMA922b.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-mnMFiUCN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
