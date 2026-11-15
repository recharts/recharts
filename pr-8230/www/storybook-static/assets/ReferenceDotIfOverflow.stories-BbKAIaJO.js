import{R as e}from"./iframe-B2PzCMaw.js";import{R as m}from"./zIndexSlice-D2yQeuEI.js";import{C as s}from"./ComposedChart-AFpPZ6lH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CQMMgqaf.js";import{X as f}from"./XAxis-hYV9QQyh.js";import{Y as l}from"./YAxis-B5nmPwid.js";import{R as d}from"./ReferenceDot-YtTeaHQV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./throttle-DjegI8Tm.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./axisSelectors-jPkZuWdd.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BTQYnDFg.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./Text-587hVFVv.js";import"./ZIndexLayer-P8eiWDF3.js";import"./Label-dW2fYkfR.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-QX5dxkLv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
