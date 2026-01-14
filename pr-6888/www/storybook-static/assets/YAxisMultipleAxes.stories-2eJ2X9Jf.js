import{e as t}from"./iframe-C4Awkoff.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-OmZ5CylP.js";import{R as l}from"./arrayEqualityCheck-B4QvsFQi.js";import{C as x}from"./ComposedChart-BcZ2exHk.js";import{B as o}from"./Bar-cmCRjnWQ.js";import{L as a}from"./Line-C_0XSPDY.js";import{X as c}from"./XAxis-BNPVvEKI.js";import{T as A}from"./Tooltip-CF8MZLWi.js";import{R as g}from"./RechartsHookInspector-C8xIuzm_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./CartesianAxis-CA9DIeAi.js";import"./Layer-3uSdf7p6.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./Label-BgopB1Yd.js";import"./PolarUtils-CG-ELovL.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./zIndexSlice-BPscvr6m.js";import"./types-BzBfPwET.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./RechartsWrapper-D13K1qt6.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./tooltipContext-86YEwt54.js";import"./ReactUtils-QCPHueip.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./useAnimationId-BOjGjWHD.js";import"./Trapezoid-C9Na_GGw.js";import"./Sector-Bh3LTLHk.js";import"./Symbols-D7LlaOYy.js";import"./Curve-CSLJzt9O.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./ErrorBarContext-COm8GL2L.js";import"./GraphicalItemClipPath-DelQe7IH.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./getZIndexFromUnknown-CcYELLwg.js";import"./graphicalItemSelectors-iEeM8zu0.js";import"./ActivePoints-DJ6uMpir.js";import"./Dot-D_3FP8hc.js";import"./getRadiusAndStrokeWidthFromDot-DM4948L6.js";import"./useElementOffset-CmYDN7px.js";import"./iteratee-BuIypSwY.js";import"./Cross-_fdziKuB.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
