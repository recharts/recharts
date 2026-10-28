import{R as t}from"./iframe-OqKJbU5N.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BvbToLwB.js";import{R as l}from"./zIndexSlice-SR00o6sl.js";import{C as x}from"./ComposedChart-DbKCzyO4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cy2MnLW-.js";import{L as a}from"./Line-D87hppUw.js";import{X as c}from"./XAxis-BOpO9kNQ.js";import{T as g}from"./Tooltip-B-vv3o_Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Du8bKZih.js";import"./Text-BBVNpawX.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./throttle-Dd4NMqKN.js";import"./axisSelectors-DgBSWf8B.js";import"./d3-scale-BY5IvaL3.js";import"./CartesianAxis-pqwy63jz.js";import"./Layer-Cr-Iv08I.js";import"./types-9svgO-k7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DR91apNy.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./LabelList-s2IEt-iE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMG9couI.js";import"./useAnimationId-DvBUlVSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./tooltipContext-CN05kCq4.js";import"./dataEntryStyles-KId877_8.js";import"./ErrorBarContext-DPjF7BBQ.js";import"./activeStyles-DnmgD4rl.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getZIndexFromUnknown-BDhOMnFG.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./omit-B4Z2lN81.js";import"./isArguments-yB-y1yaH.js";import"./Curve-61gTtyRO.js";import"./step-BRtTreeO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DniM9AXi.js";import"./Dot-C7hW2lTf.js";import"./Symbols-ayOQu3YZ.js";import"./symbol-DNYfeltN.js";import"./getRadiusAndStrokeWidthFromDot-BDb9Uw_H.js";import"./useElementOffset-CzQY9gJ2.js";import"./uniqBy-DsfhD18s.js";import"./iteratee-Cyssn55k.js";import"./Cross-CUTxlgQS.js";import"./Sector-tnQ6QhLg.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
