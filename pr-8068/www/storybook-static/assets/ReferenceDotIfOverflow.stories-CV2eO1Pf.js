import{R as e}from"./iframe-fRQcLAl5.js";import{R as m}from"./zIndexSlice-Dn-AwdFU.js";import{C as p}from"./ComposedChart-EXBPqiIb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cm7w7xPd.js";import{X as f}from"./XAxis-YHoN4cJ8.js";import{Y as l}from"./YAxis-B2vH-p_Z.js";import{R as d}from"./ReferenceDot-B_qMO6Ox.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9yJ7HBS.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BSRNeAis.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UgoWSvvL.js";import"./axisSelectors-BcHvjcBD.js";import"./d3-scale-DfAPImNq.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-0uuwnO43.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./Label-B-GmpToQ.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CoF5eEMQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
