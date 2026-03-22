import{e as t}from"./iframe-m8q5t3md.js";import{O as p}from"./OffsetShower-qDjcRr8n.js";import{d as a}from"./hooks-nzhcMf4x.js";import{R as s}from"./arrayEqualityCheck-DrSDqkLD.js";import{C as n}from"./ComposedChart-mWV3_oXN.js";import{L as f}from"./Line-D8kr-aJg.js";import{X as h}from"./XAxis-D9s1UdL9.js";import{Y as d}from"./YAxis-3rVJTeb7.js";import{L as g}from"./Legend-P8tl-8U2.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./immer-DMxbvvOq.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./zIndexSlice-BFsJzxfG.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./Layer-C2TdqJIe.js";import"./ReactUtils-Dcz365jx.js";import"./Label-JUKbE3JW.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./ActivePoints-D3DuYUxN.js";import"./Dot--mgd1LbI.js";import"./types-C2IIvjb3.js";import"./RegisterGraphicalItemId-QDXXrpkb.js";import"./ErrorBarContext-ExRYnIf4.js";import"./GraphicalItemClipPath-JhKOKnEz.js";import"./SetGraphicalItem-DTrTlaD3.js";import"./useAnimationId-Cp-1L-xj.js";import"./getRadiusAndStrokeWidthFromDot-xB2-LwJw.js";import"./ActiveShapeUtils-BuaI6NWG.js";import"./isPlainObject-glNQFXom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-HTdxKaWE.js";import"./Trapezoid-YBhqI0fM.js";import"./Sector-CqOCHMeq.js";import"./Symbols-Dl-fcwHF.js";import"./symbol-Cmq7mipq.js";import"./step-BQd-JXh1.js";import"./Curve-Clnct1hH.js";import"./CartesianAxis-B_P6O2DK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qS0vSeWD.js";import"./uniqBy-CPILqBye.js";import"./iteratee-F2kSi97o.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:c,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(d,null),t.createElement(g,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
