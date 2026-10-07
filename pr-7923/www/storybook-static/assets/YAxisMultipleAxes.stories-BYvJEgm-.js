import{R as t}from"./iframe-wyV1OFJQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Vd3tzgVC.js";import{R as l}from"./zIndexSlice-0AwT1g9-.js";import{C as x}from"./ComposedChart-CBisthEs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DRzxAS_l.js";import{L as a}from"./Line-BEKv9UbE.js";import{X as c}from"./XAxis-C5gx8h5c.js";import{T as g}from"./Tooltip-BNWhP4RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DI-dZ1Mj.js";import"./Text-LrIwM5Ef.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./DOMUtils-CMxfKpC9.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--FDGDHLw.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./RechartsWrapper-0u6nGOPN.js";import"./axisSelectors-DUKM8TOz.js";import"./throttle-CUUK7_-R.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./index-BMAJF2wT.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./CartesianAxis-C_-7YUyD.js";import"./Layer-C6HNy6Ts.js";import"./types-Df9zKJ57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./AnimatedItems-9EcBcc8f.js";import"./useAnimationId-BF1AH8CU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKwfFBjt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./tooltipContext-DaA9OC3q.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./ErrorBarContext-D8mz_gNG.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getZIndexFromUnknown-BvxD1Adi.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./dataEntryStyles-Cct3OjzK.js";import"./Curve-BT6y-5_3.js";import"./step-DN0D11qs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-ZsoMWs.js";import"./Dot-CQzkvjlm.js";import"./getRadiusAndStrokeWidthFromDot-BVhvwnfR.js";import"./useElementOffset-WnBYc90z.js";import"./uniqBy-BDxcmCyA.js";import"./iteratee-KwxnxvYa.js";import"./Cross-CUH5Fm-2.js";import"./Sector-BrG4-iyx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
