import{e as t}from"./iframe-Qw1xV4gr.js";import{R as s}from"./arrayEqualityCheck-D10Koezk.js";import{C as l}from"./ComposedChart-CNN_EKWK.js";import{B as r}from"./Bar-D75Wa_0g.js";import{R as m}from"./RechartsHookInspector-D6S_l26T.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-T9NKaIls.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./Layer-CkwgDlKc.js";import"./tooltipContext-DoIMhh9S.js";import"./ReactUtils-NyMdEGMN.js";import"./Label-BQ6NoHU2.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./ZIndexLayer-E7tGttad.js";import"./types-BYf8q4m4.js";import"./ActiveShapeUtils-dC2_TVxn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-sthHTnfU.js";import"./useAnimationId-CmKwPH-s.js";import"./Trapezoid-q5W18TEo.js";import"./Sector-KkZnhZNR.js";import"./Symbols-CO8nxrkO.js";import"./Curve-BAYVpCYt.js";import"./RegisterGraphicalItemId-OUWj4Tar.js";import"./ErrorBarContext-JD7QlRlS.js";import"./GraphicalItemClipPath-CmAyPo3v.js";import"./SetGraphicalItem-BrmdzJxe.js";import"./getZIndexFromUnknown-CEDP4TCY.js";import"./graphicalItemSelectors-DIiyTOrt.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
