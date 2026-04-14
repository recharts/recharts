import{e as t}from"./iframe-B26tvh8M.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BtVkQLRb.js";import{R as l}from"./arrayEqualityCheck-MuT8Gq0B.js";import{C as x}from"./ComposedChart-DX9vJdu2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CC0iZXSV.js";import{L as a}from"./Line-CTwc6FHC.js";import{X as A}from"./XAxis-DIWBB6UA.js";import{T as g}from"./Tooltip-7-nWWMjo.js";import{R as f}from"./RechartsHookInspector-hyCg-8qC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wEW14JHd.js";import"./Layer-BLXteb37.js";import"./resolveDefaultProps-DWRHZiFf.js";import"./Text-B7apQSTa.js";import"./DOMUtils-Cbj4CypK.js";import"./Label-CKyHcssN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2hV_wyzX.js";import"./zIndexSlice-9WIqVBWy.js";import"./immer-CXuxt10J.js";import"./types-gN1P51X3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BdibsHeH.js";import"./hooks-CFGRd7FZ.js";import"./axisSelectors-znnp0ZTC.js";import"./d3-scale-D8gDHM7P.js";import"./RechartsWrapper-DCeLN1YR.js";import"./index-Bz4UcQS6.js";import"./CartesianChart-Cyzcm2Bf.js";import"./chartDataContext-DgpnTfq-.js";import"./CategoricalChart-ClHT_DQk.js";import"./tooltipContext-F9pA40Kv.js";import"./ReactUtils-EalmbCaR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C5QwOCv6.js";import"./isPlainObject-DAsoG4ko.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7IYda03.js";import"./useAnimationId-C40xd6Et.js";import"./Trapezoid-Dj9VILyv.js";import"./Sector-s0RSAPuc.js";import"./Symbols-B7tb4BlZ.js";import"./symbol-M8-_4T55.js";import"./step-DSlKLIZT.js";import"./Curve-CeBurhsE.js";import"./RegisterGraphicalItemId-z3-LYLAM.js";import"./ErrorBarContext-BV9_6zF2.js";import"./GraphicalItemClipPath-tnHq66M5.js";import"./SetGraphicalItem-D6N-Tuye.js";import"./getZIndexFromUnknown-BSPo8FUX.js";import"./graphicalItemSelectors-eA_nS1-f.js";import"./ActivePoints-DDMO3vxb.js";import"./Dot-DJ6U_l3e.js";import"./getRadiusAndStrokeWidthFromDot-CX1KMj8W.js";import"./useElementOffset-DFWZQBhd.js";import"./uniqBy-Bl-3PVel.js";import"./iteratee-BAF-yXNd.js";import"./Cross-CThJ5kyP.js";import"./index-qKcyhpYV.js";import"./ChartSizeDimensions-D4w-gUjQ.js";import"./OffsetShower-m7V4Yrzs.js";import"./PlotAreaShower-CWNEjbya.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
