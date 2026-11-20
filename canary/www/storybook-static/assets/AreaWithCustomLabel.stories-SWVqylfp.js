import{R as r}from"./iframe-CMFw787F.js";import{R as c}from"./zIndexSlice-DW-R_9mL.js";import{C as d}from"./ComposedChart-jPjAixDx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BC9Nt1XY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOABxk_y.js";import"./throttle-CR0jnMre.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./RechartsWrapper-AThag0NN.js";import"./axisSelectors-rk7JAHS6.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CNeDjyej.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./Layer-DoofO9Zt.js";import"./dataEntryStyles-CcaQQEAi.js";import"./Label-CYtvKaSn.js";import"./Text-DneUrFCx.js";import"./ZIndexLayer-zQQZbbdp.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./types-DA1V6lfX.js";import"./activeStyles-DP81Qo_e.js";import"./useAnimationId-DwVwC1xb.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B5x77PpV.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./Curve-BOyetQ0I.js";import"./step-Droy7KkJ.js";import"./useEffectiveDataKey-rlJiXvMI.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
