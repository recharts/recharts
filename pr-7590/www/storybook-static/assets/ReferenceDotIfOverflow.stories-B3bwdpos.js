import{R as e}from"./iframe-CLpUHFUx.js";import{R as n}from"./zIndexSlice-ih_i1g5t.js";import{C as s}from"./ComposedChart-7luAuAhp.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DCiVUYww.js";import{X as f}from"./XAxis-DQukB1wG.js";import{Y as l}from"./YAxis-2SAbeq8Q.js";import{R as d}from"./ReferenceDot-BqjeRMzW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLd1kjXB.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./d3-scale-BxXYUMYM.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./CartesianAxis-Dv_zGlnO.js";import"./Layer-3AQvPOBc.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./Label-Cri2SigJ.js";import"./ZIndexLayer-DoU1T_G7.js";import"./types-BtWOZotP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-rjCZu1cP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
