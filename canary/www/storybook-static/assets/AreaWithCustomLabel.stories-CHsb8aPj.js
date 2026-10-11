import{R as r}from"./iframe-BjoWmD_2.js";import{R as c}from"./zIndexSlice-QxL2_XNr.js";import{C as d}from"./ComposedChart-CfdRjNXn.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-KPR5toEf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./axisSelectors-CTjcoI_o.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./Layer-BETohxRY.js";import"./activeStyles-pw12H8S5.js";import"./Label-Cqr17CGT.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./ZIndexLayer-DQXgAxZP.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./ActivePoints-CbXUnkX6.js";import"./Dot-CwvTlVWs.js";import"./types-CwctOhA4.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getRadiusAndStrokeWidthFromDot-BXg1EUK6.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./Curve-Bi87Df9h.js";import"./step-DbGei3uZ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
