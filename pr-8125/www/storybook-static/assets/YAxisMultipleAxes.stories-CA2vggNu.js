import{R as t}from"./iframe-B3-vagTW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DormNcwM.js";import{R as l}from"./zIndexSlice-ZzyVUAHl.js";import{C as x}from"./ComposedChart-DWsqb0Fg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-38Bj-wYd.js";import{L as a}from"./Line-D8DdECJH.js";import{X as c}from"./XAxis-DFfS9226.js";import{T as g}from"./Tooltip-Cdmks0yt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-vZvIOvi1.js";import"./Text-BuzE9c3N.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./throttle-CY8bAEWp.js";import"./axisSelectors-HaoK80F7.js";import"./d3-scale-C4523EFb.js";import"./CartesianAxis-Cwp1aQTy.js";import"./Layer-PmVaLGrp.js";import"./types-BBjBCtu2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CddNfr5P.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./LabelList-MPu8rBts.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKi9ciwV.js";import"./useAnimationId-mixmWsfB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-b384wv9G.js";import"./tooltipContext-DlRTVlJa.js";import"./dataEntryStyles-FOCBXEG_.js";import"./ErrorBarContext-B_sCBDRD.js";import"./activeStyles-mevkhAS-.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getZIndexFromUnknown-Cdag1ENW.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./omit-ButR-_Qh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DWZFjGCn.js";import"./step-BN6dVKvX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DAC4XsL1.js";import"./Dot-D46CiK3O.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./getRadiusAndStrokeWidthFromDot-DTvCyfLo.js";import"./useElementOffset-D_j3OR66.js";import"./uniqBy-DNND0Smg.js";import"./iteratee-CTRTWi67.js";import"./Cross-QGkOHav6.js";import"./Sector-DUXa2j63.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
