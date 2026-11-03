import{R as r}from"./iframe-C4yajH80.js";import{R as c}from"./zIndexSlice-BfiJerBV.js";import{C as d}from"./ComposedChart-Drcu9Hk1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DC0LWF9N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./throttle-A9at9acq.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./axisSelectors-C4wAO8K7.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fBzFIMPy.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./Layer-D0yKuovh.js";import"./LabelList-C_dQABL5.js";import"./Label-B6ownNND.js";import"./Text-Bi36EJ7d.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./ActivePoints-Ve6xkJ_B.js";import"./Dot-CrVSKUlv.js";import"./types-CL_v27h0.js";import"./activeStyles-DvcaieBh.js";import"./useAnimationId-BUxfS1h6.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-aXzYe790.js";import"./getRadiusAndStrokeWidthFromDot-BI02GC_O.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./Curve-fl7qnDBk.js";import"./step-I8SAqNm5.js";import"./useEffectiveDataKey-RrCx3xE8.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
