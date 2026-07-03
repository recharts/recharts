import{R as e}from"./iframe-C76fCBLt.js";import{R as s}from"./zIndexSlice-BsJGnMmn.js";import{C as p}from"./ComposedChart-CsRNgK1V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CcFGtFNM.js";import{X as d}from"./XAxis-BrBJ2mML.js";import{Y as l}from"./YAxis-DFPJpwmP.js";import{R as h}from"./ReferenceArea-DuWoiN23.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DuTovYxH.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./d3-scale-X-nthEaw.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./Label-Dx0etugK.js";import"./ZIndexLayer-DTL30j5z.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CCZ51hnY.js";import"./useAnimationId-CEbYcbZq.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
