import{e as t}from"./iframe-D4XW71qE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-BzXwxAD2.js";import{R as l}from"./arrayEqualityCheck-Ct0H2J7-.js";import{C as x}from"./ComposedChart-F9p-LUMw.js";import{B as o}from"./Bar-LqVbzhVT.js";import{L as a}from"./Line-Ds1mFxVO.js";import{X as c}from"./XAxis-B7adFIe7.js";import{T as A}from"./Tooltip-Du8Gdhpt.js";import{R as g}from"./RechartsHookInspector-9aXKf5pi.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./CartesianAxis-8-c0TmU5.js";import"./Layer-_WbjJ9WY.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uUtlF8oG.js";import"./zIndexSlice-DRfQm_zr.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./RechartsWrapper-C0DDkfJP.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./tooltipContext-B9cVE9M5.js";import"./ReactUtils-Dt1V4s2Z.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./useAnimationId-BXlO72m4.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./Symbols-CZhPoTol.js";import"./Curve-BM6HUAhp.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./ErrorBarContext-CYBrSxT_.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./getZIndexFromUnknown-DMmox6tz.js";import"./graphicalItemSelectors-wz4tGnNY.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./useElementOffset-Cyi-tiOQ.js";import"./iteratee-_d0iWEtc.js";import"./Cross-f5Oc3nUV.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
