import{R as t}from"./iframe-H7jEjneP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Vy_FZIWc.js";import{R as l}from"./zIndexSlice-Dwk71gAs.js";import{C as x}from"./ComposedChart-bb4rZ5JT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CzTFnMIP.js";import{L as a}from"./Line-CejbRaJQ.js";import{X as c}from"./XAxis-C43A4phh.js";import{T as g}from"./Tooltip-BbXqjLqB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DbiDHxJi.js";import"./Text-B4P_g0R9.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./DOMUtils-C61hDB9-.js";import"./isWellBehavedNumber-DWCHHiO4.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5waeKBAU.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./throttle-Bn1i2xOI.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./index-DrbE-eKG.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./CartesianAxis-YWS3Tdxj.js";import"./Layer-FJAqqNNz.js";import"./types-CAmW2CbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./AnimatedItems-zgVz-4ei.js";import"./useAnimationId-CpeZSN5w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWvJG87S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6A9Zooe8.js";import"./tooltipContext-XecBVIxH.js";import"./RegisterGraphicalItemId-BUF7N8O-.js";import"./ErrorBarContext-VTewkZK5.js";import"./GraphicalItemClipPath-7Dat9Ey8.js";import"./SetGraphicalItem-sO5iD_xL.js";import"./getZIndexFromUnknown-CF9tgXbe.js";import"./useGraphicalItemIdentity-DWbVUF44.js";import"./Curve-Etd9Rf3G.js";import"./step-vnfu6Ctu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbbrdPUM.js";import"./Dot-DQi7JtyA.js";import"./getRadiusAndStrokeWidthFromDot-8tlUvvpa.js";import"./useElementOffset-v2aajhRC.js";import"./uniqBy-Du05t_Lg.js";import"./iteratee-B7EKCWvZ.js";import"./Cross-B-zZN9vx.js";import"./Sector-CifzAg5p.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
