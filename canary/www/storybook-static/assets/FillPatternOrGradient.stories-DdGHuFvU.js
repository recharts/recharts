import{e as t}from"./iframe-ChNOinEW.js";import{g as s}from"./arrayEqualityCheck-ejHXznq4.js";import{C as m}from"./ComposedChart-BOdHbnI9.js";import{p as l}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-3aYI0I31.js";import{R as c}from"./RechartsHookInspector-BOE9KQVD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CrKZ3yHb.js";import"./immer-C-_4yaFF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-e8IcX7Ky.js";import"./index-DMHtEqPw.js";import"./hooks-DZ4AuhfW.js";import"./axisSelectors-Wf-uHVWr.js";import"./d3-scale-B3SHfU9r.js";import"./zIndexSlice-BFRT_l82.js";import"./renderedTicksSlice-P1hbw2J7.js";import"./CartesianChart-C54kEOmP.js";import"./chartDataContext-DjEoDELK.js";import"./CategoricalChart-CaEOI484.js";import"./Layer-C5r2D5eL.js";import"./tooltipContext-Cu0NgHuX.js";import"./ReactUtils-Ck9hJUMi.js";import"./Label-toG1Bdw3.js";import"./Text-D9d9Y4NZ.js";import"./DOMUtils-DGZ4THTA.js";import"./ZIndexLayer-B8mCWzZh.js";import"./types-o0HcDoUt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C57_hq_U.js";import"./useAnimationId-Dtq79URZ.js";import"./ActiveShapeUtils-LTcw4Xsa.js";import"./RegisterGraphicalItemId-DDUKZo60.js";import"./ErrorBarContext-kJOKaxmw.js";import"./GraphicalItemClipPath-BEGDR4Eg.js";import"./SetGraphicalItem-DSKSTIyc.js";import"./getZIndexFromUnknown-DvZNP8lv.js";import"./graphicalItemSelectors-DvPDBxpn.js";import"./index-OCCX1cWv.js";import"./ChartSizeDimensions-Cm_TkHUI.js";import"./OffsetShower-TftFluvn.js";import"./PlotAreaShower-zOTWVw7t.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
