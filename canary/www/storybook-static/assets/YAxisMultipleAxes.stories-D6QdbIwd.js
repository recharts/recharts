import{e as t}from"./iframe-B0S7Bw5r.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cfh_dm5A.js";import{R as l}from"./arrayEqualityCheck-B6UHuCSW.js";import{C as x}from"./ComposedChart-DcRLOIWA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CwAxX5_w.js";import{L as a}from"./Line-D68t4KMI.js";import{X as A}from"./XAxis-DiUkTxAp.js";import{T as g}from"./Tooltip-ZhoZYo-6.js";import{R as f}from"./RechartsHookInspector-CMq6C7Gt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-xLcMiLgB.js";import"./Layer-Dc2WQE0F.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./Label-Sf__cS6l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8Z-QIey.js";import"./zIndexSlice-9UjK9UdZ.js";import"./immer-evaWtkoc.js";import"./types-DOzdXJDs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./tooltipContext-ChfpWUaV.js";import"./ReactUtils-X5Zc33o_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./useAnimationId-NZHn6B37.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./Curve-DEKI4hEN.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./getZIndexFromUnknown-CJAZLNag.js";import"./graphicalItemSelectors-DiYrGPFG.js";import"./ActivePoints-zTeK-7RL.js";import"./Dot-DXEnHZYi.js";import"./getRadiusAndStrokeWidthFromDot-iWtNb3XX.js";import"./useElementOffset-z_Q4U8yI.js";import"./uniqBy-L7bCXYuO.js";import"./iteratee-BbOKiONH.js";import"./Cross-oxAmOxir.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
