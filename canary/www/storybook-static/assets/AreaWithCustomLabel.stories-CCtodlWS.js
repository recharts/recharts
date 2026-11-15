import{R as r}from"./iframe-8C24Tydd.js";import{R as c}from"./zIndexSlice-Dw4Oq4dL.js";import{C as d}from"./ComposedChart-B4z2qb51.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BmGr-VHS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./RechartsWrapper-CN9elUVX.js";import"./axisSelectors-wolYJBqC.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./Layer-D45TlyFk.js";import"./dataEntryStyles-XtYPtKfF.js";import"./Label-D_2s_KcH.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./types-BD1-xaIs.js";import"./activeStyles-D92_uiFB.js";import"./useAnimationId-CvLS5yyi.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./Curve-BP7tIwQM.js";import"./step-lTKWXilO.js";import"./useEffectiveDataKey-DR3UcTsu.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
