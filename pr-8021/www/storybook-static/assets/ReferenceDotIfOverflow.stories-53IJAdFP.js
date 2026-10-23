import{R as e}from"./iframe--Qc961ov.js";import{R as m}from"./zIndexSlice-Rc2BOlPQ.js";import{C as p}from"./ComposedChart-1Ra77Ckb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dnzc5p7q.js";import{X as f}from"./XAxis-CYwUm2ws.js";import{Y as l}from"./YAxis-BdfS4w8D.js";import{R as d}from"./ReferenceDot-DxMWh-gH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D5ruWPez.js";import"./index-BaNjZzFe.js";import"./index-sLpNG2DY.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D0aZwB6X.js";import"./isWellBehavedNumber-BbQJ1Ue6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5yfwU4S.js";import"./axisSelectors-CnmzOTaD.js";import"./d3-scale-BiVvCoqI.js";import"./index-C334R2OZ.js";import"./index-gD-WMNxq.js";import"./renderedTicksSlice-iEsOV4gM.js";import"./index-CIuk1Fk6.js";import"./CartesianChart-BPOxbtvv.js";import"./chartDataContext-B9pBQpH6.js";import"./CategoricalChart-BTLrwTlO.js";import"./CartesianAxis-BwXCcZP6.js";import"./Layer-CSo0ACXf.js";import"./Text-DukYE8yg.js";import"./pageBackground-DnfHP8JU.js";import"./useId-DBBGR5j5.js";import"./useBackwardsCompatibleTheme-BAsN2dru.js";import"./Label-BPAtAFkR.js";import"./ZIndexLayer-CboR9GKx.js";import"./dataEntryStyles-D5gnKJwo.js";import"./types-CdbE1zIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DryseeAH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
