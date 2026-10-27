import{R as t}from"./iframe-DNsV3xvw.js";import{z as a}from"./RechartsWrapper-BitdsUuz.js";import{R as p}from"./zIndexSlice-BkDmHlXx.js";import{C as n}from"./ComposedChart-DUPDtyKq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dt-wl3vw.js";import{X as l}from"./XAxis-BbuAR6XK.js";import{Y as h}from"./YAxis-B4nJYauW.js";import{L as c}from"./Legend-B1543AzP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DtPl2Lwd.js";import"./throttle-CpyfnSH3.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./polarAxisSelectors-wmmlw52W.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Y31MRKoT.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./Layer-CxNpu0Gw.js";import"./Curve-CuwsmGsN.js";import"./types-En29vQtS.js";import"./step-Bt130Gb4.js";import"./path-DyVhHtw_.js";import"./LabelList-Dxbb0X28.js";import"./Label-DxEHX6q3.js";import"./Text-D6nhI6eC.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./dataEntryStyles-BPFhmlnt.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./activeStyles-BmYbBsXF.js";import"./useAnimationId-BFFnWfJy.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./ErrorBarContext-BojgDOr6.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./CartesianAxis-BNXXsiE3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D3m42K-G.js";import"./uniqBy-C1A792zL.js";import"./iteratee-D19tejeG.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
