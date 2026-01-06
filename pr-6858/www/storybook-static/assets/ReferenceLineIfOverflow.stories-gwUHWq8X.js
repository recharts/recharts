import{e}from"./iframe-DP2mOMln.js";import{R as n}from"./arrayEqualityCheck-5iTHPuD6.js";import{C as p}from"./ComposedChart-D-mUb2sk.js";import{C as s}from"./CartesianGrid-CwGJdEIL.js";import{X as c}from"./XAxis-B_VQg86f.js";import{Y as f}from"./YAxis-WXcImUvg.js";import{L as l}from"./Line-7aVkqytC.js";import{R as d}from"./ReferenceLine-KGo_yFBf.js";import{R as h}from"./RechartsHookInspector-DVpbP7qM.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./PolarUtils-DkgNb_vz.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./zIndexSlice-Cik2D4vv.js";import"./CartesianChart-DpJZ7Wkf.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./CartesianAxis-CF6IOTSN.js";import"./Layer-BZqUSVid.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./Label-DnLJWwCk.js";import"./ZIndexLayer-BOwqkVYS.js";import"./types-DdS-Ezdx.js";import"./ReactUtils-DJEcSmKG.js";import"./ActivePoints-CZ6tlVSr.js";import"./Dot-qyySS_n7.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./ErrorBarContext-D6qGOW5T.js";import"./GraphicalItemClipPath-C-hXbMEZ.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./useAnimationId-BuyyHYgP.js";import"./getRadiusAndStrokeWidthFromDot-ChYaQN1P.js";import"./ActiveShapeUtils-BdyerBrO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcVYjSDm.js";import"./Trapezoid-3yVnAnN-.js";import"./Sector-CAH7EP92.js";import"./Symbols-1_tOvOdR.js";import"./Curve-DYGBu986.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CMQ1Twes.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./OffsetShower-B4eNU7sm.js";import"./PlotAreaShower-CPDnvxOK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
