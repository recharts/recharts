import{R as e}from"./iframe-DwOXtgzn.js";import{R as s}from"./zIndexSlice-Dmyle4yQ.js";import{C as p}from"./ComposedChart-BpGZdJrE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CqL5Kz37.js";import{X as d}from"./XAxis-VTalBozJ.js";import{Y as l}from"./YAxis-b4-CuLUW.js";import{R as h}from"./ReferenceArea-DHB-bdFH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xTjEl_pc.js";import"./index-CrEwMW4H.js";import"./index-QUHlWLUZ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bx4BRzZ6.js";import"./isWellBehavedNumber-CHPTSSoT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mJXYZQqb.js";import"./index-ELFXx2ej.js";import"./index-bc6z-CkW.js";import"./renderedTicksSlice-DOm8uXLN.js";import"./axisSelectors-Dzpx2B0P.js";import"./d3-scale-MfXP3SuX.js";import"./CartesianChart-EebZWKim.js";import"./chartDataContext-C0SbFtj0.js";import"./CategoricalChart-D1DyaryK.js";import"./CartesianAxis-DdjJEKUq.js";import"./Layer-DB__irZe.js";import"./Text-CSVGnOzm.js";import"./DOMUtils-B10qim04.js";import"./Label-CIRdFLpv.js";import"./ZIndexLayer-IkkcGrga.js";import"./types-BWK-xR3U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-Btubkh1S.js";import"./useAnimationId-7jXy7qds.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
