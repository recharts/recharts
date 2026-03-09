import{e as t}from"./iframe-CkFXM4wB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis--nz6ltt0.js";import{R as l}from"./arrayEqualityCheck-YTUxoqUB.js";import{C as x}from"./ComposedChart-DibFHF-M.js";import{B as o}from"./Bar-C5PHW-Tf.js";import{L as a}from"./Line-DrdnGU3b.js";import{X as c}from"./XAxis-BrfBiI3E.js";import{T as A}from"./Tooltip-DB8bTF4E.js";import{R as g}from"./RechartsHookInspector-B3xLxxYl.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bb-zNiAP.js";import"./Layer-dIWMs8k-.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./Label-BRTUkEBL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4pe948L1.js";import"./zIndexSlice-B5-XLxo_.js";import"./immer-VfMLklKA.js";import"./types-CUTS6MB0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./tooltipContext-BJLqNM99.js";import"./ReactUtils-YGQ827Cl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CAJHYtrp.js";import"./isPlainObject-BUyihnnB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aTEw3KI1.js";import"./useAnimationId-C9BYbESN.js";import"./Trapezoid-BrsI-zno.js";import"./Sector-DMfw9vpP.js";import"./Symbols-D5HyOKc9.js";import"./symbol-C6JS3ts9.js";import"./step-CbyAEdw5.js";import"./Curve-KgtuRfAG.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./ErrorBarContext-CePwVUjY.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./getZIndexFromUnknown-DW5Crkgc.js";import"./graphicalItemSelectors-D8LF-DWT.js";import"./ActivePoints-BuiTIuA5.js";import"./Dot-tTXkn-xi.js";import"./getRadiusAndStrokeWidthFromDot-DSs9rVtO.js";import"./useElementOffset-BnogzPjY.js";import"./uniqBy-BtLygSeP.js";import"./iteratee-BY4qpxip.js";import"./Cross-DUBAeb_H.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
