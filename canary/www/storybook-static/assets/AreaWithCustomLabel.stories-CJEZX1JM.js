import{R as r}from"./iframe-Dt7VmJVd.js";import{R as c}from"./zIndexSlice-CsJRlQGe.js";import{C as d}from"./ComposedChart-BEVdjL9z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dm4p9O-P.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./RechartsWrapper-DmetyJsw.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Layer-CKqAbqeS.js";import"./dataEntryStyles-BTAsZYzb.js";import"./Label-DBOYMKjR.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./types-D6xyOnmX.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-meI4aCtS.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./useEffectiveDataKey-DfkEl2f7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
