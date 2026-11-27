import{R as e}from"./iframe-WNWxHA5w.js";import{R as m}from"./zIndexSlice-BVgHV45y.js";import{C as s}from"./ComposedChart-DpKMEvwE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DHdAq2Ns.js";import{X as f}from"./XAxis-DfMY5qBP.js";import{Y as l}from"./YAxis-C2XMsDVi.js";import{R as d}from"./ReferenceDot-CbX7CEcj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./throttle-DWlA00LM.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./RechartsWrapper-MLPBuzwi.js";import"./axisSelectors-DqPRQxzX.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./Label-CezBD4yi.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DNElWDLL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
