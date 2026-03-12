import{e as t}from"./iframe-COcG-qbh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-D1iCzuYE.js";import{R as l}from"./arrayEqualityCheck-BeOMvnb3.js";import{C as x}from"./ComposedChart-Bj1Kn6Ah.js";import{B as o}from"./Bar-k4uNftwS.js";import{L as a}from"./Line-ybx60JI6.js";import{X as c}from"./XAxis-BvRN0x7f.js";import{T as A}from"./Tooltip-sq3R3vOV.js";import{R as g}from"./RechartsHookInspector-D4zrFLHG.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-RY42tSQN.js";import"./Layer-vnezQjXg.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./Label-DoQmsUBD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbjqRzm7.js";import"./zIndexSlice-DLKXsrK7.js";import"./immer-Ca_zwxaB.js";import"./types-BmPLOBN4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./tooltipContext-CBZyweKL.js";import"./ReactUtils-ByNOpxgT.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RW2zb_O9.js";import"./isPlainObject-C1cKrmsx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DI-yKH8h.js";import"./useAnimationId-C4wu98Fe.js";import"./Trapezoid-CsCypRfT.js";import"./Sector-DxAh5Ohi.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";import"./step-CYjHyJAh.js";import"./Curve-C3xLkezj.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./ErrorBarContext-DI230CHI.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./getZIndexFromUnknown-BDxRIK1i.js";import"./graphicalItemSelectors-9vdvgeJj.js";import"./ActivePoints-BrEavqGN.js";import"./Dot-CVahyVSD.js";import"./getRadiusAndStrokeWidthFromDot-BeBm-eBn.js";import"./useElementOffset-Cma1-6mE.js";import"./uniqBy-BdlGcYq-.js";import"./iteratee-CmvkIptj.js";import"./Cross-D2fxYFkW.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
