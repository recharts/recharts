import{R as e}from"./iframe-DEVQjgtg.js";import{R as m}from"./zIndexSlice-DfK8JSFq.js";import{C as s}from"./ComposedChart-CkNI_L7v.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-qpQnI3BO.js";import{X as f}from"./XAxis-BW3rW0v-.js";import{Y as l}from"./YAxis-DNUJzVJY.js";import{R as d}from"./ReferenceDot-B8z-i3eC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./throttle-icp-MZ_z.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./RechartsWrapper-CfFuT0mb.js";import"./axisSelectors-t3BvEa3q.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Co6YNHM_.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./Label-CuMp2cQz.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-p_BgihRi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
