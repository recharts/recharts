import{R as e}from"./iframe-BvniDb9M.js";import{R as n}from"./zIndexSlice-BcwOacrL.js";import{C as p}from"./ComposedChart-nO90MrSp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CzVr-k9g.js";import{X as f}from"./XAxis-BS2okIrv.js";import{Y as l}from"./YAxis-C-4Yxbjy.js";import{L as d}from"./Line-C3qRiAp2.js";import{R as h}from"./ReferenceLine-Qe-_5BwD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEm3mroc.js";import"./index-D2mR6oQd.js";import"./index-Be0pPrY3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C1GGU34C.js";import"./isWellBehavedNumber-sm35pCXt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0MN2RCFI.js";import"./index-DjBFZJXg.js";import"./index-Qpj6j6nv.js";import"./renderedTicksSlice-BGoDlWDo.js";import"./axisSelectors-DxOnbDS4.js";import"./d3-scale-B3McImOd.js";import"./CartesianChart-BIATkAst.js";import"./chartDataContext-C9IBj5vS.js";import"./CategoricalChart-COioiDUR.js";import"./CartesianAxis-DPYSgkyQ.js";import"./Layer-BeZmz3fH.js";import"./Text-uf6L8i_t.js";import"./DOMUtils-tzx2ZbvF.js";import"./Label-CRekt_d8.js";import"./ZIndexLayer-zEe-x6YM.js";import"./types-7Vi0xZSr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-Y4TbuSkA.js";import"./step-BGMWJs8n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BpsFGEZb.js";import"./useAnimationId-DrHlUTZ7.js";import"./ActivePoints-AbGS36L4.js";import"./Dot-BP3XG1sW.js";import"./RegisterGraphicalItemId-MKP5vUa-.js";import"./ErrorBarContext-NX_u8AwJ.js";import"./GraphicalItemClipPath-BlXsJvMF.js";import"./SetGraphicalItem-CUESYdxZ.js";import"./getRadiusAndStrokeWidthFromDot-DoEYDn4i.js";import"./ActiveShapeUtils-CNIg2u1g.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
