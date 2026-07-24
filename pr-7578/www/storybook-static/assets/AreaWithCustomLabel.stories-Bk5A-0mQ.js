import{R as e}from"./iframe-Dz-8xobX.js";import{R as c}from"./zIndexSlice-DLGpG8sy.js";import{C as d}from"./ComposedChart-gmjevVFY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C6PZ2a1j.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BhiZXvYf.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./axisSelectors-RA5EatZ8.js";import"./d3-scale-Eu5vW6Yz.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./Layer-DM8xvsTO.js";import"./AnimatedItems-C8QaJVru.js";import"./Label-CUth2UOL.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./ZIndexLayer-BepkwV1X.js";import"./useAnimationId-DHQotoBY.js";import"./ActivePoints-nN-9PNcc.js";import"./Dot-HydkS6Pw.js";import"./types-B2b4Ay33.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getRadiusAndStrokeWidthFromDot-j5D6edh7.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./Curve-C_Qt5Biu.js";import"./step-B3JVaVSK.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D1gNtFov.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
