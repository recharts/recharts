import{e as t}from"./iframe-CLI455N8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-CAsk9t5u.js";import{R as l}from"./arrayEqualityCheck-DGATYUvM.js";import{C as x}from"./ComposedChart-BPPpLWby.js";import{B as o}from"./Bar-D_iN2Q_O.js";import{L as a}from"./Line-tHQrI0Gy.js";import{X as c}from"./XAxis-D9lstoZk.js";import{T as A}from"./Tooltip-94J8FdH-.js";import{R as g}from"./RechartsHookInspector-B0jcEhQg.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DTFJnQq6.js";import"./Layer-C2gLD8qT.js";import"./resolveDefaultProps-CegQPTcY.js";import"./Text-B9IImLk3.js";import"./DOMUtils-DwfKCbJu.js";import"./Label-DZ3NTBbi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bu63NknL.js";import"./zIndexSlice-D_mnyKw0.js";import"./immer-DmWp1HVW.js";import"./types-BBHZriQH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CceCuUpi.js";import"./hooks-Doc11HYF.js";import"./axisSelectors-BdO5JamF.js";import"./d3-scale-BI_Xdw0D.js";import"./RechartsWrapper-BiomK5HP.js";import"./index-BwppRXXR.js";import"./CartesianChart-Bvwnl3Az.js";import"./chartDataContext-1HoxnSEy.js";import"./CategoricalChart-M5ONOIR4.js";import"./tooltipContext-CJNNno57.js";import"./ReactUtils-D6yH62ZJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CFqNdOfc.js";import"./isPlainObject-BZ_hFATh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4yn2vQK.js";import"./useAnimationId-CjNefpky.js";import"./Trapezoid-B6vgceDf.js";import"./Sector-RnRqdmAJ.js";import"./Symbols-B_3hTHr3.js";import"./symbol-BobG1HrB.js";import"./step-Bbb8NlBF.js";import"./Curve-jc1v2UsA.js";import"./RegisterGraphicalItemId-DhtbT04w.js";import"./ErrorBarContext-CHpZdGkV.js";import"./GraphicalItemClipPath-5s_f3x1V.js";import"./SetGraphicalItem-MRBrVOH2.js";import"./getZIndexFromUnknown-B3V864ps.js";import"./graphicalItemSelectors-CEQRKNVB.js";import"./ActivePoints-BykxdX5n.js";import"./Dot-DEiLNns9.js";import"./getRadiusAndStrokeWidthFromDot-CtHwe_Ur.js";import"./useElementOffset-adUELXCl.js";import"./uniqBy-5HGDckRY.js";import"./iteratee-CpzsuQdP.js";import"./Cross-C3434ay5.js";import"./index-DzCTiCHw.js";import"./ChartSizeDimensions-CHU61BQR.js";import"./OffsetShower-B0bvPXsU.js";import"./PlotAreaShower-wBW1mPFi.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
