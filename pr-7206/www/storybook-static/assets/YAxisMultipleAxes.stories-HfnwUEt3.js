import{e as t}from"./iframe-h6RyBADW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D_X1UMSW.js";import{R as l}from"./arrayEqualityCheck-uwQbgtgj.js";import{C as x}from"./ComposedChart-TyzmibOv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DOj26cu-.js";import{L as a}from"./Line-COeb2reN.js";import{X as A}from"./XAxis-C2Gh6oi-.js";import{T as g}from"./Tooltip-e_pYBj_B.js";import{R as f}from"./RechartsHookInspector-BC4p3bxF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D_8tywby.js";import"./Layer-CUjlXR2J.js";import"./resolveDefaultProps-B6F9Tq8Y.js";import"./Text-DawNGEOi.js";import"./DOMUtils-CZxQTbW4.js";import"./Label-BhurGsu4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wKcmD7IL.js";import"./zIndexSlice-CGsXWVT5.js";import"./immer-Bfj3ZeVH.js";import"./types-QtI883v9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CB3omCIm.js";import"./hooks-DTtRusoK.js";import"./axisSelectors-BdNfc6Ph.js";import"./d3-scale-B_V_eZSW.js";import"./RechartsWrapper-jkN30DDj.js";import"./index-D7nUYq7y.js";import"./CartesianChart-MMvNBqn6.js";import"./chartDataContext-CxcxsnMq.js";import"./CategoricalChart-B30uA3Pl.js";import"./tooltipContext-D1i3p723.js";import"./ReactUtils-CdvzfmpN.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BzQm0dMt.js";import"./isPlainObject-BxrxHDzC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxs0ztC_.js";import"./useAnimationId-B4b4HoxB.js";import"./Trapezoid-6Ll4yFmM.js";import"./Sector-Dimczp4z.js";import"./Symbols-CkhqMYHd.js";import"./symbol-CuOhUCvG.js";import"./step-BtU2_rsP.js";import"./Curve-1roVG56o.js";import"./RegisterGraphicalItemId-IGv_NVoe.js";import"./ErrorBarContext-B3I7qVXU.js";import"./GraphicalItemClipPath-DyVzZO4a.js";import"./SetGraphicalItem-CuEfojVc.js";import"./getZIndexFromUnknown-CVBPiqAI.js";import"./graphicalItemSelectors-a4MLUv04.js";import"./ActivePoints-OkqDIVjO.js";import"./Dot-D8rKYkPw.js";import"./getRadiusAndStrokeWidthFromDot-D2N5NH_l.js";import"./useElementOffset-B4f3I-gy.js";import"./uniqBy-Czbdu-mV.js";import"./iteratee-Ds-0edgw.js";import"./Cross-CVI905Tb.js";import"./index-DLs_tRY-.js";import"./ChartSizeDimensions-BDuSdsYs.js";import"./OffsetShower-MxH05TXA.js";import"./PlotAreaShower-CRP0xEOQ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
