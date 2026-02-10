import{e as t}from"./iframe-BXZsi3ZJ.js";import{R as c}from"./arrayEqualityCheck-Cr28DIq7.js";import{C as d}from"./ComposedChart-A4rsHRl-.js";import{A as l}from"./Area-BsfjlnFo.js";import{R as h}from"./RechartsHookInspector-BcsNAcT5.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./zIndexSlice-47t4gEct.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./Curve-CD_JBQwm.js";import"./types-5-uOdbL9.js";import"./Layer-CHngc-aq.js";import"./ReactUtils-Cp6NqBbj.js";import"./Label-BOPAlXUc.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./ZIndexLayer-BN0SI8Of.js";import"./ActivePoints-C2rwBq_Q.js";import"./Dot-BSyucR2X.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./useAnimationId-DdIT7cjj.js";import"./getRadiusAndStrokeWidthFromDot-h-LXgdKb.js";import"./graphicalItemSelectors-6mRrvq5H.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
