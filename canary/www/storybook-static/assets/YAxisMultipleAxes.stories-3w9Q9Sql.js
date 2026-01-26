import{e as t}from"./iframe-BtSIgQK6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-Dja6peqA.js";import{R as l}from"./arrayEqualityCheck-DE2iBB4w.js";import{C as x}from"./ComposedChart-D2t4vYg_.js";import{B as o}from"./Bar-CELCTp_6.js";import{L as a}from"./Line-DK5zDU5f.js";import{X as c}from"./XAxis-Duh47LNW.js";import{T as A}from"./Tooltip-ColOtzuE.js";import{R as g}from"./RechartsHookInspector-CTyYdRny.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./CartesianAxis-B7nPrlAA.js";import"./Layer-C0Jzn9sV.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./Label-CWG_XmjD.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-GjRfBXiF.js";import"./zIndexSlice-BxfsWazG.js";import"./types-CCc-_PPP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-3j04d5vi.js";import"./axisSelectors-CGAxpLYE.js";import"./RechartsWrapper-y4jP1OLx.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./CategoricalChart-CKsWezcf.js";import"./tooltipContext-skMOZCQR.js";import"./ReactUtils-CkWZzFSr.js";import"./ActiveShapeUtils-8qEwWVM1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BdN80mGv.js";import"./useAnimationId-B8iQHdnT.js";import"./Trapezoid-CtEgnRI2.js";import"./Sector-BRe1-FfM.js";import"./Symbols-DbTQ7A03.js";import"./Curve-CPkDoGPV.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./ErrorBarContext-COBKZW6S.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./getZIndexFromUnknown-UxMkEfVK.js";import"./graphicalItemSelectors-DPcHFcIc.js";import"./ActivePoints-DmeZ1ufV.js";import"./Dot-B1qpgIfY.js";import"./getRadiusAndStrokeWidthFromDot-BqZRZ_5P.js";import"./useElementOffset-CWby9Xwm.js";import"./iteratee-ktsmYB4p.js";import"./Cross-B_I98bz3.js";import"./index-D1fEpgHD.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
