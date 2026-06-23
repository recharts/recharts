import{R as e}from"./iframe-Bc8uafj_.js";import{R as n}from"./zIndexSlice-DgIKKnku.js";import{C as s}from"./ComposedChart-BaFcNv6t.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BZwF4Ai8.js";import{X as f}from"./XAxis-D3U7ZnRc.js";import{Y as l}from"./YAxis-TQ1T3gnX.js";import{R as d}from"./ReferenceDot-CGKYfv3w.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhRCiF9y.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./get-CoQ1aHe8.js";import"./resolveDefaultProps-D94aQw_7.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./renderedTicksSlice-CDLhDidm.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./CartesianAxis-DjGZfAuA.js";import"./Layer-BOwFFWNG.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./Label-3HS03WWg.js";import"./ZIndexLayer-BEkWbSjN.js";import"./types-unK8WfaH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-Ch1zQlh_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
