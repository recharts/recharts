import{e as t}from"./iframe-p2IvJPp5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-3lSAnX_i.js";import{R as l}from"./arrayEqualityCheck-MFpiNrgh.js";import{C as x}from"./ComposedChart-Cl8F1Prg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DPaCvlzu.js";import{L as a}from"./Line-BhX3KrEI.js";import{X as A}from"./XAxis-TolWHMJv.js";import{T as g}from"./Tooltip-CstLMPkD.js";import{R as f}from"./RechartsHookInspector-BTfDdL-Q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C8slwFAS.js";import"./Layer-CAMhjis1.js";import"./resolveDefaultProps-D-WOYVwL.js";import"./Text-DybomHzv.js";import"./DOMUtils-JIJzz5BZ.js";import"./Label-dvxvBKxQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DEFjE1si.js";import"./zIndexSlice-DkiB7jtC.js";import"./immer-C-3OxAJ7.js";import"./types-BUdqLlBz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BZEkjAjn.js";import"./hooks-BwAS4l5Q.js";import"./axisSelectors-BYVqkL8o.js";import"./d3-scale-_MVxtyqx.js";import"./RechartsWrapper-CC3JfRCb.js";import"./index-Bbr8AUP0.js";import"./CartesianChart-sJv9-h8P.js";import"./chartDataContext-RNMGpAdm.js";import"./CategoricalChart-CdP1Gioy.js";import"./tooltipContext-Di9Apx8X.js";import"./ReactUtils-DS7t9UEd.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DiQy87fd.js";import"./isPlainObject-vfUJw-kg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--WL1ouFK.js";import"./useAnimationId-DfX16akC.js";import"./Trapezoid-CfMC4Ru_.js";import"./Sector-DpIUnASU.js";import"./Symbols-st46PVLX.js";import"./symbol-D4aZHrvc.js";import"./step-BLz-mTOp.js";import"./Curve-ymYrUrgJ.js";import"./RegisterGraphicalItemId-BMsKHjZL.js";import"./ErrorBarContext-RDHgQQ1P.js";import"./GraphicalItemClipPath-Du63Zh2t.js";import"./SetGraphicalItem-BFQTuzAF.js";import"./getZIndexFromUnknown-BM9VPmbC.js";import"./graphicalItemSelectors-DZjDdUgY.js";import"./ActivePoints-BszxelsK.js";import"./Dot-B9yHy92F.js";import"./getRadiusAndStrokeWidthFromDot-BV_w38gC.js";import"./useElementOffset-DDZhMm9e.js";import"./uniqBy-BDukc5-8.js";import"./iteratee-Chvr53L9.js";import"./Cross-DSmLOanO.js";import"./index-M5GHmuSt.js";import"./ChartSizeDimensions-DmpIaGou.js";import"./OffsetShower-BlCTa7sz.js";import"./PlotAreaShower-BfA3uM21.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
