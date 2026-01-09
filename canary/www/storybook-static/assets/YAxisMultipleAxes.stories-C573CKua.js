import{e as t}from"./iframe-DGrXlEkx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-m9KoigUY.js";import{R as l}from"./arrayEqualityCheck-DicChNuU.js";import{C as x}from"./ComposedChart-B5e_pVnj.js";import{B as o}from"./Bar-BYyXHyBl.js";import{L as a}from"./Line-WPyxC3MW.js";import{X as c}from"./XAxis-CAsPUI6L.js";import{T as A}from"./Tooltip-Cyj47X2a.js";import{R as f}from"./RechartsHookInspector-Br39JKkJ.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./CartesianAxis-BzLzw--d.js";import"./Layer-D3LXHH9n.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./Label-BU6Zd3bq.js";import"./PolarUtils-DHWqJfSQ.js";import"./ZIndexLayer-B0lWMP9E.js";import"./zIndexSlice-BOlzJk7E.js";import"./types-Byz7h8Fw.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./RechartsWrapper-BsZxNtsW.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./tooltipContext-CMxTeChW.js";import"./ReactUtils-B0RMD20A.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./useAnimationId-BLzFnaDj.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./Symbols-lPueLsWK.js";import"./Curve-B7GNUcvb.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./ErrorBarContext-B6C65bkw.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./getZIndexFromUnknown-4XxdtdY6.js";import"./graphicalItemSelectors-BPbz2guO.js";import"./ActivePoints-Cg45XT1Q.js";import"./Dot-JJjdvtMS.js";import"./getRadiusAndStrokeWidthFromDot-gCSpblHn.js";import"./useElementOffset-peD2ny1m.js";import"./iteratee-BfALflAJ.js";import"./Cross-DGofQ-D3.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
