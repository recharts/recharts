import{e as t}from"./iframe-Bw8DjNMK.js";import{P as a}from"./PlotAreaShower-Bs-62jbH.js";import{c as p}from"./hooks-DIsqzK2K.js";import{R as s}from"./arrayEqualityCheck-RqErd5pi.js";import{C as n}from"./ComposedChart-CjS8ycfQ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BnxQLC5H.js";import{X as h}from"./XAxis-DXXKhKWM.js";import{Y as c}from"./YAxis-DdDXncps.js";import{L as g}from"./Legend-rXI8zasX.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./immer-D8iSY20c.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./Layer-DM0-BU9E.js";import"./ReactUtils-lXsqpfha.js";import"./Label-E6zUfHhJ.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./ZIndexLayer-DWrSmtv7.js";import"./ActivePoints-DlNvY9xF.js";import"./Dot-CNEj_K0i.js";import"./types-BIXu7WCc.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./useAnimationId-EQy0eofc.js";import"./getRadiusAndStrokeWidthFromDot-BenKvZMl.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cql93QQN.js";import"./Trapezoid-Q5mzP7fr.js";import"./Sector-DbOLYdsA.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./step-DLR3mlGm.js";import"./Curve-DtKt2A2q.js";import"./CartesianAxis-vRL28WoM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D_0LT1od.js";import"./uniqBy-CV8QdcFw.js";import"./iteratee-CJuVNxE9.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
