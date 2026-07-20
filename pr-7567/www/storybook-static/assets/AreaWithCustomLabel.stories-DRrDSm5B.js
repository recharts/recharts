import{R as e}from"./iframe-BUBMop56.js";import{R as c}from"./zIndexSlice-BFOCeNjP.js";import{C as d}from"./ComposedChart-Co9cxOOG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-NHmvzlev.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D75nL504.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./axisSelectors-CCSlXmRc.js";import"./d3-scale-BKS6cnWE.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./Layer-CEgjWxAQ.js";import"./AnimatedItems-T6oPSFaY.js";import"./Label-C8PySNEK.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./ZIndexLayer-BKbyZAtu.js";import"./useAnimationId-BjgoYA5x.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./types-CIINUjJb.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./Curve-B8ZzY9nf.js";import"./step-nlwLlUk8.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BFcZn4ra.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
