import{e as t}from"./iframe-CpushxGE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-isuSziaR.js";import{R as l}from"./arrayEqualityCheck-VmHOknUh.js";import{C as x}from"./ComposedChart-BGbAqQTx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C6GEnGAz.js";import{L as a}from"./Line-bs4retuD.js";import{X as A}from"./XAxis-3mUHVa_Q.js";import{T as g}from"./Tooltip-BgOQGlV-.js";import{R as f}from"./RechartsHookInspector-h4ARZYih.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C6WYLYP9.js";import"./Layer-CGETD00I.js";import"./resolveDefaultProps-B56n8ket.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./Label-Cxa0XqXu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B2YDg5m4.js";import"./zIndexSlice-BHiqQbmT.js";import"./immer-Cv3ASI8f.js";import"./types-CPRA2Aat.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./tooltipContext-DeUkeC-z.js";import"./ReactUtils-DYxQvQT8.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DlpM3N5z.js";import"./isPlainObject-DBfMrsvU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CagKfqqY.js";import"./useAnimationId-CaEP2jnF.js";import"./Trapezoid-Cc12cYdx.js";import"./Sector-V5LdKq7s.js";import"./Symbols-Dka0CVy4.js";import"./symbol-B3B4BbBB.js";import"./step-C3JKHl5Q.js";import"./Curve-CXWLomdX.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./ErrorBarContext-CLrRGRfs.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./getZIndexFromUnknown-BgTFJloV.js";import"./graphicalItemSelectors-DBuAmR_h.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./useElementOffset-Ccd-OoSx.js";import"./uniqBy-bRpf7OJ5.js";import"./iteratee-BUEQrhsa.js";import"./Cross-BThC6qqJ.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
