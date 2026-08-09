import{R as e}from"./iframe-DLS25dHQ.js";import{R as c}from"./zIndexSlice-l2YZmfJm.js";import{C as d}from"./ComposedChart-3ReoGfqO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CCdXmiix.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Hx_xB1Pu.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C31rpRZv.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./axisSelectors-L-RJvPIw.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./Layer-DThhki4j.js";import"./AnimatedItems-C-FlKGX8.js";import"./Label-Bs5nvBdN.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./ZIndexLayer-CVnRsL__.js";import"./useAnimationId-BwYkYmq-.js";import"./ActivePoints-CxfQZGg2.js";import"./Dot-DrvJzzI1.js";import"./types-BNikxk5Q.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getRadiusAndStrokeWidthFromDot-BcCKN7uZ.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./Curve-D-nKyO-x.js";import"./step-CSyDwz3m.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./graphicalItemSelectors-Ca1NR3-_.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
