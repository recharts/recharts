import{R as e}from"./iframe-CV15e7az.js";import{R as s}from"./zIndexSlice-CjGsmEi1.js";import{C as p}from"./ComposedChart-BEyLsXgU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BLV9M795.js";import{X as d}from"./XAxis-DLZMrQJA.js";import{Y as l}from"./YAxis-BGgz64vm.js";import{R as h}from"./ReferenceArea-axsJJ51Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CHzP70vu.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDXDvVK3.js";import"./index-BoM1UPcR.js";import"./index-BBpab-Hd.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./axisSelectors-CI8TiAbs.js";import"./d3-scale-BchuFtEx.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./CartesianAxis-C65u4Bt5.js";import"./Layer-D7-BURxK.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./Label-CWZ2l2lA.js";import"./ZIndexLayer-D33L973J.js";import"./types-CWD3xXR9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-Bx-fAemw.js";import"./useAnimationId-CAqTHHd1.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
