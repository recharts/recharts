import{e as t}from"./iframe-DFPwKozO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-D_B66qKF.js";import{R as l}from"./arrayEqualityCheck-BO0FMWsB.js";import{C as x}from"./ComposedChart-BAhOAMBQ.js";import{B as o}from"./Bar-B4moLiuP.js";import{L as a}from"./Line-CJI9U6t6.js";import{X as c}from"./XAxis-DB5s1uQK.js";import{T as A}from"./Tooltip-CejCiFQQ.js";import{R as g}from"./RechartsHookInspector-y9SAwPh-.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BRd4GQUv.js";import"./Layer-UW-3uLDu.js";import"./resolveDefaultProps-B8sM-C45.js";import"./Text-BuTP6JNp.js";import"./DOMUtils-XVY0zsXA.js";import"./Label-BfeOO_bU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyDzR_iO.js";import"./zIndexSlice-uamkKpnq.js";import"./immer-Cq-7IBeQ.js";import"./types-DHDJ8gyd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BKeP3MvG.js";import"./hooks-bta4c9FS.js";import"./axisSelectors-Fye4v2An.js";import"./d3-scale-DC5SBv4a.js";import"./RechartsWrapper-CjOfOtkl.js";import"./index-BM-iP6jK.js";import"./CartesianChart-Dzwf7i_k.js";import"./chartDataContext-o1PhfYVG.js";import"./CategoricalChart-B84p6B_R.js";import"./tooltipContext-nePS0eA6.js";import"./ReactUtils-iN1uHd88.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CntxH9-T.js";import"./isPlainObject-GWG2LZr9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Atcro-mi.js";import"./useAnimationId-DMMdhd1b.js";import"./Trapezoid-DlIOBrOD.js";import"./Sector-UE1_Ib6K.js";import"./Symbols-GcyqxXm3.js";import"./symbol-DJv_b8-d.js";import"./step-CD2gspfu.js";import"./Curve-Cr2jXmDN.js";import"./RegisterGraphicalItemId-ISC1Bh-u.js";import"./ErrorBarContext-D3fyLUw8.js";import"./GraphicalItemClipPath-CH9onNSH.js";import"./SetGraphicalItem-D8F49Ifw.js";import"./getZIndexFromUnknown-BnTlR-Bi.js";import"./graphicalItemSelectors-CKp7rBmt.js";import"./ActivePoints-D7vvpkK8.js";import"./Dot-BAdyos6T.js";import"./getRadiusAndStrokeWidthFromDot-m10-ynrS.js";import"./useElementOffset-6CBXSlCR.js";import"./uniqBy-CE3JJ0yH.js";import"./iteratee-DpnnO8WS.js";import"./Cross-DwDV1BmD.js";import"./index-BKyMZNGM.js";import"./ChartSizeDimensions-tYevmH5B.js";import"./OffsetShower-CuJwjf0e.js";import"./PlotAreaShower-CheWi7Y7.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
