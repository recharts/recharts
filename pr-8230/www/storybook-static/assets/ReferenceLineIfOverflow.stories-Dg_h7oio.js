import{R as e}from"./iframe-B2PzCMaw.js";import{R as a}from"./zIndexSlice-D2yQeuEI.js";import{C as p}from"./ComposedChart-AFpPZ6lH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CQMMgqaf.js";import{X as f}from"./XAxis-hYV9QQyh.js";import{Y as l}from"./YAxis-B5nmPwid.js";import{L as d}from"./Line-BuZqDult.js";import{R as h}from"./ReferenceLine-CEyntY6H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./throttle-DjegI8Tm.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./axisSelectors-jPkZuWdd.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BTQYnDFg.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./Text-587hVFVv.js";import"./ZIndexLayer-P8eiWDF3.js";import"./Label-dW2fYkfR.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-36hHeCTa.js";import"./step-BzcUBi6T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BUMHKDbc.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./activeStyles-dbWrPfDr.js";import"./useAnimationId-C33gpbVv.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./ErrorBarContext-BWeZxt5m.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
