import{e}from"./iframe-ClXyKNgm.js";import{R as s}from"./arrayEqualityCheck-CyG4bWUs.js";import{C as p}from"./ComposedChart-GRruxady.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DhWCZGnV.js";import{X as l}from"./XAxis-BLwhd0IJ.js";import{Y as h}from"./YAxis-CJcxVAZe.js";import{R as d}from"./ReferenceArea-DOoxXCVM.js";import{R as x}from"./RechartsHookInspector-CDiaVfBA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./immer-CtYLZrTd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./hooks-BkOTtN17.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./CartesianAxis-XpuqdPkr.js";import"./Layer-BeDFs85c.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./Label-YkL7q8Nt.js";import"./ZIndexLayer-cavkLRXR.js";import"./types-C9EK63kj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BAftZiAJ.js";import"./useAnimationId-C8K-aL18.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CMB9sNFg.js";import"./ChartSizeDimensions-DpOcPLnw.js";import"./OffsetShower-C3ti5__k.js";import"./PlotAreaShower-Ji8AleEw.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
