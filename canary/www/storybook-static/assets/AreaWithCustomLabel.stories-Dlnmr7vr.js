import{R as r}from"./iframe-BTkF_ck3.js";import{R as c}from"./zIndexSlice-DMb1iT4y.js";import{C as d}from"./ComposedChart-s1Akoicf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BST4KzdH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./axisSelectors-CNaIfHAW.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./Layer-DbGB2kqV.js";import"./LabelList-2kTqXwcO.js";import"./Label-BzrvAI-c.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./types-8wxp4ZmL.js";import"./activeStyles-DacmxpXN.js";import"./useAnimationId-BxLJVC0T.js";import"./dataEntryStyles-CxN2r_W-.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./Curve-sIdkl0eW.js";import"./step-DBbPIMUm.js";import"./useEffectiveDataKey-IRMZLONN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
