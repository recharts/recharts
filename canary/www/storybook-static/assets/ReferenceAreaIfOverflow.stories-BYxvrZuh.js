import{e}from"./iframe-Dh5fYf52.js";import{R as s}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C as p}from"./ComposedChart-DvBGIcj2.js";import{C as c}from"./CartesianGrid-BsnolCxr.js";import{X as f}from"./XAxis-B4KbS6If.js";import{Y as l}from"./YAxis-Dit0gXUW.js";import{R as h}from"./ReferenceArea-DzTJuELq.js";import{R as d}from"./RechartsHookInspector-ClQgWiSn.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./zIndexSlice-DOeznw_J.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./CartesianAxis-DxoskIqi.js";import"./Layer-CyyRPVZz.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./Label-BgIRNGCU.js";import"./ZIndexLayer-Chf-nD0r.js";import"./types-BQGztJ7o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CNvS8JgY.js";import"./useAnimationId-hVsf5NM-.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
