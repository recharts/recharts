import{R as e}from"./iframe-CFlvYhwJ.js";import{R as n}from"./zIndexSlice-DsYga1t6.js";import{C as p}from"./ComposedChart-B5QMSZu4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DxEsM2_F.js";import{X as f}from"./XAxis-BkEb723n.js";import{Y as l}from"./YAxis-HOrPhXMW.js";import{L as d}from"./Line-DKG46EWA.js";import{R as h}from"./ReferenceLine-BPnsH1ez.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGHHBzas.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1HAFajw.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRpfhqml.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./d3-scale-dVjou3RT.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";import"./CartesianAxis-CTp7B_-s.js";import"./Layer-CW0ll6KY.js";import"./Text-DN7KrSut.js";import"./DOMUtils-D9HWXXxc.js";import"./Label-QMoyFNov.js";import"./ZIndexLayer-CvEqpirx.js";import"./types-CdMLkiLP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DehnkZN_.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C-oh9Gi7.js";import"./step-De1pGJyj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DsKEiEFE.js";import"./useAnimationId-C-XOTnuE.js";import"./ActivePoints-7_4sir7A.js";import"./Dot-DikTEoY0.js";import"./RegisterGraphicalItemId-Dt1qkWl-.js";import"./ErrorBarContext-trjmp7P9.js";import"./GraphicalItemClipPath-CRnvGLDA.js";import"./SetGraphicalItem-BR7YSlkQ.js";import"./graphicalItemIdentity-D5gCgso6.js";import"./ActiveShapeUtils-CfzUyvN7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
