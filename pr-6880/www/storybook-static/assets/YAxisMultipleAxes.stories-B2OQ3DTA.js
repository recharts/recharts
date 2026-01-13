import{e as t}from"./iframe-Cwpfa-aU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-BUkK3ftj.js";import{R as l}from"./arrayEqualityCheck-4s7O9CHw.js";import{C as x}from"./ComposedChart-Bjflq6a1.js";import{B as o}from"./Bar-RerBpz0k.js";import{L as a}from"./Line-BcB5oLqM.js";import{X as c}from"./XAxis-UZUbrGY6.js";import{T as A}from"./Tooltip-i_abJ7x2.js";import{R as f}from"./RechartsHookInspector-RngvJaov.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./CartesianAxis-BJ_Cxbna.js";import"./Layer-C5Up6lye.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./Label-BkH8bmvn.js";import"./PolarUtils-D6OsdRao.js";import"./ZIndexLayer-MboeMBT5.js";import"./zIndexSlice-IilHGL9E.js";import"./types-C0n05tvQ.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./RechartsWrapper-DV1HqoPP.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./tooltipContext-Bd7ebjWJ.js";import"./ReactUtils-DiD0pNfa.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpUAVjZ.js";import"./useAnimationId-BNxZGCVU.js";import"./Trapezoid-DIkxpdcS.js";import"./Sector-DE839nPA.js";import"./Symbols-4LuKRow4.js";import"./Curve-Bv3AqiO6.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./ErrorBarContext-BLvMse44.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./getZIndexFromUnknown-DDcD80js.js";import"./graphicalItemSelectors-C_fj_LyG.js";import"./ActivePoints-Dbd50Xfv.js";import"./Dot-BVCmMmNN.js";import"./getRadiusAndStrokeWidthFromDot-C-Fw1e1x.js";import"./useElementOffset-D4wGVCo_.js";import"./iteratee-eijgeMa6.js";import"./Cross-D4h0k0sg.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
