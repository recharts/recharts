import{R as e}from"./iframe-BL3cqs0v.js";import{R as p}from"./zIndexSlice-Bp5UfHlJ.js";import{C as s}from"./ComposedChart-CuwCdTLA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CmYlMMvz.js";import{X as d}from"./XAxis-B7WybKMv.js";import{Y as l}from"./YAxis-SEmBBB09.js";import{R as h}from"./ReferenceArea-BVPIbzft.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsbZKCB4.js";import"./throttle-CFuBzL7d.js";import"./index-Xo9PhSCx.js";import"./index-M6yM2tbI.js";import"./RechartsWrapper-rjJlKnXT.js";import"./axisSelectors-Df4vXTv0.js";import"./polarAxisSelectors-BgHDg8wg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqPJ3v9v.js";import"./index-f4nmOf8P.js";import"./index-BMIlL233.js";import"./renderedTicksSlice-B58pSaah.js";import"./index-DXhLf1tc.js";import"./fillDefinitions-qZuxFB6J.js";import"./CartesianChart-CNDb6X0a.js";import"./ZIndexPortal-Bl3Dp53e.js";import"./CategoricalChart-BgL_VXFO.js";import"./CartesianAxis-Pi3KV9RP.js";import"./Layer-ClHABKOt.js";import"./Text-BwMtBvSi.js";import"./DOMUtils-BPtMjC5_.js";import"./ZIndexLayer-DgWY8WnK.js";import"./Label-DWi9EbQl.js";import"./types-CCfYuf_x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-a8ObDMaW.js";import"./useAnimationId-BsAm0EGv.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
