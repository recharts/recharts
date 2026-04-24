import{e as t}from"./iframe-BRqvrPpX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BG6xpwEo.js";import{R as l}from"./arrayEqualityCheck-DDSezW49.js";import{C as x}from"./ComposedChart-CsblHqYu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BRdhu50M.js";import{L as a}from"./Line-PCc0ofdp.js";import{X as A}from"./XAxis-DZXsqqUs.js";import{T as g}from"./Tooltip-BKK7qzqW.js";import{R as f}from"./RechartsHookInspector-DZUw7Ce3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DUees9I8.js";import"./Layer-KJ5xksxy.js";import"./resolveDefaultProps-C4ONjF6w.js";import"./Text-c5kux5xS.js";import"./DOMUtils-GlaEK2cB.js";import"./Label-_Khr6uJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc4doPfJ.js";import"./zIndexSlice-DNL_rR3e.js";import"./immer-DXV4etqU.js";import"./types-2nLFc4aE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-rp2kTmjY.js";import"./hooks-rzyNGUcJ.js";import"./axisSelectors-DItQVmXo.js";import"./d3-scale-BRJXbGMx.js";import"./RechartsWrapper-DbCr_zla.js";import"./index-DUtVgLrP.js";import"./CartesianChart-BrkX4WEt.js";import"./chartDataContext-nwhDY5FS.js";import"./CategoricalChart-CODQ6PLu.js";import"./tooltipContext-dTIHCN_7.js";import"./ReactUtils-BAJ1kPIP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-67P3d0pQ.js";import"./isPlainObject-CvjZW2FN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8ooKzu7.js";import"./useAnimationId-CvzXleYE.js";import"./Trapezoid-DFAAHI7b.js";import"./Sector-j7LTfnuF.js";import"./Symbols-D1A9jCkI.js";import"./symbol-Df8Q0jur.js";import"./step-G_hwVzeG.js";import"./Curve-CtnWwKXB.js";import"./RegisterGraphicalItemId-RZfbywjl.js";import"./ErrorBarContext-AIawQg9l.js";import"./GraphicalItemClipPath-oDzU52PH.js";import"./SetGraphicalItem-BAyig2Fq.js";import"./getZIndexFromUnknown-BqQ9pZ60.js";import"./graphicalItemSelectors-D6QdulDI.js";import"./ActivePoints--bg5w8iT.js";import"./Dot-Db-uTVSA.js";import"./getRadiusAndStrokeWidthFromDot-BeKpyACI.js";import"./useElementOffset-D9jY7QTj.js";import"./uniqBy-Dyp2GQOB.js";import"./iteratee-Csv6-nMU.js";import"./Cross-CYihOhx6.js";import"./index-BPkAalLa.js";import"./ChartSizeDimensions-DojjfuX5.js";import"./OffsetShower-Cx7s2ylo.js";import"./PlotAreaShower-CGKQg4jU.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
