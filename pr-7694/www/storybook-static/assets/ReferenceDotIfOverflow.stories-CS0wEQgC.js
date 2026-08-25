import{R as e}from"./iframe-CkYMKdj_.js";import{R as n}from"./zIndexSlice-BYtB_o4a.js";import{C as s}from"./ComposedChart-aFeYXy0e.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dh6FTCJi.js";import{X as f}from"./XAxis-C0aJOre-.js";import{Y as l}from"./YAxis-U8fHQD44.js";import{R as d}from"./ReferenceDot-CEuY0-IS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BoLMdPdD.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./axisSelectors-C8zY5_Jl.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./CartesianAxis-CwqvTQH4.js";import"./Layer-DM-j75FJ.js";import"./Text-DLxJgi7q.js";import"./DOMUtils-CRMwsydF.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./Label-nwXUgC1e.js";import"./ZIndexLayer-CYcyrDOa.js";import"./types-lWnA8D12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DTKTIC4o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
