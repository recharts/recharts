import{R as t}from"./iframe-DyRGY0m8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CiOcUDSR.js";import{R as l}from"./zIndexSlice-C8Goqaoo.js";import{C as x}from"./ComposedChart-DeUFnq4z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CuSnvdur.js";import{L as a}from"./Line-DHDl2yuC.js";import{X as c}from"./XAxis-ClyuyVSJ.js";import{T as g}from"./Tooltip-CwG5nFhr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DmSSoRs6.js";import"./Text-BK2IfBRh.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./pageBackground-BnJW5YJX.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CELDjLLn.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./RechartsWrapper-eOw39y0P.js";import"./axisSelectors-DJKcPqvS.js";import"./throttle-D2TCso2q.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./AnimatedItems-B4s4aHQH.js";import"./useAnimationId-DVRsp9Ga.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dw0JBNRA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./tooltipContext-CrfpOag7.js";import"./dataEntryStyles-BSCSOZbL.js";import"./ErrorBarContext-CkmAHEEl.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./getZIndexFromUnknown-CyqcnY0q.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";import"./Curve-BnhnBI5K.js";import"./step-Dnl3MITN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdFDoJtX.js";import"./Dot-DOIcUge1.js";import"./getRadiusAndStrokeWidthFromDot-BB4xIvng.js";import"./useElementOffset-fQu1PDa3.js";import"./uniqBy-GFY-aWot.js";import"./iteratee-wH6oTw1B.js";import"./Cross-BadjxkMM.js";import"./Sector-DUOxujmX.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
