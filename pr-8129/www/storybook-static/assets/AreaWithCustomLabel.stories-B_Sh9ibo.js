import{R as r}from"./iframe-UUS7gS8r.js";import{R as c}from"./zIndexSlice-DC8Mmyu0.js";import{C as d}from"./ComposedChart-DyYzfQP5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C6VQqefy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./throttle-CgxVsgWn.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./RechartsWrapper-CpoOBNO8.js";import"./axisSelectors-BhKtxZfo.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXJSpI4F.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./Layer-CAt7TJL2.js";import"./LabelList-BfhKeSlq.js";import"./Label-Cr7fVLhy.js";import"./Text-Dm1h-qE_.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./ActivePoints-CKMzfD8D.js";import"./Dot-CwQJh2C3.js";import"./fillDefinitions-TYLf-280.js";import"./types-CpFwJGls.js";import"./activeStyles-C25hf-sM.js";import"./useAnimationId-BqxzW97i.js";import"./dataEntryStyles-D0nTu1H4.js";import"./Symbols-fRcdzfv5.js";import"./symbol-BFpIpW6Y.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getRadiusAndStrokeWidthFromDot-CyVRyLxc.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./Curve-C4dbZ49s.js";import"./step-TKY5Ryld.js";import"./useEffectiveDataKey-4NPbYdMg.js";const st={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},nt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,nt as __namedExportsOrder,st as default};
