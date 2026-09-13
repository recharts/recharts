import{R as e}from"./iframe-GEWoEgYU.js";import{R as p}from"./zIndexSlice-m50y9bt7.js";import{C as s}from"./ComposedChart-CcuEmYol.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-ifwHriUt.js";import{X as d}from"./XAxis-BNnHyyR6.js";import{Y as l}from"./YAxis-Do1ezRev.js";import{R as h}from"./ReferenceArea-mUY60NRL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQWr01n7.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DpAlDskP.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUhcDKTP.js";import"./axisSelectors-3BecUZh2.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./Text-DisRgGpM.js";import"./DOMUtils-_s9ELKXC.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./Label-BrqW8KDJ.js";import"./ZIndexLayer-UqU4qgkO.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CjQE5fD5.js";import"./useAnimationId-DCtzAZ-Q.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
