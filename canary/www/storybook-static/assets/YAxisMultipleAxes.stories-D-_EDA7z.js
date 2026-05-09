import{e as t}from"./iframe-DCkCb3cL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-sTotZWFY.js";import{R as l}from"./arrayEqualityCheck-Cyv8hSdj.js";import{C as x}from"./ComposedChart-DNMO5eaz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CMmIeiNY.js";import{L as a}from"./Line-DajRYZAP.js";import{X as A}from"./XAxis-DjeZloTX.js";import{T as g}from"./Tooltip-CB-Jt-mW.js";import{R as f}from"./RechartsHookInspector-GywlJnGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-2U-Fs3nY.js";import"./Layer-DdpUaJ6z.js";import"./resolveDefaultProps-Brvb-unE.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./Label-DgXvgibU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmR4HC_4.js";import"./zIndexSlice-C2SLAmdu.js";import"./immer-CJIR5Dxo.js";import"./types-BN3BphoZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./tooltipContext-BP3wGTwd.js";import"./ReactUtils-UnUZnhmf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6FenCz6m.js";import"./isPlainObject-De9uXPg3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2C1fB0K.js";import"./useAnimationId-CqiSzw9P.js";import"./Trapezoid-D7d51r_V.js";import"./Sector-BrEwMQo2.js";import"./Symbols-3b29A3qW.js";import"./symbol-CfRPBnBt.js";import"./step-CFTOTHh4.js";import"./Curve-0mQU3lN2.js";import"./RegisterGraphicalItemId-D6ZXTRMS.js";import"./ErrorBarContext-B-qZZjga.js";import"./GraphicalItemClipPath-CSx6dkEB.js";import"./SetGraphicalItem-DyLJ3K98.js";import"./getZIndexFromUnknown-Dxr-pNxi.js";import"./graphicalItemSelectors-BGSDKvIz.js";import"./ActivePoints-Be0P0LgS.js";import"./Dot-H-WiFDrq.js";import"./getRadiusAndStrokeWidthFromDot-DH5ceNx-.js";import"./useElementOffset-BQGFrKFv.js";import"./uniqBy-BVL3Qfi6.js";import"./iteratee-BloYz32V.js";import"./Cross-DK5aaWmu.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
