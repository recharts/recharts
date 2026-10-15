import{R as e}from"./iframe-DpdlAHMd.js";import{R as m}from"./zIndexSlice-D40A4F5S.js";import{C as p}from"./ComposedChart-zgSZL8eg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-_-u-nYWC.js";import{X as f}from"./XAxis-BEUW7cLW.js";import{Y as l}from"./YAxis-DLQpEtie.js";import{R as d}from"./ReferenceDot-W849WrnB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bui1B-A-.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dd9femQq.js";import"./axisSelectors-DQOroxWm.js";import"./d3-scale-DPtZvEea.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./Text-CoXwYvwY.js";import"./pageBackground-D9ogOXyk.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./Label-E3aXJx_S.js";import"./ZIndexLayer-lKfC9naY.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B-SHSrYh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
