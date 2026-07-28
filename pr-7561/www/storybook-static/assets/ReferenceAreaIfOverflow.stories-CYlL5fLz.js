import{R as e}from"./iframe-BdYAncLR.js";import{R as s}from"./zIndexSlice-5bpfVQyA.js";import{C as p}from"./ComposedChart-CAVG_F2Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C-qxR3D1.js";import{X as d}from"./XAxis-CbeL6UmM.js";import{Y as l}from"./YAxis-BEJGzNud.js";import{R as h}from"./ReferenceArea-Bv02FTfW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BjujQpzW.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./renderedTicksSlice-L4Igrea0.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./CartesianAxis-BX7MbhnQ.js";import"./Layer-DIV0oEbW.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./Label-JmhQBV8Y.js";import"./ZIndexLayer-TIVdTQGS.js";import"./types-OsxZUaOH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D707JDBS.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-D5kCmVGB.js";import"./useAnimationId-CVihXN2U.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
