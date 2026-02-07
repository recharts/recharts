import{e as t}from"./iframe-DMofGbdh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BSq1Zqr5.js";import{Y as r}from"./YAxis-B_yG4ERH.js";import{R as l}from"./arrayEqualityCheck-CsoqXgVI.js";import{C as x}from"./ComposedChart-k3-ghRdj.js";import{B as o}from"./Bar-NCzeMcDo.js";import{L as a}from"./Line-DWJPZGSf.js";import{X as c}from"./XAxis-D0dacd78.js";import{T as A}from"./Tooltip-66CrTFVH.js";import{R as g}from"./RechartsHookInspector-DJgQFG2f.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./CartesianAxis-BNGc91Ri.js";import"./Layer-BiV0mvq6.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./Label-DxmFoslz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWIihq-M.js";import"./zIndexSlice-CsA5GGWo.js";import"./types-DMK1Hrm-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DQLTrr19.js";import"./axisSelectors-CeuWGW4U.js";import"./RechartsWrapper-C7CsVMpm.js";import"./CartesianChart-DWOZMVOy.js";import"./chartDataContext-K-dQ-k-3.js";import"./CategoricalChart-D_GR9jLw.js";import"./tooltipContext-D08fW7T9.js";import"./ReactUtils-Dv6d3MQ5.js";import"./ActiveShapeUtils-D8pbFwx0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWfmzqul.js";import"./useAnimationId-CkpaA0hy.js";import"./Trapezoid-CRq1iTfA.js";import"./Sector-BMWgIsRC.js";import"./Symbols-iw9OdhhJ.js";import"./Curve-Dep4Vom7.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./ErrorBarContext-BGJbOelu.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./getZIndexFromUnknown-B7LZT-l3.js";import"./graphicalItemSelectors-BKG7KUv5.js";import"./ActivePoints-CDeWGkl5.js";import"./Dot-_CebNPSK.js";import"./getRadiusAndStrokeWidthFromDot-a8uwl8jU.js";import"./useElementOffset-zXirM7Sf.js";import"./iteratee-D-sLGYHE.js";import"./Cross-yID6NUUz.js";import"./index-B5a3_tnM.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
