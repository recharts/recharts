import{R as r}from"./iframe-WBbNNnuy.js";import{R as c}from"./zIndexSlice-tUIWaJXi.js";import{C as d}from"./ComposedChart-5JnVr7Ht.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BLlNJNUw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./throttle-BZsWSkxT.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./RechartsWrapper-KCZFV5Qp.js";import"./axisSelectors-BsjG_ZcL.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmTpsTXt.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./getRadiusAndStrokeWidthFromDot-BJbGVYFk.js";import"./Layer-B9NKZG1g.js";import"./dataEntryStyles-DB--RtiY.js";import"./Label-C7oootOX.js";import"./Text-BMtYTGtz.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./ActivePoints-CufioKrW.js";import"./Dot-CWYAFnGF.js";import"./types-DJHF32C4.js";import"./activeStyles-CA5Mddf7.js";import"./useAnimationId-Cxl9dyaW.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./Curve-DgOptS1N.js";import"./step-sID4B3fn.js";import"./useEffectiveDataKey-CNDMCH51.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
