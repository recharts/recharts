import{R as t}from"./iframe-h_l55m_t.js";import{u as a}from"./CategoricalChart-sP3BCXGi.js";import{R as p}from"./zIndexSlice-DtOJxrcv.js";import{C as s}from"./ComposedChart-BAup3dHc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-7LYQCCSG.js";import{X as l}from"./XAxis-CsptUwef.js";import{Y as h}from"./YAxis-Db6yYFWM.js";import{L as c}from"./Legend-OnxUcBpi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./immer-3kgM1Yrm.js";import"./get-DBMd4dxk.js";import"./renderedTicksSlice-CmHU-lei.js";import"./axisSelectors-DWvAkDEO.js";import"./d3-scale-D1BOaHId.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./Layer-rrxq_JkN.js";import"./Curve-BUDj-vjw.js";import"./types-7ZgAaUHx.js";import"./step-D8_8cE93.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMyeCqfp.js";import"./Label-Biqo5Eli.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./ZIndexLayer-D7uTd8cS.js";import"./useAnimationId-Dn6PcdJm.js";import"./ActivePoints-BgXP9QSv.js";import"./Dot-CN1BxqM7.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getRadiusAndStrokeWidthFromDot-BDAvmvPt.js";import"./ActiveShapeUtils-DIPFKhPu.js";import"./CartesianAxis-CTJIWXoj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-By7ZWdCU.js";import"./symbol-CBHWgXcb.js";import"./useElementOffset-DAfE9lYr.js";import"./uniqBy-g-J-Oe_O.js";import"./iteratee-C8gdJKoW.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
