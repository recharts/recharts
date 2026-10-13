import{R as r}from"./iframe-DuosGyDB.js";import{F as a,R as n}from"./zIndexSlice-Da09UpSD.js";import{C as p}from"./ComposedChart-kJQ__URY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-BjQkedG_.js";import{X as d}from"./XAxis-C-4m1UDl.js";import{Y as h}from"./YAxis-0dGXX3NL.js";import{L as c}from"./Legend-eZbVNtkY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BFe2F0jb.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqMyJeth.js";import"./axisSelectors-BhFgqUpp.js";import"./d3-scale-BcfysILW.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Layer-kSYl9qai.js";import"./Curve-BLnV7n0Y.js";import"./types-DpRgdAcC.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./activeStyles-Cx6m_4O3.js";import"./Label-CD5z-ltE.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./ZIndexLayer-B7YuRzj4.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActivePoints-0tjl7oMt.js";import"./Dot-CVHLTOCE.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getRadiusAndStrokeWidthFromDot-BHE1JVwz.js";import"./ActiveShapeUtils-HElctZzh.js";import"./useEffectiveDataKey-BuRZ7bwL.js";import"./CartesianAxis-BQQINrGM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";const fr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:o=>r.createElement(n,{width:o.width,height:o.height},r.createElement(p,{data:s,margin:o.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},Cr=["UseMargin"];var i,e,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(e=t.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{t as UseMargin,Cr as __namedExportsOrder,fr as default};
