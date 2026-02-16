import{e as t}from"./iframe-BI7oaA_G.js";import{R as s}from"./arrayEqualityCheck-CqFOZzs4.js";import{C as m}from"./ComposedChart-Bmljd1qJ.js";import{B as r}from"./Bar-CTPhFxIv.js";import{R as l}from"./RechartsHookInspector-B5lL4wmf.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmsjXKM6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o4Mh8MkL.js";import"./hooks-BYYSr3I0.js";import"./axisSelectors-CGdfGHmv.js";import"./zIndexSlice-BJBRf06a.js";import"./renderedTicksSlice-C7y0xKdM.js";import"./CartesianChart-C-ZN2oGk.js";import"./chartDataContext-Bvker2sK.js";import"./CategoricalChart-Cgi21fgg.js";import"./Layer-_hLoKUUt.js";import"./tooltipContext-WDXGlhXg.js";import"./ReactUtils-CElkG0RD.js";import"./Label-CW-OXdCr.js";import"./Text-uzPlC_zS.js";import"./DOMUtils-D_254HoM.js";import"./ZIndexLayer-ow9Mnhy6.js";import"./types-BMyhg35s.js";import"./ActiveShapeUtils-BLY2D3T7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ICwvq_9q.js";import"./useAnimationId-DTs7L-5Q.js";import"./Trapezoid-DmJQSZ1N.js";import"./Sector-CLQqFD3N.js";import"./Symbols-BV4zxwPS.js";import"./Curve-DhRTsi0L.js";import"./RegisterGraphicalItemId-D0nTrYTJ.js";import"./ErrorBarContext-Cfw2K8JX.js";import"./GraphicalItemClipPath-BcJbyhsI.js";import"./SetGraphicalItem-C9Na75Z3.js";import"./getZIndexFromUnknown-D5nBbLu1.js";import"./graphicalItemSelectors-Czqo4CT5.js";import"./index-DJbyc3-8.js";import"./ChartSizeDimensions-DfSqX2vT.js";import"./OffsetShower-DIooMjVh.js";import"./PlotAreaShower-9a9xIQCa.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
