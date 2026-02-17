import{e as t}from"./iframe-DtzQZ5We.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-jb4FGmfu.js";import{R as l}from"./arrayEqualityCheck-3Q4fEezD.js";import{C as x}from"./ComposedChart-DKZIKN5k.js";import{B as o}from"./Bar-CjTrBlPR.js";import{L as a}from"./Line-CrxGC9uS.js";import{X as c}from"./XAxis-DbDdWo9i.js";import{T as A}from"./Tooltip-CijaiZ-x.js";import{R as g}from"./RechartsHookInspector-podkStYr.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./CartesianAxis-D6UZdOOc.js";import"./Layer-P1mRwVv-.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./Label-D5-8z0UP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGEtHlps.js";import"./zIndexSlice-DS1PNPXk.js";import"./types-DcSMO55m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./RechartsWrapper-DGOHUa9W.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./tooltipContext-zNVcvoEf.js";import"./ReactUtils-Bg8ILpJF.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSEdSL9_.js";import"./useAnimationId-GgPPrJFw.js";import"./Trapezoid-DCMThu2C.js";import"./Sector-CcjHcsYG.js";import"./Symbols-k0cT0xYb.js";import"./Curve-C7rWq_eQ.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./ErrorBarContext-BtAqYSS8.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./getZIndexFromUnknown-j232ldCd.js";import"./graphicalItemSelectors-D6Epzwcp.js";import"./ActivePoints-CLc9h_MH.js";import"./Dot-D4WZdJ7E.js";import"./getRadiusAndStrokeWidthFromDot-Cnf2Ftr7.js";import"./useElementOffset-CmcXmoGo.js";import"./iteratee-C7zx0CtR.js";import"./Cross-db7bQK8G.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
