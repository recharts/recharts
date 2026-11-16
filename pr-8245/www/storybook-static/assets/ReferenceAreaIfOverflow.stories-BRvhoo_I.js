import{R as e}from"./iframe-B7zNIrOO.js";import{R as s}from"./zIndexSlice-BrXa08HH.js";import{C as p}from"./ComposedChart-CwA4XzeT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Brg9M3zm.js";import{X as d}from"./XAxis-vwLDX7Ct.js";import{Y as l}from"./YAxis-DDLRqqCt.js";import{R as h}from"./ReferenceArea-UOA5H7gT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DItvlha8.js";import"./throttle-eF_Q2QNr.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./axisSelectors-BpHmVUrQ.js";import"./polarAxisSelectors-DMv2prKV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctmq2SXE.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./CartesianAxis-_HHYfvE8.js";import"./Layer-_oO_qD0a.js";import"./Text-RcA031Tp.js";import"./ZIndexLayer-wE65zH98.js";import"./Label-Chg26k5h.js";import"./types-Byak9pOA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CoacEEbH.js";import"./useAnimationId-kE9HxpHZ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
