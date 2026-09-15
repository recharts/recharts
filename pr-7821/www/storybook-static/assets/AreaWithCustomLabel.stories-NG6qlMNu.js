import{R as r}from"./iframe-BWKtkC3a.js";import{R as c}from"./zIndexSlice-CJYktc5S.js";import{C as d}from"./ComposedChart-B4E8jNZy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C099_YrQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSPVuwv0.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./Layer-BW2neL7L.js";import"./AnimatedItems-DrPbLth3.js";import"./Label-3HnLAq9q.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./ZIndexLayer-CAOggInk.js";import"./useAnimationId-DDNvTaoZ.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./types-DVYgZ5G0.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./Curve-DCrUUXgR.js";import"./step-4b6-oj2z.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-hpl57a82.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
