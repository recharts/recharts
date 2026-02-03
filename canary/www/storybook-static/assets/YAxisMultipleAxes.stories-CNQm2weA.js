import{e as t}from"./iframe-CTxRHOGj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-D6e6Qj3m.js";import{R as l}from"./arrayEqualityCheck-B_rRIojj.js";import{C as x}from"./ComposedChart-CJXRd14X.js";import{B as o}from"./Bar-BAIm-8aC.js";import{L as a}from"./Line-D0jLL_KR.js";import{X as c}from"./XAxis-BNIlZlch.js";import{T as A}from"./Tooltip-D5lRIm6g.js";import{R as g}from"./RechartsHookInspector-Dvolm171.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./CartesianAxis-BedncvxG.js";import"./Layer-NDmuZa_H.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./Label-D926DJYr.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-hZNMFSqY.js";import"./zIndexSlice-fEtQltEu.js";import"./types-CAlg1Faj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./RechartsWrapper-B2RXwXeU.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./tooltipContext-DXRTN6s2.js";import"./ReactUtils-BZY6277w.js";import"./ActiveShapeUtils-Dwyol1Bt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxJQxHPh.js";import"./useAnimationId-BmKrhVKp.js";import"./Trapezoid-VAjw1k5b.js";import"./Sector-DQFWjz1_.js";import"./Symbols-BBka0yme.js";import"./Curve-Dmxl7Q3I.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./ErrorBarContext-D1j-EPSf.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./getZIndexFromUnknown-BL18CTD2.js";import"./graphicalItemSelectors-C3EXFv3_.js";import"./ActivePoints-ColTAJU4.js";import"./Dot-BjkBWsnl.js";import"./getRadiusAndStrokeWidthFromDot-DhHV37ye.js";import"./useElementOffset-DEG1gE-F.js";import"./iteratee-BzekVtn2.js";import"./Cross-Cw4BhdHo.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
