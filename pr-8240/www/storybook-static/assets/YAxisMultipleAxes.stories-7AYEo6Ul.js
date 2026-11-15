import{R as t}from"./iframe-CQK5cKb5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CXpvs3FV.js";import{R as l}from"./zIndexSlice-B7W_lSrS.js";import{C as x}from"./ComposedChart-BPNXxxpF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B3Oiy8yj.js";import{L as a}from"./Line-CK4N9DPd.js";import{X as c}from"./XAxis-C7d_UGHt.js";import{T as g}from"./Tooltip-Dzcs2ZVL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CQ2HjeWR.js";import"./Text-Z2ey8U7p.js";import"./resolveDefaultProps-sIKj046z.js";import"./ZIndexLayer-9k2RLX5n.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CGBkjniO.js";import"./throttle-CtjoOnFV.js";import"./axisSelectors-CFm2aUpt.js";import"./d3-scale-DXQtVXGL.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DIL7xA5W.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./dataEntryStyles-B4J35a5k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkPkuka8.js";import"./useAnimationId-C1Da615s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./tooltipContext-B_XufsJP.js";import"./ErrorBarContext-7B25K72P.js";import"./activeStyles-DkKN9Gb1.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getZIndexFromUnknown-C8pSLRLW.js";import"./useEffectiveDataKey-C9n3TkLL.js";import"./omit-XESemSvM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B0cUpmBX.js";import"./step-D2yChQSN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-llUCjP.js";import"./Dot-DqwBwinu.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./getRadiusAndStrokeWidthFromDot-B0dUD5K2.js";import"./useElementOffset-KeEWMChU.js";import"./uniqBy-C_Y6AlzU.js";import"./iteratee-AcsDAR-L.js";import"./Cross-C0dW1cn9.js";import"./Sector-DGo8K8ZE.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
