import{e as t}from"./iframe-tnEFgkcx.js";import{R as c}from"./arrayEqualityCheck-DqJ8srhf.js";import{C as d}from"./ComposedChart-BXbz8jZ-.js";import{A as l}from"./Area-DPQaXfQk.js";import{R as h}from"./RechartsHookInspector-C8yNaUl0.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeZ1TWKo.js";import"./immer-ncBRdkeU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cR-RvqVo.js";import"./index-B4jDL_1j.js";import"./hooks-DptPG5bY.js";import"./axisSelectors-KZFlWzxW.js";import"./d3-scale-ByLEGZpF.js";import"./zIndexSlice-CXrfbzcc.js";import"./renderedTicksSlice-D0-SyI8-.js";import"./CartesianChart-TKSiJtpn.js";import"./chartDataContext-qO9BwWme.js";import"./CategoricalChart-a9SFhw6w.js";import"./Curve-DSeHhcSU.js";import"./types-1yHH6o1s.js";import"./step-BN--2jEq.js";import"./Layer-DvhQWyN1.js";import"./ReactUtils-CCMVcigr.js";import"./Label-DekpC_Fs.js";import"./Text-BKpNJ0c7.js";import"./DOMUtils-Bml29IBx.js";import"./ZIndexLayer-BcZ51bY1.js";import"./ActivePoints-D8sa8kvW.js";import"./Dot-D52t3WLP.js";import"./RegisterGraphicalItemId-CBL_DLkS.js";import"./GraphicalItemClipPath-ByitOfMe.js";import"./SetGraphicalItem-B_lEpaDw.js";import"./useAnimationId-CMZ4Qpmu.js";import"./getRadiusAndStrokeWidthFromDot-EwsDQSuj.js";import"./graphicalItemSelectors-CrcIlVyu.js";import"./index-D_XUjRxy.js";import"./ChartSizeDimensions-CS0lJGsa.js";import"./OffsetShower-BTWXwS8x.js";import"./PlotAreaShower-CFtvb_hv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
