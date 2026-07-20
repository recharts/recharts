import{R as e}from"./iframe-DzolqKW_.js";import{R as c}from"./zIndexSlice-BFydgfU7.js";import{C as d}from"./ComposedChart-BXGKVBvM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DUh6boSw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWqOgTiL.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./d3-scale-BOKuOqr8.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./Layer-TAE-BGU4.js";import"./AnimatedItems-D8n1PMNM.js";import"./Label-BR8h5iiR.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./ZIndexLayer-CuyP-vcu.js";import"./useAnimationId-BCQ5DS1y.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./types-BKcxhU3G.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DnZlAaLd.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
