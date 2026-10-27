import{R as e}from"./iframe-BKOly897.js";import{R as a}from"./zIndexSlice-MuW0IoWE.js";import{C as p}from"./ComposedChart-DNIn-1lF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DzIYFcZw.js";import{X as f}from"./XAxis-CAN01VgH.js";import{Y as l}from"./YAxis-B-vCHNYJ.js";import{L as d}from"./Line-D5arw7he.js";import{R as h}from"./ReferenceLine-Cs4bJgXS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./throttle-Dj0bMbq4.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./RechartsWrapper-BR-O-n81.js";import"./axisSelectors-DAovfJtb.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FWOlMe5i.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./Label-BqeeWfBr.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DZlxAOiJ.js";import"./step-D0Rpy-Hs.js";import"./path-DyVhHtw_.js";import"./LabelList-CHIFisD0.js";import"./ActivePoints-mk-rZ28o.js";import"./Dot-fiFJQDUC.js";import"./activeStyles-C5fI4Bwm.js";import"./useAnimationId-Dwkyu_pp.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getRadiusAndStrokeWidthFromDot-B-_khl6D.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
