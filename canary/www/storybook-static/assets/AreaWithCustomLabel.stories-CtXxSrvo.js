import{R as r}from"./iframe-BzcDVKKs.js";import{R as c}from"./zIndexSlice-BTTYVccT.js";import{C as d}from"./ComposedChart-DGju_FYc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C3yxnjay.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DDPbgHA_.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtypfTmg.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGczEQWO.js";import"./axisSelectors-IdMVp5Ng.js";import"./d3-scale-C4pPFzlU.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./index-DrsmB6aN.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./Layer-B4cUMoCn.js";import"./AnimatedItems-tb47PotV.js";import"./Label-CtBQk67s.js";import"./Text-24J6FH-o.js";import"./DOMUtils-Bp1Ea9M_.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./ZIndexLayer-DXdU7RWt.js";import"./useAnimationId-B_k41OIp.js";import"./ActivePoints-hCgPRLnM.js";import"./Dot-aHiofzDa.js";import"./types-Cgo5Tovd.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getRadiusAndStrokeWidthFromDot-DgBFRHKH.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./Curve-D-bcAvVw.js";import"./step-DnJg-qaF.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-tWVYkbkT.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
