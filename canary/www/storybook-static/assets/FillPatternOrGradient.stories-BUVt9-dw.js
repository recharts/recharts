import{R as t}from"./iframe-Bz6TqJnq.js";import{R as s}from"./zIndexSlice-C-cqgMlF.js";import{C as m}from"./ComposedChart-BAS1f6y5.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-1f0tblAg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BuIt2HDm.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEKZytWh.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--vq1vTqI.js";import"./axisSelectors-BfBX80u0.js";import"./d3-scale-twe7FoUl.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./renderedTicksSlice-DQraWAfi.js";import"./index-C9aozdfF.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./Layer-BX7MhZ6S.js";import"./AnimatedItems-DDH0_5C2.js";import"./Label-lSot61nz.js";import"./Text-DOaj_kWf.js";import"./DOMUtils-Cex05Ge6.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./ZIndexLayer-DhhI2NR0.js";import"./useAnimationId-D4N1wqR_.js";import"./types-4BkRWtr0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nQBZL8n2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./tooltipContext-Dr4d46Zs.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./ErrorBarContext-CGc5rrEx.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./getZIndexFromUnknown-DEFNn5gi.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
