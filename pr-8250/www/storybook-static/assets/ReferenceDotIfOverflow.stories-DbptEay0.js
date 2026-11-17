import{R as e}from"./iframe-DU9JCgt3.js";import{R as m}from"./zIndexSlice-CxGcNVtb.js";import{C as s}from"./ComposedChart-CdeuUBYe.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BIs6mNFY.js";import{X as f}from"./XAxis-aQms9ffh.js";import{Y as l}from"./YAxis-BhPAk-qT.js";import{R as d}from"./ReferenceDot-DMLWmpuu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./throttle-BSvWgvBy.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./RechartsWrapper-EGU-JwYV.js";import"./axisSelectors-Ba1wHviL.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D71t0tOP.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./Label-TtbmFLuu.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Cq9hKL4h.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
