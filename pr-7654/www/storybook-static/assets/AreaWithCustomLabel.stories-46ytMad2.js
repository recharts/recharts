import{R as r}from"./iframe-BqyXYbfO.js";import{R as c}from"./zIndexSlice-B01GboJR.js";import{C as d}from"./ComposedChart-B7zFkt6v.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B99bpE9b.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CuHL7VMX.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./Layer-cG34Tdrq.js";import"./AnimatedItems-CpV-NRBb.js";import"./Label-oragi0Kj.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./ZIndexLayer-rhqIudSr.js";import"./useAnimationId-CK12bq4f.js";import"./ActivePoints-CiwZFN_M.js";import"./Dot-C0u3Avpo.js";import"./types-B7ADV__L.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getRadiusAndStrokeWidthFromDot-HXIFwiLB.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./Curve-B6fu5Ruc.js";import"./step-B3dTMrU0.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DNiSTRsW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
