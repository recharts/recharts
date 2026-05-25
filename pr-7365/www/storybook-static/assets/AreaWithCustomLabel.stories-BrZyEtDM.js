import{e as t}from"./iframe-CivULM0O.js";import{g as c}from"./arrayEqualityCheck-PbQt1vd_.js";import{C as d}from"./ComposedChart-DfjP2WwB.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-mQjSw597.js";import{R as u}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./immer-C3JSSs7p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./Curve-CR9QitUx.js";import"./types-CYA8PCW2.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./Layer-BOVDUSvA.js";import"./ReactUtils-B75F0iOa.js";import"./Label-BAI4tr_y.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./ZIndexLayer-CgUDZ3al.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./graphicalItemSelectors-CO4I5c3e.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
