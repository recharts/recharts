import{R as e}from"./iframe-CwjnBdPJ.js";import{R as a}from"./zIndexSlice-DCK0oMjs.js";import{C as p}from"./ComposedChart-DEjJaHPL.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bt64PR7p.js";import{X as f}from"./XAxis-DGiS1jyS.js";import{Y as l}from"./YAxis-BJPBUcLn.js";import{L as d}from"./Line-BtP8MguI.js";import{R as h}from"./ReferenceLine-0pCQ03If.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NOTipQ48.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DssFoHZN.js";import"./axisSelectors-yVNmvCZQ.js";import"./d3-scale-B8EUKI5D.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./Text-CkJvnqMb.js";import"./pageBackground-CPZsdU6n.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./Label-DUPKJ4wq.js";import"./ZIndexLayer-Cf72LToz.js";import"./dataEntryStyles-MXIeXXjf.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./path-DyVhHtw_.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
