import{e as t}from"./iframe-CUdKgdkG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Na-JXGDj.js";import{R as l}from"./arrayEqualityCheck-BSmSVrdu.js";import{C as x}from"./ComposedChart-B_srWo8L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-JSt44bx6.js";import{L as a}from"./Line-CSFYD9Tk.js";import{X as A}from"./XAxis-mAd7Kpdc.js";import{T as g}from"./Tooltip-B4ebXyhM.js";import{R as f}from"./RechartsHookInspector-Cq0IOlAH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-IOZxWSIl.js";import"./Layer-DmKN-F8X.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./Label-DglRGLXy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDgenCRH.js";import"./zIndexSlice-R-FfD4BY.js";import"./immer-Cj2VbGf6.js";import"./types-Du7cRNSr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CKVu5O47.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./tooltipContext-DTd-1l92.js";import"./ReactUtils-C73Q90p0.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BTsbslWJ.js";import"./isPlainObject-rQI65vsh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfZJm5g2.js";import"./useAnimationId-AqfbREG9.js";import"./Trapezoid-CeXt5ImY.js";import"./Sector-Criwg8Ev.js";import"./Symbols-DVxfPYYz.js";import"./symbol-CtsFoFGk.js";import"./step-DvWhuTZk.js";import"./Curve-CaswtT1y.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./ErrorBarContext-PwkZe7K2.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./getZIndexFromUnknown-DLSNjJ4F.js";import"./graphicalItemSelectors-CZNxFwGu.js";import"./ActivePoints-a6uvGFsO.js";import"./Dot-BZIhq4qY.js";import"./getRadiusAndStrokeWidthFromDot-D4zfOBB4.js";import"./useElementOffset-BW58k6Dr.js";import"./uniqBy-CxeABOap.js";import"./iteratee-9POT8SS0.js";import"./Cross-qqiIKbTo.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
