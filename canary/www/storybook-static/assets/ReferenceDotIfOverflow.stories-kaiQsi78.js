import{R as e}from"./iframe-DVVgwXG1.js";import{R as n}from"./zIndexSlice-Cy6ToStD.js";import{C as p}from"./ComposedChart-CyvTvZ7f.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CmvFhc6C.js";import{X as f}from"./XAxis-Bz_enE-E.js";import{Y as l}from"./YAxis-DTftp1IZ.js";import{R as d}from"./ReferenceDot-DzSwKXmy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3PkmjBJ2.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./CartesianAxis-CMSfRSGS.js";import"./Layer-DfoKGH6M.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./Label-Bq1dbdZA.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./types-6aOyMGka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CtGJ8Abr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
