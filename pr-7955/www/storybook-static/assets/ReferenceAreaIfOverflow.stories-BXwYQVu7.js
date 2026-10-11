import{R as e}from"./iframe-CwCc9vh-.js";import{R as p}from"./zIndexSlice-Cze2qQ6L.js";import{C as s}from"./ComposedChart-CBS_Pqtt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CdE1ddqd.js";import{X as d}from"./XAxis-Ck9YwMSg.js";import{Y as l}from"./YAxis-5QleAohG.js";import{R as h}from"./ReferenceArea-BvlIohpQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_lHGrg8X.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJt_1m2P.js";import"./axisSelectors-CpT7QqC8.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./CartesianAxis-DXF_4xE6.js";import"./Layer-DOFh0lwh.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./Label-BR9Px2Ae.js";import"./ZIndexLayer-DyEPtPYc.js";import"./types-CQwCfrQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B2tapUkb.js";import"./useAnimationId-DnYkrRJp.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
