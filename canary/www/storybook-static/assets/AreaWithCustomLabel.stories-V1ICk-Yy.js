import{R as e}from"./iframe-DzBbDK3f.js";import{R as c}from"./zIndexSlice-BhAJBvui.js";import{C as d}from"./ComposedChart-DlJ6UxJ6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Da2WXrJv.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DQoMHntF.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./get-B36j_mfg.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./renderedTicksSlice-B9_diZXM.js";import"./axisSelectors-VQ5WENH-.js";import"./d3-scale-qbHfyqh1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./Layer-BXEIHXdm.js";import"./AnimatedItems-B0itj7bz.js";import"./Label-CGWWfPsR.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./ZIndexLayer-DpRTlowh.js";import"./useAnimationId-B-2-DeJx.js";import"./ActivePoints-BMU7oyBA.js";import"./Dot-DJtVuX_I.js";import"./types-NVYIi3uc.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getRadiusAndStrokeWidthFromDot-DqCoJDrQ.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./Curve-BT7bGYlu.js";import"./step-DAtqKpLg.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CQG1X6Vk.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
