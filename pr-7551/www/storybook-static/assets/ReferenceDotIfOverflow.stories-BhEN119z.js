import{R as e}from"./iframe-DeA6Jpe3.js";import{R as n}from"./zIndexSlice-BC0f17EQ.js";import{C as s}from"./ComposedChart-Bx8jkPS5.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ca-mWNXH.js";import{X as f}from"./XAxis-CWYh7d5o.js";import{Y as l}from"./YAxis-5Hp6S-YS.js";import{R as d}from"./ReferenceDot-Dk5tYogd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrUA5muc.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./isWellBehavedNumber-QapkByze.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./renderedTicksSlice-BS64flHf.js";import"./axisSelectors-D1wvQQnO.js";import"./d3-scale-BpDmqGQL.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./CartesianAxis-D6SDyMBH.js";import"./Layer-EcnCd1Gq.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./Label-DxF7lRqe.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./types-Dc_zINiL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BnJj13Wl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
