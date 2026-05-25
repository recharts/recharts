import{e as t}from"./iframe-Cv0qW2ko.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B0w9h5lM.js";import{g as l}from"./arrayEqualityCheck-dw2UPZEJ.js";import{C as x}from"./ComposedChart-smS6LLp1.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DcLFma-t.js";import{L as a}from"./Line-G_mcTi4c.js";import{X as A}from"./XAxis-BT82JTqb.js";import{T as g}from"./Tooltip-MfN7ymMA.js";import{R as f}from"./RechartsHookInspector-CkUp2GTc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./zIndexSlice-CHCTzA5s.js";import"./immer-BQQ92H22.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./tooltipContext-CsKp6SzJ.js";import"./ReactUtils-pum_VzDZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-vIAq55MV.js";import"./useAnimationId-CYCjPTVx.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./getZIndexFromUnknown-CP5txwPd.js";import"./graphicalItemSelectors-Dq86ZHmz.js";import"./Curve-Bz0VDg5l.js";import"./step-BgXTWRgv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BU1jJ3Mc.js";import"./Dot--rMp3x47.js";import"./getRadiusAndStrokeWidthFromDot-BMewwEnB.js";import"./useElementOffset-DvAKpVC2.js";import"./uniqBy-DEfTIPXQ.js";import"./iteratee-BiY_dFh3.js";import"./Cross-lITeLapR.js";import"./Sector-DnzP2SdJ.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
