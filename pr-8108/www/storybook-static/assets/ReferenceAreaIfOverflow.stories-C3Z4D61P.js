import{R as e}from"./iframe-BPaILHrg.js";import{R as s}from"./zIndexSlice-Bmw1fph3.js";import{C as p}from"./ComposedChart-DU4uZiCB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dm5IA2uO.js";import{X as d}from"./XAxis-Bp49XRaF.js";import{Y as l}from"./YAxis-CZAlOOP6.js";import{R as h}from"./ReferenceArea-BDsHlb2R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./throttle-B9kMlkpl.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./RechartsWrapper-D7MXGog1.js";import"./axisSelectors-BgmzCmWH.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./CartesianAxis-DqZBHpVR.js";import"./Layer-BYN-xjEA.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./Label-r7ey19qR.js";import"./types-DUbTKtwp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-zVYi39zS.js";import"./useAnimationId-BDqdHn7D.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
