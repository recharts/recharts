import{e as t}from"./iframe-cTJex_Gl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-e82ZV-al.js";import{R as l}from"./arrayEqualityCheck-D0_WBn0Z.js";import{C as x}from"./ComposedChart-vrFxLduB.js";import{B as o}from"./Bar-Bh-D4s0P.js";import{L as a}from"./Line-CvV577lQ.js";import{X as c}from"./XAxis-KlGsegds.js";import{T as A}from"./Tooltip-BJB4c6zB.js";import{R as f}from"./RechartsHookInspector-BIilfS59.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-GZGysWVv.js";import"./CartesianAxis-BrBc_oiZ.js";import"./Layer-BMdqJaf7.js";import"./Text-BHjkvtN0.js";import"./DOMUtils-CszyQhOM.js";import"./Label-BuzFvabn.js";import"./PolarUtils-B2tM_qUT.js";import"./ZIndexLayer-H4Ow-AJr.js";import"./zIndexSlice-o0TZ72x9.js";import"./types-Gt1xRz9Z.js";import"./hooks-JY4JcvJg.js";import"./axisSelectors-DKP4jhQb.js";import"./RechartsWrapper-Bm4mCVnL.js";import"./CartesianChart-sbYYv-2G.js";import"./chartDataContext-CUgM-3fT.js";import"./CategoricalChart-czES7GN9.js";import"./tooltipContext-Cw6vo9RU.js";import"./ReactUtils-BpjLVHCA.js";import"./ActiveShapeUtils-Bs6rxUQM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D12YpzZT.js";import"./useAnimationId-DmLtCxti.js";import"./Trapezoid-Cffv8lrQ.js";import"./Sector-D24ZdNmK.js";import"./Symbols-DkoAz0u2.js";import"./Curve-Lpz0qnxX.js";import"./RegisterGraphicalItemId-aixP5EwM.js";import"./ErrorBarContext-BLazH71_.js";import"./GraphicalItemClipPath-CJqMx8GZ.js";import"./SetGraphicalItem-H24PzumZ.js";import"./getZIndexFromUnknown-Cz5ZPgR_.js";import"./graphicalItemSelectors-B87B_mfe.js";import"./ActivePoints-WYLnnU_j.js";import"./Dot-DR5Pj5g1.js";import"./getRadiusAndStrokeWidthFromDot-TSbsRtbT.js";import"./useElementOffset-CkWr2du7.js";import"./iteratee-CiYVsTGX.js";import"./Cross-Bwcvk8Pc.js";import"./index-DuBUoeGC.js";import"./ChartSizeDimensions-tHZb_dEK.js";import"./OffsetShower-DB87M8KV.js";import"./PlotAreaShower-D22yshvn.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
