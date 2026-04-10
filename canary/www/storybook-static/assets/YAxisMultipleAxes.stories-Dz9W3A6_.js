import{e as t}from"./iframe-eZ9JX-07.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-uS2rijQh.js";import{R as l}from"./arrayEqualityCheck-Cj2Is5Mm.js";import{C as x}from"./ComposedChart-BHW-hoiz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BmJJfb8H.js";import{L as a}from"./Line-d0u3ebXE.js";import{X as A}from"./XAxis-mp_eEoS6.js";import{T as g}from"./Tooltip-CiYBkuPY.js";import{R as f}from"./RechartsHookInspector-BeG4gaTk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DlLnH-y1.js";import"./Layer-B6nAt8jX.js";import"./resolveDefaultProps-CliKq00o.js";import"./Text-CRkMMQ59.js";import"./DOMUtils-D0fPz5DE.js";import"./Label-mBy1-y0R.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbJ2I37n.js";import"./zIndexSlice-BusLYGIS.js";import"./immer-Dr1bFi29.js";import"./types-CmytQtTQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CqnrbROG.js";import"./hooks-DpV54l8p.js";import"./axisSelectors-AGz0-S2g.js";import"./d3-scale-BKcomRju.js";import"./RechartsWrapper-BUoHei1k.js";import"./index-CNMtCejR.js";import"./CartesianChart-BK9rkCv_.js";import"./chartDataContext-CvCw_h_X.js";import"./CategoricalChart-YrnJ6OFy.js";import"./tooltipContext-DwVR6eY8.js";import"./ReactUtils-DWnSk2Q-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BMNGvKsh.js";import"./isPlainObject-DLc4kyQA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_vtEiEA1.js";import"./useAnimationId-CSNZHJ-3.js";import"./Trapezoid-BBUAydEo.js";import"./Sector-Dv17oJda.js";import"./Symbols-CvJdDdpZ.js";import"./symbol-CdZf4kom.js";import"./step-CSEuamYk.js";import"./Curve-rjvi0w8u.js";import"./RegisterGraphicalItemId-BAw53RVk.js";import"./ErrorBarContext-Bpf6-6dn.js";import"./GraphicalItemClipPath-vABmGIfK.js";import"./SetGraphicalItem-By9FetZz.js";import"./getZIndexFromUnknown-CSSPDf_d.js";import"./graphicalItemSelectors-B692bAr5.js";import"./ActivePoints-RdCeodjM.js";import"./Dot-BOZkbRZB.js";import"./getRadiusAndStrokeWidthFromDot-DN82KodC.js";import"./useElementOffset-DrYCL9O-.js";import"./uniqBy-CqnG_K8V.js";import"./iteratee-1GFPdpFT.js";import"./Cross-0ZaLtVSY.js";import"./index-0o7fnxnF.js";import"./ChartSizeDimensions-jqrtviWa.js";import"./OffsetShower-CGC6-4Ry.js";import"./PlotAreaShower-BaV83-c3.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
