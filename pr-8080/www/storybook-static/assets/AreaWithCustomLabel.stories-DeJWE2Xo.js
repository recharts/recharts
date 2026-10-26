import{R as r}from"./iframe-CrWtoPAX.js";import{R as c}from"./zIndexSlice-DMPrIjTD.js";import{C as d}from"./ComposedChart-CrLeVh0b.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BsnxDfgy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./throttle-ByP8enHW.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./RechartsWrapper-MJk6C7sG.js";import"./axisSelectors-B0-aB2Y5.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Pq_E9xXF.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./Layer-Bc-8Aj4A.js";import"./activeStyles-D8qfovJq.js";import"./Label-9ANtnaX1.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./dataEntryStyles-CcroDQaP.js";import"./useAnimationId-DIVMX3ZS.js";import"./ActivePoints-cB0BOXIY.js";import"./Dot-BpyqQ2DG.js";import"./types-sEVDNypc.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getRadiusAndStrokeWidthFromDot-CuJjKg3J.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./Curve-QjHrFrYT.js";import"./step-xie03U5d.js";import"./useEffectiveDataKey-DRFzjTt4.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
