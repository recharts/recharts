import{R as t}from"./iframe-C079Nsfx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CLt4nzsu.js";import{R as l}from"./zIndexSlice-DLciVaZw.js";import{C as x}from"./ComposedChart-BOV6wT6A.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-LqltPGlO.js";import{L as a}from"./Line-D_FKsDxM.js";import{X as c}from"./XAxis-De-1mJNj.js";import{T as g}from"./Tooltip-O-A_CuVP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DC63Ta0S.js";import"./Text-6vWGAU42.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./DOMUtils-L7J-bYO6.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IY8xHCFB.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./throttle-D3s_o_Wq.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianAxis-KliPXgnc.js";import"./Layer-Kj8YrSbz.js";import"./types-CUH5bwnf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./AnimatedItems-DS39RbqN.js";import"./useAnimationId-MWHCnbEb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TwKN1OD2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./tooltipContext-CHMhifGO.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./ErrorBarContext-DRwIAR_a.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getZIndexFromUnknown-CFiBTw1V.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";import"./Curve-iBp1fVgP.js";import"./step-Chg4DONu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6LcUBQa.js";import"./Dot-mGzGAe7T.js";import"./getRadiusAndStrokeWidthFromDot-CGqoDsan.js";import"./useElementOffset-CMlcetBv.js";import"./uniqBy-BY9dT-HT.js";import"./iteratee-DCZNy5jY.js";import"./Cross-DD2cTEUL.js";import"./Sector-ZEOkSAXl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
