import{e as t}from"./iframe-B8YYEd9G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-Bx5APNu1.js";import{R as l}from"./arrayEqualityCheck-BJSPs_LU.js";import{C as x}from"./ComposedChart-4Q9duxf0.js";import{B as o}from"./Bar-479dJmtO.js";import{L as a}from"./Line-y7KrniF9.js";import{X as c}from"./XAxis-Dznlbswx.js";import{T as A}from"./Tooltip-BcyaGgIu.js";import{R as g}from"./RechartsHookInspector-C0QywKAE.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./CartesianAxis-BAmncUEg.js";import"./Layer-ChuaoeIg.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./Label-XqAMTaA_.js";import"./PolarUtils-DYWzGjDu.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./zIndexSlice-BLNkJo_X.js";import"./types-CnVGCqEL.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./RechartsWrapper-pZyt8ABU.js";import"./CartesianChart-DBZcJX6H.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./tooltipContext-Cp6s-Na8.js";import"./ReactUtils-DfY637Lx.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./useAnimationId-pnmN_K1g.js";import"./Trapezoid-C7ogOYif.js";import"./Sector-BNyMoo46.js";import"./Symbols-jZ2_n1nU.js";import"./Curve-B-G6e6PZ.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./ErrorBarContext-TR9hiCFQ.js";import"./GraphicalItemClipPath-q0Itpwcd.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./getZIndexFromUnknown-B9RTeoE6.js";import"./graphicalItemSelectors-CbQT4tVC.js";import"./ActivePoints-Bd5JoJfn.js";import"./Dot-DPdeHNxG.js";import"./getRadiusAndStrokeWidthFromDot-DM4Yrxyr.js";import"./useElementOffset-O1atbYZW.js";import"./iteratee-D5HDh4k-.js";import"./Cross-B3ZcMeOk.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
