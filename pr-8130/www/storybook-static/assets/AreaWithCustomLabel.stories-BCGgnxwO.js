import{R as r}from"./iframe-CrYQDt8P.js";import{R as c}from"./zIndexSlice-DgBq9YFj.js";import{C as d}from"./ComposedChart-D3_qR-0w.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C08JaqL6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./throttle-EZYco_S-.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./RechartsWrapper-BAwtrVn5.js";import"./axisSelectors-CHapoDkY.js";import"./polarAxisSelectors-qncpG9DL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8VX6HZY.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./Layer-BQFOl3cJ.js";import"./LabelList-C_2TXPHb.js";import"./Label-_UeQKQwH.js";import"./Text-BvJLtM_q.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./ActivePoints-CSQF1wsy.js";import"./Dot-GBqckkZQ.js";import"./types-D5M-0McJ.js";import"./activeStyles-C1vUddIu.js";import"./useAnimationId-DhleLLtl.js";import"./dataEntryStyles-D63lSB48.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getRadiusAndStrokeWidthFromDot-nu59-3In.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./Curve-D-a7nqUy.js";import"./step-DGjeaFMT.js";import"./useEffectiveDataKey-CniHgm4C.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
