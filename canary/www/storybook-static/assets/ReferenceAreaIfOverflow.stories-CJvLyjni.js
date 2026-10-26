import{R as e}from"./iframe-C-3ZsddJ.js";import{R as p}from"./zIndexSlice-CznyzfFG.js";import{C as s}from"./ComposedChart-CtuYyNef.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DaW9DFl3.js";import{X as d}from"./XAxis-ZaXNF9D9.js";import{Y as l}from"./YAxis-D4KLVqJs.js";import{R as h}from"./ReferenceArea-BaKqv_iP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B2MnXNQi.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wMqgqvbl.js";import"./axisSelectors-BJ1i-OvH.js";import"./d3-scale-DV_TqrZd.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./Text-gCPwfBz1.js";import"./pageBackground-Bkm5uuC-.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./Label-DKMse05f.js";import"./ZIndexLayer-G1m3PEiN.js";import"./dataEntryStyles-CEJLUdCX.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BFI7v7xW.js";import"./useAnimationId-SiWxI2IO.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
