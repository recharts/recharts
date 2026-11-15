import{R as e}from"./iframe-C5Zmv3_Q.js";import{R as m}from"./zIndexSlice-C4av0-dC.js";import{C as s}from"./ComposedChart-DQmUib5w.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-d1gBM25Q.js";import{X as f}from"./XAxis-CXSd1JZe.js";import{Y as l}from"./YAxis-iK8t4Zai.js";import{R as d}from"./ReferenceDot-CocFzAYj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./throttle-D_vuQCXn.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./RechartsWrapper-Cbn62-za.js";import"./axisSelectors-LAQsy88k.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AN13rbty.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./Text-CCFi8jW2.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./Label-nDrE78J8.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BoR4BuHa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
