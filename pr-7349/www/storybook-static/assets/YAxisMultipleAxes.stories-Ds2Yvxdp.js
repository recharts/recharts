import{e as t}from"./iframe-D2xkh5VA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Bb2589BF.js";import{g as l}from"./arrayEqualityCheck-BcvopYI_.js";import{C as x}from"./ComposedChart-oF9YiWjC.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-HhFMTZQv.js";import{L as a}from"./Line-C-3S5d4g.js";import{X as A}from"./XAxis-8irwFxlw.js";import{T as g}from"./Tooltip-CxO3WPGy.js";import{R as f}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DAZlFlgD.js";import"./Layer-DhOsa-t6.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./Label-DeRbtMqy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7En4AyY.js";import"./zIndexSlice-BbkJeUOK.js";import"./immer-CX6PUSO2.js";import"./types-CxiHHYTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./tooltipContext-CmECDRNO.js";import"./ReactUtils-Bwb7QYmO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFymuHuj.js";import"./useAnimationId-DiNRYHAi.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./getZIndexFromUnknown-DE3_c6Ln.js";import"./graphicalItemSelectors-BesszVB6.js";import"./Curve-DLNzalYA.js";import"./step-C9rAKZ37.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BGHqbzdd.js";import"./Dot-I5Kzo50C.js";import"./getRadiusAndStrokeWidthFromDot-BhBat3wy.js";import"./useElementOffset-u2Po3lHw.js";import"./uniqBy-d6dLjjah.js";import"./iteratee-BoPPzPCm.js";import"./Cross-CpcJZtuo.js";import"./Sector-CbaEqXZ4.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Lt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
