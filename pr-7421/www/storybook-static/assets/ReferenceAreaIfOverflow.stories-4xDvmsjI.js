import{R as e}from"./iframe-D2mK0_SY.js";import{R as s}from"./zIndexSlice-CurYRJ-V.js";import{C as p}from"./ComposedChart-FHYKcVPV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BeEFaWPi.js";import{X as d}from"./XAxis-BpVV2nBf.js";import{Y as l}from"./YAxis-C4SnN1OG.js";import{R as h}from"./ReferenceArea-bX2Ii3yr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cds45GwY.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./get-gd89bvM7.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./CartesianAxis-DT-BfhYh.js";import"./Layer-CVGFJ3pT.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./Label-BWAfqYWX.js";import"./ZIndexLayer-Cbwietl0.js";import"./types-CH3UhPbC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CuIMbGOo.js";import"./useAnimationId-Bv48rb4m.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
