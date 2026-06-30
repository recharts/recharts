import{R as e}from"./iframe-BSWUJvVD.js";import{R as c}from"./zIndexSlice-Dodw6VBB.js";import{C as d}from"./ComposedChart-CU9OL2HY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CmUOwi7c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DttCRvoG.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./get-Vl9hB9kE.js";import"./resolveDefaultProps-BmihZEmA.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./Layer-Cf5OzKEI.js";import"./AnimatedItems-Z4j2jX_N.js";import"./Label-DXe68yB0.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./useAnimationId-DQFk0Too.js";import"./ActivePoints-DxQISI2r.js";import"./Dot-B2jNwAb4.js";import"./types-Dnz1a-tR.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getRadiusAndStrokeWidthFromDot-Bc40o6k6.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./Curve-DsJVJiVT.js";import"./step-n-r0mMGx.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CSHTXu_A.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
