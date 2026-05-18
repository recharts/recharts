import{e as t}from"./iframe-DZ8hthY-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DtEBtR9E.js";import{g as l}from"./arrayEqualityCheck-CM4xUg98.js";import{C as x}from"./ComposedChart-BBz9TwIo.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-5lqtnVQE.js";import{L as a}from"./Line-ByZpIY1G.js";import{X as A}from"./XAxis-miaKL81g.js";import{T as g}from"./Tooltip-BzBtiibB.js";import{R as f}from"./RechartsHookInspector-UTj_zoVi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CAIPbX_H.js";import"./Layer-CVDrdQdQ.js";import"./resolveDefaultProps-B_ys-f75.js";import"./Text-CCJtZgZH.js";import"./DOMUtils-DNsRktQS.js";import"./Label-NDKa2SGb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CigE4wdP.js";import"./zIndexSlice-DRYSH0d1.js";import"./immer-BecrFbrr.js";import"./types-CeA2W1WE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B11M6loL.js";import"./hooks-DoB3DHlQ.js";import"./axisSelectors-DgKTbZDy.js";import"./d3-scale-DZsU5NlZ.js";import"./RechartsWrapper-BUTuEf4Y.js";import"./index-D76bsI4z.js";import"./CartesianChart-zFbedmPR.js";import"./chartDataContext-CrXAevUQ.js";import"./CategoricalChart-Bvtk9acs.js";import"./tooltipContext-DlPValuH.js";import"./ReactUtils-BDnHjpWV.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BnH0jvYd.js";import"./isPlainObject-DcZDH2H_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX54_srN.js";import"./useAnimationId-EGG1FiRd.js";import"./Trapezoid-DtiIjNQQ.js";import"./Sector-B0ZgMooc.js";import"./Symbols-DM3sefdE.js";import"./symbol-Dw5oaVNQ.js";import"./step-C2ZxtsDR.js";import"./Curve-BwYo_aCq.js";import"./RegisterGraphicalItemId-p_DkQNMI.js";import"./ErrorBarContext-A1fFW7tK.js";import"./GraphicalItemClipPath-Cgx5E8W2.js";import"./SetGraphicalItem-CO1zjpRd.js";import"./getZIndexFromUnknown-C9TT5tZ9.js";import"./graphicalItemSelectors-B7-sYK2t.js";import"./ActivePoints-CQPlZabl.js";import"./Dot-CK1-CRkK.js";import"./getRadiusAndStrokeWidthFromDot-BCNCi0Sv.js";import"./useElementOffset-CZcO71mh.js";import"./uniqBy-CITw4fEJ.js";import"./iteratee-DNBLEmsl.js";import"./Cross-Bg85ZWQq.js";import"./index-DZqpEK_T.js";import"./ChartSizeDimensions-ULUEOeMz.js";import"./OffsetShower-BU-kozBz.js";import"./PlotAreaShower-BchYlFwA.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
