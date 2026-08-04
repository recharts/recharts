import{R as e}from"./iframe-CWA9dL1n.js";import{R as c}from"./zIndexSlice-aQmFZxtc.js";import{C as d}from"./ComposedChart-JYsLvtOs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C2A-aW3H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CO5aCb3a.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CId5I6PX.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./d3-scale-CcIRMvmh.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./Layer-DdfHe4zJ.js";import"./AnimatedItems-4dsj7PS2.js";import"./Label-Ci3V9in7.js";import"./Text-B5gv-Qby.js";import"./DOMUtils-h2leYdBT.js";import"./ZIndexLayer-DQgxZgR-.js";import"./useAnimationId-BfVlpqgG.js";import"./ActivePoints-f0YyJDEU.js";import"./Dot-BzG5kAil.js";import"./types-Dm1l0pKT.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./graphicalItemIdentity--MezaesT.js";import"./ActiveShapeUtils-cijm59wq.js";import"./Curve-Cpe2XzR8.js";import"./step-DXLtdr_A.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./graphicalItemSelectors-Ci2bweSS.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
