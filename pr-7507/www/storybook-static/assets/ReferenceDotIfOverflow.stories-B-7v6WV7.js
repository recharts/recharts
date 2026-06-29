import{R as e}from"./iframe-_oCKXQQT.js";import{R as n}from"./zIndexSlice-Dq64QlX1.js";import{C as s}from"./ComposedChart-Doh5buxK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CGKlTvg8.js";import{X as f}from"./XAxis-D3L4SFSq.js";import{Y as l}from"./YAxis-pBFniQdP.js";import{R as d}from"./ReferenceDot-C325LFgc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BQ_gnI8m.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./get-Dgc8xSDl.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkeUzj5p.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./CategoricalChart-CepUJJer.js";import"./CartesianAxis--Lh3QzvY.js";import"./Layer-BtAMG36m.js";import"./Text-CaXzzKZw.js";import"./DOMUtils-BvVxKZ4D.js";import"./Label-DrF3NWpt.js";import"./ZIndexLayer-DUuDPJyN.js";import"./types-C2uV_Cvt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-B8ZmznHu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
