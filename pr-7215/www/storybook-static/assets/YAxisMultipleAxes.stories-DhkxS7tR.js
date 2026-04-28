import{e as t}from"./iframe-CcieUljj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ChIRv6Dr.js";import{R as l}from"./arrayEqualityCheck-CBSvOn2m.js";import{C as x}from"./ComposedChart-iK8PeiJH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DInerr8U.js";import{L as a}from"./Line-DSrWZJOK.js";import{X as A}from"./XAxis-DRW_fzsF.js";import{T as g}from"./Tooltip-DPG6Xagy.js";import{R as f}from"./RechartsHookInspector-gpfAdvlL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-y4_48Kdj.js";import"./Layer-kYv4pH7g.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./Text-ByRBAoo5.js";import"./DOMUtils-CgPYrlEh.js";import"./Label-x_qN36Er.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJKRgvH9.js";import"./zIndexSlice-COf-5-fj.js";import"./immer-CRL2VYbe.js";import"./types-CacpOb3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-OQ158BwU.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./tooltipContext-DGg66U6z.js";import"./AnimatedItems-RMCtBAwF.js";import"./useAnimationId-DddwMKxX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-OiQWsOUN.js";import"./isPlainObject-DI_W5C57.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Z_JKhr7t.js";import"./Trapezoid-CWN34y2W.js";import"./Sector-BSfRVALc.js";import"./Symbols-CuWHy7F-.js";import"./symbol-iKW_0e7L.js";import"./step-CgpTw60r.js";import"./Curve-Bx8QBaeT.js";import"./RegisterGraphicalItemId-BJxOIzsy.js";import"./ErrorBarContext-DmagIxUm.js";import"./GraphicalItemClipPath-Cd4vnEzu.js";import"./SetGraphicalItem-Dz7oH1lw.js";import"./getZIndexFromUnknown-Dcwo1ym9.js";import"./graphicalItemSelectors-DiR5EaBc.js";import"./ActivePoints-QoER0D4T.js";import"./Dot-D5mPo0FX.js";import"./getRadiusAndStrokeWidthFromDot-9l7PqCbK.js";import"./useElementOffset-CqK0Vxa0.js";import"./uniqBy-Biztq0Nb.js";import"./iteratee-DlqS2PSY.js";import"./Cross-C0sTfzMc.js";import"./index-Ca5GsAAq.js";import"./ChartSizeDimensions-C-S9llVm.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";const Tt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Wt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
