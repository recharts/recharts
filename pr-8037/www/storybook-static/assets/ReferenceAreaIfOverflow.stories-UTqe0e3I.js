import{R as e}from"./iframe-DtNEXb77.js";import{R as p}from"./zIndexSlice-C61cTRUd.js";import{C as s}from"./ComposedChart-D7gBmB-e.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DQ51llt0.js";import{X as d}from"./XAxis-B8fOHSNk.js";import{Y as l}from"./YAxis-BIfcFYbQ.js";import{R as h}from"./ReferenceArea-CR8pSK6Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHRCkM2S.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3jS1aTx.js";import"./axisSelectors-CRqNtGDu.js";import"./d3-scale-4c7z9Afg.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-BsnYyY0R.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./Text-M6NyH5bl.js";import"./pageBackground-CwZqZ7-z.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./Label-9NLOMOhr.js";import"./ZIndexLayer-CBx6DJIh.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-C_OpsUN-.js";import"./useAnimationId-B5nilSLl.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
