import{R as e}from"./iframe-BGobxEKW.js";import{R as c}from"./zIndexSlice-Eu6i6ngN.js";import{C as d}from"./ComposedChart-DjHiGhAq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BIsdpiY2.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-xIHjc1iX.js";import"./index-DrKSi3Lf.js";import"./index-rlB0YW8A.js";import"./get-HFqD6QO2.js";import"./resolveDefaultProps-By8puQcs.js";import"./isWellBehavedNumber-MDkpYIMl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSKC20h7.js";import"./index-DIRQu93S.js";import"./index-BKAHzbDT.js";import"./renderedTicksSlice-Cvi-Ak0I.js";import"./axisSelectors-DVavIP4x.js";import"./d3-scale-CR1rssfZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-M1doCtPT.js";import"./chartDataContext-CbiQTE76.js";import"./CategoricalChart-DpAQLfUl.js";import"./Layer-CV9gulhQ.js";import"./AnimatedItems-D2o6LGbd.js";import"./Label-DtowT6Ci.js";import"./Text-BJ-a4d_f.js";import"./DOMUtils-DfSC9jQB.js";import"./ZIndexLayer-BPvrQw9D.js";import"./useAnimationId-Q5RNzbJv.js";import"./ActivePoints-BB52StyY.js";import"./Dot-UipfwxJ_.js";import"./types-C3BGlWt6.js";import"./RegisterGraphicalItemId-DzMyHwfr.js";import"./GraphicalItemClipPath-CnUHFn7e.js";import"./SetGraphicalItem-DJfCNytO.js";import"./getRadiusAndStrokeWidthFromDot-Bt-t8NsX.js";import"./ActiveShapeUtils-CpkaJLOn.js";import"./Curve-DlsAp4d1.js";import"./step-DH6ooie3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CWW8cA9B.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
