import{e as t}from"./iframe-Ddtg6pJD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-DZmITrXC.js";import{R as l}from"./arrayEqualityCheck-CG9XTfyR.js";import{C as x}from"./ComposedChart-BM48fs1-.js";import{B as o}from"./Bar-BvfaycCs.js";import{L as a}from"./Line-YleTGVwT.js";import{X as c}from"./XAxis-BuVbltIt.js";import{T as A}from"./Tooltip-CQdauUmp.js";import{R as g}from"./RechartsHookInspector-CCfITcFS.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BClOIvLb.js";import"./CartesianAxis-Bg_xmACB.js";import"./Layer-DFCJKk43.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./Label-DVFU8Pe0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmeIxVaP.js";import"./zIndexSlice-Ccg2qy_d.js";import"./types-ClXtAg6j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./RechartsWrapper-_aZbub_8.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./tooltipContext-k2sqnbZb.js";import"./ReactUtils-Cw8MXjHP.js";import"./ActiveShapeUtils-DMR6fW_T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJ8F3yH0.js";import"./useAnimationId-CURyQWbL.js";import"./Trapezoid-CtTP1eQD.js";import"./Sector-ClpHZ9p-.js";import"./Symbols-TieKMT2F.js";import"./Curve-C-ksUiT7.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./ErrorBarContext-CvI528BI.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./getZIndexFromUnknown-COkFz8cR.js";import"./graphicalItemSelectors-DLxd3U73.js";import"./ActivePoints-Ds6wCLcR.js";import"./Dot-CLk6qXvT.js";import"./getRadiusAndStrokeWidthFromDot-dgSAwQ2V.js";import"./useElementOffset--qyUsfM-.js";import"./iteratee-TDlx1PX0.js";import"./Cross-D5DVzTTn.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
