import{R as e}from"./iframe-DILeTPtB.js";import{R as c}from"./zIndexSlice-JhTumx9T.js";import{C as d}from"./ComposedChart-BoZ_CD1T.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CuyrbfSt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSfx3U2Q.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps--lUhC_MY.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./axisSelectors-BJN0i2Z4.js";import"./d3-scale-C6hgYXhG.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./Layer-DqGeYGqQ.js";import"./AnimatedItems-BB2N4cgm.js";import"./Label-RUjb4LlC.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./ZIndexLayer-DKm5_jWO.js";import"./useAnimationId-oe-1YumM.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./types-0cBFLGxq.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./Curve-BAtIGC1F.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DfWYsBhB.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
