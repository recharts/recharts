import{R as t}from"./iframe-Bsj5zL9n.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CbZ6bfr6.js";import{R as l}from"./zIndexSlice-Cq8HAqW-.js";import{C as x}from"./ComposedChart-CUT9nv0s.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWOGza3d.js";import{L as a}from"./Line-CEJpYTqK.js";import{X as c}from"./XAxis-BgzuwsrB.js";import{T as g}from"./Tooltip-HUdUk_4w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dh346ivy.js";import"./Text-EdZq5d5T.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./pageBackground-B9aaE2P3.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdEpN6P8.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./RechartsWrapper-CfIRZAky.js";import"./axisSelectors-mMRcbn7f.js";import"./throttle-CrEblMxD.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./CartesianAxis-BFozoP5y.js";import"./Layer-yetTMzBX.js";import"./types-Bb-qVITL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./activeStyles-C6E3VGh0.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCJ2slUs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./tooltipContext-Bu8eY-DR.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./getZIndexFromUnknown-7dfsvPS3.js";import"./useGraphicalItemIdentity-BJYihGV1.js";import"./Curve-DfVRmOpg.js";import"./step-DdZLdhts.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DaFpowFA.js";import"./Dot-Cf3V7dyP.js";import"./getRadiusAndStrokeWidthFromDot-CxwIFweR.js";import"./useElementOffset-DZSLckyW.js";import"./uniqBy-DpsGABHA.js";import"./iteratee-t29Xx_gs.js";import"./Cross-DFL3271i.js";import"./Sector-zFZXOIWg.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
