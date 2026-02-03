import{e as t}from"./iframe-b3l0oylc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-DBt_3tXp.js";import{R as l}from"./arrayEqualityCheck-CjMmMQbn.js";import{C as x}from"./ComposedChart-Ci_ymdae.js";import{B as o}from"./Bar-BVqJJUMY.js";import{L as a}from"./Line-wmhGAa8E.js";import{X as c}from"./XAxis-DQI4GC2q.js";import{T as A}from"./Tooltip-DleGnEqy.js";import{R as g}from"./RechartsHookInspector-XGSushi8.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcvR48Du.js";import"./CartesianAxis-BaEBZn5E.js";import"./Layer-2yxRimi5.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./Label-DllavO7s.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CtStE837.js";import"./zIndexSlice-6dxWRD0w.js";import"./types-DcS7TQb1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./tooltipContext-Bg8AINqD.js";import"./ReactUtils-BwdRCLdj.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./useAnimationId-DdymZr7z.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./Symbols-CncGFVbc.js";import"./Curve-1kQ3M0AJ.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./getZIndexFromUnknown-CccjTYTB.js";import"./graphicalItemSelectors-DomU9J31.js";import"./ActivePoints-DgMTYwE1.js";import"./Dot-CRE9dNM4.js";import"./getRadiusAndStrokeWidthFromDot-BXhx89qn.js";import"./useElementOffset-DmRsiLis.js";import"./iteratee-iYPIXGSq.js";import"./Cross-BZhUsTyA.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
