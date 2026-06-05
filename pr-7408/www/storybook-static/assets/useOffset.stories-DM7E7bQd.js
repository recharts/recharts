import{R as t}from"./iframe-__Uni7ot.js";import{e as p}from"./CategoricalChart-BLqwxQ25.js";import{R as a}from"./zIndexSlice-D7vG4UcO.js";import{C as s}from"./ComposedChart-De5M1TqL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-9aK3ra6i.js";import{X as d}from"./XAxis-_jE_dg8q.js";import{Y as h}from"./YAxis-CjBkwZMp.js";import{L as g}from"./Legend-E8-hGuLK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./index-B8BzxjEy.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./immer-DHOgEza7.js";import"./get-M8ASrgh5.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-id_IzIac.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./Layer-CMTKTZZ4.js";import"./Curve-DAVrDxo_.js";import"./types-DL1t91_l.js";import"./step-BeYfnRlJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZS1OqPe2.js";import"./Label-CrlvYGOF.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./ZIndexLayer-C4Jgnnas.js";import"./useAnimationId-BhPEQZA3.js";import"./ActivePoints-C2WwE9Wu.js";import"./Dot-BYTlXUFT.js";import"./RegisterGraphicalItemId-CVmvnLvy.js";import"./ErrorBarContext-DZdbeW5P.js";import"./GraphicalItemClipPath-B5rXG3_D.js";import"./SetGraphicalItem-DXUbiEXj.js";import"./getRadiusAndStrokeWidthFromDot-DeEAWH9e.js";import"./ActiveShapeUtils-r_dsHEWU.js";import"./CartesianAxis-CtUpgzNz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D_5F4i1D.js";import"./symbol-bHB5vcKZ.js";import"./useElementOffset-D9v1k3Me.js";import"./uniqBy-C2yG_xcT.js";import"./iteratee-Cq5ryGVX.js";const ht={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{r as UseOffset,gt as __namedExportsOrder,ht as default};
