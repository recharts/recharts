import{e as t}from"./iframe-D0SJPJ1y.js";import{R as c}from"./arrayEqualityCheck-CYS0izrw.js";import{C as d}from"./ComposedChart-CGWtCm1x.js";import{A as l}from"./Area-5faoPVBY.js";import{R as h}from"./RechartsHookInspector-4NIikMun.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./Curve-Cx3Ohe6s.js";import"./types-Cyc_Gww5.js";import"./step-RKAN_I-J.js";import"./Layer-Dax6EhgB.js";import"./ReactUtils-a6BVn4Bt.js";import"./Label-Cf3oENl6.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./ZIndexLayer-DYNk2l8y.js";import"./ActivePoints-DG08NKKZ.js";import"./Dot-B2ZduEOn.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./useAnimationId-wUwzbzyQ.js";import"./getRadiusAndStrokeWidthFromDot-DToYTxGi.js";import"./graphicalItemSelectors-CeFUDeRv.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
