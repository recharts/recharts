import{R as e}from"./iframe-Cug8bpW1.js";import{R as s}from"./zIndexSlice-9cZpiRga.js";import{C as p}from"./ComposedChart-Bv2dV5dB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BjNhFx1r.js";import{X as d}from"./XAxis-BfPgGv85.js";import{Y as l}from"./YAxis-uhDp_b-D.js";import{R as h}from"./ReferenceArea-CKFfVPHz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6lLkzEm.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./axisSelectors-BKPMDK9R.js";import"./d3-scale-Dh_zFLyg.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./Label-C_AgOq8t.js";import"./ZIndexLayer-B_am4wav.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-BkYWDjed.js";import"./useAnimationId-iyUsFQUM.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
