import{R as t}from"./iframe-DGYc5Evr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D-S3NpvC.js";import{R as l}from"./zIndexSlice-CjPpABdt.js";import{C as x}from"./ComposedChart-DPdiH-nu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BgWNK6Um.js";import{L as a}from"./Line-CXcSqzzS.js";import{X as c}from"./XAxis-v5Hkx9ES.js";import{T as g}from"./Tooltip-C0qqlB8-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-XkVfHgZD.js";import"./Layer-Cp66mevN.js";import"./resolveDefaultProps-BzwDYh32.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./Label-ByCQCza6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiqJjXGY.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./types-m9Fzmc4X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BojFd99l.js";import"./throttle-44TCHeAp.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./tooltipContext-DhQqMsQN.js";import"./AnimatedItems-DpTt0Un9.js";import"./useAnimationId-CRdgro7A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2UtW3B_i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getZIndexFromUnknown-CKy08MvG.js";import"./graphicalItemSelectors-o-2IsEs2.js";import"./Curve-CIxbvgQM.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./useElementOffset-BXz8BlKI.js";import"./uniqBy-pDvyWWJD.js";import"./iteratee-D1l6G22V.js";import"./Cross-CEmVOnV1.js";import"./Sector-C0oj-kOp.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
