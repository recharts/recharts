import{c as e}from"./iframe-DCxmmXwr.js";import{g as s}from"./zIndexSlice-D5dh4jLY.js";import{C as p}from"./ComposedChart-CBS3HMO1.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-BiDkRolY.js";import{X as d}from"./XAxis-BjsM6oGC.js";import{Y as l}from"./YAxis-BdatH0tB.js";import{R as h}from"./ReferenceArea-jMcvqNvM.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-SgEFwxUu.js";import"./index-DDgPfSlI.js";import"./index-Mzvapta9.js";import"./get-BGMlQ-Gx.js";import"./resolveDefaultProps-Dbw1fq_o.js";import"./isWellBehavedNumber-CpP0Zk3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIau-2yw.js";import"./index-VwBqvb6i.js";import"./index-DgYh_LA8.js";import"./renderedTicksSlice-DSZVgTAV.js";import"./axisSelectors-dhV3Z94_.js";import"./d3-scale-Bu_zrpDn.js";import"./CartesianChart-D-fZCIkl.js";import"./chartDataContext-PHEEBUXD.js";import"./CategoricalChart-DfNs-HF3.js";import"./CartesianAxis-Bc9Tdb6N.js";import"./Layer-BBh4PyoV.js";import"./Text-BQlyDcDw.js";import"./DOMUtils-BtWg_eMC.js";import"./Label-BxDF9pHP.js";import"./ZIndexLayer-DYE1lO3r.js";import"./types-gNnCO6KJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CJU7mBdh.js";import"./useAnimationId-D36I95JC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
