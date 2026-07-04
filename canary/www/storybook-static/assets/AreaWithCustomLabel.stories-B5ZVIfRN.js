import{R as e}from"./iframe-BMwTDcev.js";import{R as c}from"./zIndexSlice-CPh4fBg6.js";import{C as d}from"./ComposedChart-DZYtQfew.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CAlBjb8F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2Td0Lm2.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRX6xo6C.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./Layer-DhxEcDzW.js";import"./AnimatedItems-BgUudFYn.js";import"./Label-nIa50DhA.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./ZIndexLayer-BzcpQumx.js";import"./useAnimationId-CiOVdLQp.js";import"./ActivePoints-C2MaqzXC.js";import"./Dot-KOqs7h1g.js";import"./types-zXcSMCPW.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./getRadiusAndStrokeWidthFromDot-DrCQxCSe.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./Curve-DSVLafFk.js";import"./step-BkUkyWe_.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B0JMcxas.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
