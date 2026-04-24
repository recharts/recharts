import{e as t}from"./iframe-iXVZ0OWw.js";import{R as s}from"./arrayEqualityCheck-Bs7awETv.js";import{C as m}from"./ComposedChart-D42n6zmq.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-DpPX3MhS.js";import{R as c}from"./RechartsHookInspector-QPfA1UiQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DZrbJThI.js";import"./immer-D9XbeXAx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./zIndexSlice-D699PQjh.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./Layer-CGbljtJR.js";import"./tooltipContext-BuOnD9f8.js";import"./ReactUtils-DHe6gE8g.js";import"./Label-DFdLWFZO.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./ZIndexLayer-Bsv83kPu.js";import"./types-BHwUrVE7.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLIttevF.js";import"./isPlainObject-C5HoPG-J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSd4AbXR.js";import"./useAnimationId-B_Uu5T7V.js";import"./Trapezoid-CQSpJBVW.js";import"./Sector-BBLCd5Jd.js";import"./Symbols-vgP9iBxE.js";import"./symbol-C3fUoARJ.js";import"./step-C3QbnIY1.js";import"./Curve-8m_6XEtl.js";import"./RegisterGraphicalItemId-BvNsmO5D.js";import"./ErrorBarContext-Bl38LcUT.js";import"./GraphicalItemClipPath-CbkDaRj8.js";import"./SetGraphicalItem-BA2l-KDv.js";import"./getZIndexFromUnknown-B_TEGjvf.js";import"./graphicalItemSelectors-Sfmz7aRe.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
