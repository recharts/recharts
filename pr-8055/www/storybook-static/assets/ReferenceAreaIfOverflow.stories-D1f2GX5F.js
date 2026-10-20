import{R as e}from"./iframe-CugsIFqT.js";import{R as p}from"./zIndexSlice-DhzbqJ4_.js";import{C as s}from"./ComposedChart-B19W0OVJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B1sm3k7E.js";import{X as d}from"./XAxis-6HDBvGN1.js";import{Y as l}from"./YAxis-DaK5xoY3.js";import{R as h}from"./ReferenceArea-D_JKcw9e.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcWQ2VKw.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./isWellBehavedNumber-De17yvdK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Omcwd_.js";import"./axisSelectors-v31N2mNx.js";import"./d3-scale-BE1RrYdy.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DwBMtOAp.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./CartesianAxis-BJ-39moG.js";import"./Layer-Cn8FVO5-.js";import"./Text-B6xMGXMn.js";import"./pageBackground-CAJ4za5K.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./Label-Bo3nl74y.js";import"./ZIndexLayer-DwmQuX8A.js";import"./types-D00HSLdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BTGg0Smx.js";import"./useAnimationId-D9Q9XIBx.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
