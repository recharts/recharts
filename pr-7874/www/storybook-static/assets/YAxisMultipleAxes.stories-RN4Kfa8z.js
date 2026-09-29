import{R as t}from"./iframe-CkExmVLh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BKUGWzYz.js";import{R as l}from"./zIndexSlice-a3gNrCTg.js";import{C as x}from"./ComposedChart-BhMk3qvU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DCTHwCGT.js";import{L as a}from"./Line-Cisnr3UH.js";import{X as c}from"./XAxis-JBQw78VL.js";import{T as g}from"./Tooltip-DXJkc_VB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./DOMUtils-B9viDuiF.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuxWNsKn.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./throttle-BNvjyLg8.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianAxis-BhWf1FlQ.js";import"./Layer-CGaMavgo.js";import"./types-D0Lh6MHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./AnimatedItems-V2dSiKDR.js";import"./useAnimationId-B25s9B77.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B72I1dSe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./tooltipContext-CFW5lOAg.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getZIndexFromUnknown-DUP84ONz.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./dataEntryStyles-D4_BoS-z.js";import"./Curve-BfUX2fxA.js";import"./step-TH_7jXAx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./useElementOffset-CXUuqBTx.js";import"./uniqBy-aTBj_DaH.js";import"./iteratee-qu9slWkn.js";import"./Cross-M3-Y2Aoo.js";import"./Sector-DS9gcpep.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
