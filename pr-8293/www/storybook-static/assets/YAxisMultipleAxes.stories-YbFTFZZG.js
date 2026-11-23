import{R as t}from"./iframe-BzxAUdBV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DCmm8K7b.js";import{R as l}from"./zIndexSlice-CpYrgVZX.js";import{C as x}from"./ComposedChart-hvP_dJoC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D8YpP4v0.js";import{L as a}from"./Line-C-rr1QKq.js";import{X as c}from"./XAxis-CtYxvtbo.js";import{T as g}from"./Tooltip-BNUBXAzx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./ZIndexLayer-BUHaqwT6.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqQp2e17.js";import"./throttle-C2l7QP8r.js";import"./axisSelectors-D1428BGH.js";import"./d3-scale-BnAxRH73.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCictS_F.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-s-gxJKKB.js";import"./useAnimationId-CdQeQcKS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./tooltipContext-Bxtbw3Co.js";import"./ErrorBarContext-iCVMvaG7.js";import"./activeStyles-DjlDJ1Rs.js";import"./SetGraphicalItem-in8OQb6t.js";import"./getZIndexFromUnknown-D-mAhRYA.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./omit-BdgkeM2z.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Curve-DIyQM0l3.js";import"./step-CAG0Ynz6.js";import"./path-BBMZd4YL.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./useElementOffset-DEzR6i3W.js";import"./uniqBy-BHLVblv7.js";import"./iteratee-BJNLYDOc.js";import"./Cross-Ck9k1RFb.js";import"./Sector-Cb8zQIac.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
