import{e as t}from"./iframe-I81QGiZ0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-w5mY6Ink.js";import{R as l}from"./arrayEqualityCheck-DEF1A1K9.js";import{C as x}from"./ComposedChart-MHZt8Hih.js";import{B as o}from"./Bar-BPVwY_gT.js";import{L as a}from"./Line-CWvEZ8nS.js";import{X as c}from"./XAxis-CQKq-ex8.js";import{T as A}from"./Tooltip-UxmMbkYs.js";import{R as g}from"./RechartsHookInspector-CY8GaMGS.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B00ihn4w.js";import"./Layer-nQYqqIOO.js";import"./resolveDefaultProps-CESK2sOz.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./zIndexSlice-BTQopzha.js";import"./immer-Bx-m2dTE.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./RechartsWrapper-DhPN24j4.js";import"./index-MTHTVMV2.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./tooltipContext-BkxoPcwr.js";import"./ReactUtils-bl8BpOYM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSAz1yWp.js";import"./useAnimationId-BTiaxNBH.js";import"./Trapezoid-BCwQCoIH.js";import"./Sector-CEDvP0Pt.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./step-DCb-mqT3.js";import"./Curve-COcp6alG.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./ErrorBarContext-6fNIAsL2.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./getZIndexFromUnknown-DD8ECy1A.js";import"./graphicalItemSelectors-Bhl9ritq.js";import"./ActivePoints-D75FV8Tu.js";import"./Dot-BGO9lVtU.js";import"./getRadiusAndStrokeWidthFromDot-dbaSmHwq.js";import"./useElementOffset-BIXhMv0f.js";import"./uniqBy-DtcJp7bW.js";import"./iteratee-Al1RcwZC.js";import"./Cross-9H6MLiUO.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
