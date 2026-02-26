import{e as t}from"./iframe-Cff4EXi3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-CEsMkUHq.js";import{R as l}from"./arrayEqualityCheck-VW91KjqU.js";import{C as x}from"./ComposedChart-B12oAa8n.js";import{B as o}from"./Bar-Wd0XKC_V.js";import{L as a}from"./Line-lIDxBsgD.js";import{X as c}from"./XAxis-asdFitiM.js";import{T as A}from"./Tooltip-d04J2SoN.js";import{R as g}from"./RechartsHookInspector-qCKXCEwx.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CTKh-VYh.js";import"./Layer-D22mEoCB.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./Label-KYKyDNcr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UZz4JYvU.js";import"./zIndexSlice-C-izguCE.js";import"./immer-Cixy3ajB.js";import"./types-CtvHHRW4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B92sUlvw.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./RechartsWrapper-DMPfsW98.js";import"./index-B-6vBbA8.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./tooltipContext-BWdtFUR0.js";import"./ReactUtils-BhGfO_gM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BY5228yv.js";import"./isPlainObject-BUXLJ9Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BITjWgSa.js";import"./useAnimationId-CJEIt2ET.js";import"./Trapezoid-BMmW3PWG.js";import"./Sector-BomCciMR.js";import"./Symbols-i7pcWr_t.js";import"./symbol-7J1n19-D.js";import"./step-YwxG2wvl.js";import"./Curve-1dMXeL2S.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./ErrorBarContext-BXEok-II.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./getZIndexFromUnknown-D4u0nCln.js";import"./graphicalItemSelectors-B6viA6C5.js";import"./ActivePoints-D5hExdQG.js";import"./Dot-CzO0WPbv.js";import"./getRadiusAndStrokeWidthFromDot-uV2f5Ecx.js";import"./useElementOffset-Bamu1ikN.js";import"./uniqBy-DTGkFDj7.js";import"./iteratee-2cPWLFhH.js";import"./Cross-CRR5egct.js";import"./index-lBMzeJSk.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
