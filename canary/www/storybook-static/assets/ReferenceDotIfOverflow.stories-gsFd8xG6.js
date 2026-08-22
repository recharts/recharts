import{R as e}from"./iframe-DxWIhncV.js";import{R as n}from"./zIndexSlice-CvFttmX7.js";import{C as s}from"./ComposedChart-VHLo6-eR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-KtGV8CEV.js";import{X as f}from"./XAxis-B9Vxe31q.js";import{Y as l}from"./YAxis-Dejd3ooC.js";import{R as d}from"./ReferenceDot-BWhcrNSK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C5bM6B-L.js";import"./index-OyYFMy4T.js";import"./index-BKRCm9JK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V7Mvhtws.js";import"./isWellBehavedNumber-DTEIR8Fb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5eKH7dT.js";import"./index-CHkzAMA5.js";import"./index-39_4eaUE.js";import"./axisSelectors-CaYZoQ6p.js";import"./d3-scale-DFkdR_XV.js";import"./renderedTicksSlice-CNtjsUso.js";import"./CartesianChart-DMs5RbVK.js";import"./chartDataContext-BpCWz6pa.js";import"./CategoricalChart-CQ97Eg67.js";import"./CartesianAxis-Dlus29TQ.js";import"./Layer-BXKPNUYf.js";import"./Text-4TpGVjWK.js";import"./DOMUtils-B8BFdTtq.js";import"./useId-Dpmp0CEj.js";import"./useBackwardsCompatibleTheme-BcpIawcL.js";import"./Label-CAN8FPPW.js";import"./ZIndexLayer-A4oI6laB.js";import"./types-B27w_GlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Bcw6SvmA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
