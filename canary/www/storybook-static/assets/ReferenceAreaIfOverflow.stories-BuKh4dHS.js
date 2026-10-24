import{R as e}from"./iframe-02jumC35.js";import{R as p}from"./zIndexSlice-Dh2CbWTc.js";import{C as s}from"./ComposedChart-R_fgljAr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D2T66nDB.js";import{X as d}from"./XAxis-CnRK3wsv.js";import{Y as l}from"./YAxis-mNI4SsbU.js";import{R as h}from"./ReferenceArea-BsYFGKcY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClpzkpkH.js";import"./axisSelectors-M7ebD7ER.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./Label-DdA7iutk.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-tsu_f_5l.js";import"./useAnimationId-BlDuhaIC.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ae as __namedExportsOrder,ne as default};
