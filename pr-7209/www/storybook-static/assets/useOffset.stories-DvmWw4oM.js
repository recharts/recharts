import{e as t}from"./iframe-Bw8DjNMK.js";import{O as p}from"./OffsetShower-CGTxNqXv.js";import{d as a}from"./hooks-DIsqzK2K.js";import{R as s}from"./arrayEqualityCheck-RqErd5pi.js";import{C as n}from"./ComposedChart-CjS8ycfQ.js";import{p as f}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-BnxQLC5H.js";import{X as d}from"./XAxis-DXXKhKWM.js";import{Y as g}from"./YAxis-DdDXncps.js";import{L as c}from"./Legend-rXI8zasX.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./immer-D8iSY20c.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./Layer-DM0-BU9E.js";import"./ReactUtils-lXsqpfha.js";import"./Label-E6zUfHhJ.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./ZIndexLayer-DWrSmtv7.js";import"./ActivePoints-DlNvY9xF.js";import"./Dot-CNEj_K0i.js";import"./types-BIXu7WCc.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./useAnimationId-EQy0eofc.js";import"./getRadiusAndStrokeWidthFromDot-BenKvZMl.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cql93QQN.js";import"./Trapezoid-Q5mzP7fr.js";import"./Sector-DbOLYdsA.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./step-DLR3mlGm.js";import"./Curve-DtKt2A2q.js";import"./CartesianAxis-vRL28WoM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D_0LT1od.js";import"./uniqBy-CV8QdcFw.js";import"./iteratee-CJuVNxE9.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:f,margin:e.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ot=["UseOffset"];export{r as UseOffset,Ot as __namedExportsOrder,ut as default};
