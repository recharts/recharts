import{c as e}from"./iframe-CbFBC3pt.js";import{g as n}from"./zIndexSlice-B8XantvI.js";import{C as s}from"./ComposedChart-Bc5HbX-g.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-1z4GSZj5.js";import{X as f}from"./XAxis-CuiMGrX2.js";import{Y as l}from"./YAxis-DVG7yXmp.js";import{R as d}from"./ReferenceDot-Dyf1hL2S.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BwRByMMH.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./get-CeJ-O4Ro.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./CartesianAxis-CA9u32-P.js";import"./Layer-DTzSPWpf.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./Label-8xdcvYL4.js";import"./ZIndexLayer-BgzH297Q.js";import"./types-CX4nwvsZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-rYx1Cydy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
