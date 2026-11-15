import{R as e}from"./iframe-BaiXEn0-.js";import{R as m}from"./zIndexSlice-CSqAGFLj.js";import{C as s}from"./ComposedChart-DKPCp_TU.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BRsC9J5q.js";import{X as f}from"./XAxis-BhEilA83.js";import{Y as l}from"./YAxis-DuwRFPvA.js";import{R as d}from"./ReferenceDot-Cj2iQMjO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./throttle-D7xKVZuZ.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./RechartsWrapper-BRQNcvpu.js";import"./axisSelectors-s8isxUHu.js";import"./polarAxisSelectors-Com92wlg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bpc0urwb.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./CartesianAxis-CXgLYYat.js";import"./Layer-Dc68LG4Z.js";import"./Text-Dz83mHfX.js";import"./ZIndexLayer-BmwEMujN.js";import"./Label-CWe40LeI.js";import"./types-C6nAEk1h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CesDwFF2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
