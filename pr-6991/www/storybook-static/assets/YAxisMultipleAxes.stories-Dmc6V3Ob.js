import{e as t}from"./iframe-DAKkOQol.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-DShQZAzJ.js";import{R as l}from"./arrayEqualityCheck-NbiC3pou.js";import{C as x}from"./ComposedChart-ChbMrpsj.js";import{B as o}from"./Bar-DlnYcb0k.js";import{L as a}from"./Line-BSJ_6kE8.js";import{X as c}from"./XAxis-DHACXabx.js";import{T as A}from"./Tooltip-BX-71fBH.js";import{R as g}from"./RechartsHookInspector-BfHJy13b.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./CartesianAxis-BHWsH5fF.js";import"./Layer-BguUBi1k.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./zIndexSlice-ConFYYKV.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./RechartsWrapper-DReT11ch.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./tooltipContext-CrkcFAQN.js";import"./ReactUtils-BWrOVeoB.js";import"./ActiveShapeUtils-DnsJnZjx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CgMMN0ms.js";import"./useAnimationId-BJodvzW1.js";import"./Trapezoid-DpCkavyj.js";import"./Sector-BqcXv69K.js";import"./Symbols-NCjlL2qf.js";import"./Curve-Jt8KljXD.js";import"./RegisterGraphicalItemId-DNcFFbXF.js";import"./ErrorBarContext-ig0ccB3h.js";import"./GraphicalItemClipPath-C0lJi0bX.js";import"./SetGraphicalItem-CWARA50H.js";import"./getZIndexFromUnknown-CJhnhmru.js";import"./graphicalItemSelectors-UXH09iPE.js";import"./ActivePoints-7-0qoVWK.js";import"./Dot-CCq0kKAT.js";import"./getRadiusAndStrokeWidthFromDot-Dc544xEP.js";import"./useElementOffset-CDhsuukr.js";import"./iteratee-DOInHnjD.js";import"./Cross-CSeM4Pv8.js";import"./index-IHUVzBeJ.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
