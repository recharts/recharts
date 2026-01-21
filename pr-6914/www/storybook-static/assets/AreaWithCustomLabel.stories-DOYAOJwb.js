import{e as t}from"./iframe-B3JCtExw.js";import{R as c}from"./arrayEqualityCheck-BI5ikbve.js";import{C as d}from"./ComposedChart-BpG742gi.js";import{A as l}from"./Area-CBLSSp91.js";import{R as h}from"./RechartsHookInspector-B6PrNXux.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D9I6VAiu.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./Curve-CrR1QL9p.js";import"./types-CzJtAzjL.js";import"./Layer-m9bU_GMN.js";import"./ReactUtils-YAdCW6ic.js";import"./Label-DjeP5w8o.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./ZIndexLayer-BuYvVcNP.js";import"./ActivePoints-Cr18JU0C.js";import"./Dot-BO3IuXC8.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./useAnimationId-YJOXYlAT.js";import"./getRadiusAndStrokeWidthFromDot-CZJ1soND.js";import"./graphicalItemSelectors-1_pZjmlj.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
