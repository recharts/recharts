import{e as t}from"./iframe-Dh5fYf52.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-Dit0gXUW.js";import{R as l}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C as x}from"./ComposedChart-DvBGIcj2.js";import{B as o}from"./Bar-Blrs8c1W.js";import{L as a}from"./Line-CBLpAldI.js";import{X as c}from"./XAxis-B4KbS6If.js";import{T as A}from"./Tooltip-BvzegrEC.js";import{R as g}from"./RechartsHookInspector-ClQgWiSn.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./CartesianAxis-DxoskIqi.js";import"./Layer-CyyRPVZz.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./Label-BgIRNGCU.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Chf-nD0r.js";import"./zIndexSlice-DOeznw_J.js";import"./types-BQGztJ7o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./RechartsWrapper-B9qWPH0f.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./tooltipContext-3_OhKDI6.js";import"./ReactUtils-DdUIndVV.js";import"./ActiveShapeUtils-vg5OHeFZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CNvS8JgY.js";import"./useAnimationId-hVsf5NM-.js";import"./Trapezoid-B-DbXUKn.js";import"./Sector-Boq0fYwI.js";import"./Symbols-CE_RrRcr.js";import"./Curve-BtY66874.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./ErrorBarContext-CiVkLetL.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./getZIndexFromUnknown-CYjPHDjm.js";import"./graphicalItemSelectors-B7G_vDQd.js";import"./ActivePoints-gq73oefV.js";import"./Dot-B05UwBke.js";import"./getRadiusAndStrokeWidthFromDot-B6ckmWt2.js";import"./useElementOffset-ByMR83Id.js";import"./iteratee-CVT0hwhC.js";import"./Cross-36hpk71i.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
