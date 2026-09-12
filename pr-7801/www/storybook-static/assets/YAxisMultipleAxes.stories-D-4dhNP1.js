import{R as t}from"./iframe-DDEEclxH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-x9xRaP5Q.js";import{R as l}from"./zIndexSlice-CummiUIE.js";import{C as x}from"./ComposedChart-DyJQFPgX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DKSznDqB.js";import{L as a}from"./Line-CgJTWLaM.js";import{X as c}from"./XAxis-OiAt4OfM.js";import{T as g}from"./Tooltip-DqSOhkQM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BfUQEb6D.js";import"./Text-CkcSa5pV.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./DOMUtils-3FjGni4U.js";import"./isWellBehavedNumber-D3AVRour.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUGWfp6H.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./RechartsWrapper-B3G4Mqkl.js";import"./axisSelectors-DiahpmD-.js";import"./throttle-OMOVa0qg.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./CartesianAxis-CdQspuXD.js";import"./Layer-DiIYn3al.js";import"./types-CMxl_r2z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./AnimatedItems-AtWd5M7o.js";import"./useAnimationId-qBVm6Gg1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ConSHzfx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./tooltipContext-LIlH2u3u.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./ErrorBarContext-DNzyQz3v.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getZIndexFromUnknown-CEPKdlSW.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";import"./Curve-DmyaY7N7.js";import"./step-C_2d7_Dh.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CkbG5RIV.js";import"./Dot-DxUofVpC.js";import"./getRadiusAndStrokeWidthFromDot-B-fypNZ4.js";import"./useElementOffset-CxBvXcML.js";import"./uniqBy-BK8FWQ7h.js";import"./iteratee-B5AA-IZ8.js";import"./Cross-O1rJ8l0f.js";import"./Sector-DAhH7WUd.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
