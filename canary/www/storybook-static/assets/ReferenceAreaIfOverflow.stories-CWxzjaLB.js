import{R as e}from"./iframe-BX5cRibr.js";import{R as p}from"./zIndexSlice-AZuYl_vp.js";import{C as s}from"./ComposedChart-ySsto5-f.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BEN8mmtg.js";import{X as d}from"./XAxis-DwJ67tbd.js";import{Y as l}from"./YAxis-LHNvPj5J.js";import{R as h}from"./ReferenceArea-BKcMQP6A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zmqWqRK4.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./Label-DaxsWVsm.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-sEO8jAvN.js";import"./useAnimationId-CcWR-JA_.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
