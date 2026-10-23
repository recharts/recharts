import{R as e}from"./iframe--Qc961ov.js";import{R as p}from"./zIndexSlice-Rc2BOlPQ.js";import{C as s}from"./ComposedChart-1Ra77Ckb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dnzc5p7q.js";import{X as d}from"./XAxis-CYwUm2ws.js";import{Y as l}from"./YAxis-BdfS4w8D.js";import{R as h}from"./ReferenceArea-DWDr5RMJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D5ruWPez.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5yfwU4S.js";import"./axisSelectors-CnmzOTaD.js";import"./d3-scale-BiVvCoqI.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-CIuk1Fk6.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./CartesianAxis-BwXCcZP6.js";import"./Layer-CSo0ACXf.js";import"./Text-DukYE8yg.js";import"./pageBackground-DnfHP8JU.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./Label-BPAtAFkR.js";import"./ZIndexLayer-CboR9GKx.js";import"./dataEntryStyles-D5gnKJwo.js";import"./types-CdbE1zIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DPuH_shy.js";import"./useAnimationId-CtnGdaHg.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
