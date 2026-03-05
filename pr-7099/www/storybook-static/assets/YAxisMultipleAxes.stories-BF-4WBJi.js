import{e as t}from"./iframe-Bhf_6EYG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DsqV4VJF.js";import{R as l}from"./arrayEqualityCheck-B5hYgnzz.js";import{C as x}from"./ComposedChart-CXm17D-l.js";import{B as o}from"./Bar-BoLotl3d.js";import{L as a}from"./Line-BD0JBpB-.js";import{X as c}from"./XAxis-BWizQgTN.js";import{T as A}from"./Tooltip-RSHdd8Ji.js";import{R as g}from"./RechartsHookInspector-oY9r6aPa.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CR_T_Fxw.js";import"./Layer-XFtQT-yw.js";import"./resolveDefaultProps-CltYoVM3.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./Label-CzjtkYX8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0zk77US.js";import"./zIndexSlice-C8FzPb5S.js";import"./immer-DsnYViPQ.js";import"./types-B1Me3-i2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./tooltipContext-DrWjvVZn.js";import"./ReactUtils-BVVOmEmS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./useAnimationId-5DionbmP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./step-B0zDApE1.js";import"./Curve-CcL59NDu.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./ErrorBarContext-CFfHMS1a.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./getZIndexFromUnknown-S-WMpLto.js";import"./graphicalItemSelectors-Nlwl8Y0A.js";import"./ActivePoints-CzS01Ls6.js";import"./Dot-1VAAYKhE.js";import"./getRadiusAndStrokeWidthFromDot-Bbk5HhSJ.js";import"./useElementOffset-BCpQNw_Z.js";import"./uniqBy-M-uQcWsx.js";import"./iteratee-C2Amkniy.js";import"./Cross-DmUMkRgg.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
