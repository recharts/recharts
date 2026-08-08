import{R as r}from"./iframe-Bh1U-oMl.js";import{R as c}from"./zIndexSlice-CbwDGfhV.js";import{C as d}from"./ComposedChart-_0dXWU4B.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CUid6avk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMII0ZAy.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./Layer-C3H-dOT5.js";import"./AnimatedItems-BvF3WRYv.js";import"./Label-CoZlS51A.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./ZIndexLayer-C51_GrjW.js";import"./useAnimationId-0BmLZ6mF.js";import"./ActivePoints-B8uy1Jk5.js";import"./Dot-ClTJQBAf.js";import"./types-w_TylJof.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getRadiusAndStrokeWidthFromDot-BYREjPLW.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./Curve-D4WkqVii.js";import"./step-CbC2c93d.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CC_S-o56.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
