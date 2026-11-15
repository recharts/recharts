import{R as e}from"./iframe-Bah9cDPf.js";import{R as m}from"./zIndexSlice-D6NwopLq.js";import{C as s}from"./ComposedChart-082vf-Dq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CWm5myU0.js";import{X as f}from"./XAxis-CUlouZeJ.js";import{Y as l}from"./YAxis-I4iqsmgp.js";import{R as d}from"./ReferenceDot-DzWLiNkx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC5o00WN.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./RechartsWrapper-CuqmEJPa.js";import"./axisSelectors-BJF83DO6.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./Label-BLtLxFh_.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-OGnZYrwe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
