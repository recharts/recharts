import{R as r}from"./iframe-rIGtWy7o.js";import{R as c}from"./zIndexSlice-eSFvIDPB.js";import{C as d}from"./ComposedChart-R6AzKio4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-vqwTqICK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CESzkdGA.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./RechartsWrapper-CnGTSvJE.js";import"./axisSelectors-DWDjUcOc.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Layer-BDOLwd71.js";import"./dataEntryStyles-BBWs-HQj.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./types-BNwRi5Vr.js";import"./activeStyles-CzQ969KV.js";import"./useAnimationId-BWpujR0E.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./Curve-DqTam_xv.js";import"./step-CBJGjOOI.js";import"./useEffectiveDataKey-DGGEUFr6.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
