import{R as e}from"./iframe-dVDPDAoI.js";import{R as n}from"./zIndexSlice-Bsc_tgY7.js";import{C as s}from"./ComposedChart-BPNopFli.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B8Z3ho_x.js";import{X as f}from"./XAxis-Ra2gX97C.js";import{Y as l}from"./YAxis-BD3X1oHR.js";import{R as d}from"./ReferenceDot-B1HqbUWy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BdmkJOJr.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./get-VpXFggwN.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./CartesianAxis-BOKYqx2U.js";import"./Layer-M7jAw79j.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./Label-BEOAhV_I.js";import"./ZIndexLayer-D86eoQTZ.js";import"./types-jcNKZDcp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BoVNLJ4n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
