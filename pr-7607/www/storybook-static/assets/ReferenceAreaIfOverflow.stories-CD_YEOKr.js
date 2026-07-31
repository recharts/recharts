import{R as e}from"./iframe-BNn_UWWx.js";import{R as s}from"./zIndexSlice-DE7GeAH-.js";import{C as p}from"./ComposedChart-iCBZpoeK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DbZp0pXH.js";import{X as d}from"./XAxis-DzOTQwY3.js";import{Y as l}from"./YAxis-BcmUZyL1.js";import{R as h}from"./ReferenceArea-Dy-ZmWr0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dubphbjd.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./Label-BR5BCwPX.js";import"./ZIndexLayer-DbGeHIXa.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BIKDq1_W.js";import"./useAnimationId-DDbhsfXp.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
