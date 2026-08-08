import{R as e}from"./iframe-D_g4F33S.js";import{R as n}from"./zIndexSlice-qk_W91LH.js";import{C as p}from"./ComposedChart-DYa_RjMP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C9Qjx1Qy.js";import{X as f}from"./XAxis-D0V-DbQJ.js";import{Y as l}from"./YAxis-BeSx8PLK.js";import{L as d}from"./Line-BbKfURZ_.js";import{R as h}from"./ReferenceLine-DvQIe2Eq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8ol7TbU.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMNeBin1.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./CartesianAxis-eoFvh8zn.js";import"./Layer-CZAafMyB.js";import"./Text-dC5bBnrz.js";import"./DOMUtils-D15rvujY.js";import"./Label-mwDIEaZu.js";import"./ZIndexLayer-CBemJ52Z.js";import"./types-E4fDsamD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DEVDikLO.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DHe5_cmM.js";import"./step-BcJtBoCB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-5bCKGYgm.js";import"./useAnimationId-F97RPKrS.js";import"./ActivePoints-CjAssZ9T.js";import"./Dot-DT1eTQrx.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./ErrorBarContext-j16ccEsR.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getRadiusAndStrokeWidthFromDot-Bjf5_Zne.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
