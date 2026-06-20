import{R as t}from"./iframe-C2Yu5A-b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CAeM0KFi.js";import{R as l}from"./zIndexSlice-tndcr-lp.js";import{C as x}from"./ComposedChart-Cfc9HyP7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-3d9pPyoj.js";import{L as a}from"./Line-qnNBUaij.js";import{X as c}from"./XAxis-WqnJVPHT.js";import{T as g}from"./Tooltip-D4_5mk3v.js";import"./preload-helper-Dp1pzeXC.js";import"./get-sXbEBADG.js";import"./CartesianAxis-Che9oLkh.js";import"./Layer-B5f-JESM.js";import"./resolveDefaultProps-Bpz2fUNW.js";import"./Text-nteLn1KQ.js";import"./DOMUtils-D5PdJ1Ca.js";import"./isWellBehavedNumber-hO-3eJ3M.js";import"./Label-5FD90Jk0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuYz_T9C.js";import"./index-Crtw70Th.js";import"./index-Bw2J7CiK.js";import"./types-D2qrwj6D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRR4JQds.js";import"./immer-Dw4t5i4O.js";import"./RechartsWrapper-DLm4movc.js";import"./index-Cf-iiIX8.js";import"./index-RvHlbfdo.js";import"./axisSelectors-ldKOVrRn.js";import"./d3-scale-CalfYQM5.js";import"./CartesianChart-GviTQT_7.js";import"./chartDataContext-BCayYLP6.js";import"./CategoricalChart-CfUCGvtZ.js";import"./tooltipContext-CMoxRMY5.js";import"./AnimatedItems-Bx_qRQBs.js";import"./useAnimationId-_dE112Ua.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYfm48t9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BR-aw80X.js";import"./RegisterGraphicalItemId-BBUK6ex4.js";import"./ErrorBarContext-CB1md74y.js";import"./GraphicalItemClipPath-ByyRz6Zm.js";import"./SetGraphicalItem-B-XBlhKJ.js";import"./getZIndexFromUnknown-J6YUZqTR.js";import"./graphicalItemSelectors-B9Lu1HbA.js";import"./Curve-BOpkUjqJ.js";import"./step-Badcwj1a.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BTO62zcn.js";import"./Dot-CKPKAf35.js";import"./getRadiusAndStrokeWidthFromDot-CLg6UhmZ.js";import"./useElementOffset-D1jcGseP.js";import"./uniqBy-EOs9hKbg.js";import"./iteratee-BIwzy5Sd.js";import"./Cross-CDEkmIQU.js";import"./Sector-CXcIFBrm.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
