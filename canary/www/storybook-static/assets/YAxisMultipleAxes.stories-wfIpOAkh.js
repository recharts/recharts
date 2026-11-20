import{R as t}from"./iframe-CMFw787F.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CRwIRJrx.js";import{R as l}from"./zIndexSlice-DW-R_9mL.js";import{C as x}from"./ComposedChart-jPjAixDx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C2Cjz_v6.js";import{L as a}from"./Line-Bw4mZerm.js";import{X as c}from"./XAxis-C_WTSptP.js";import{T as g}from"./Tooltip-CxOjIIZ-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CYtvKaSn.js";import"./Text-DneUrFCx.js";import"./resolveDefaultProps-BOABxk_y.js";import"./ZIndexLayer-zQQZbbdp.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./throttle-CR0jnMre.js";import"./axisSelectors-rk7JAHS6.js";import"./d3-scale-CNeDjyej.js";import"./CartesianAxis-DJ5NbueU.js";import"./Layer-DoofO9Zt.js";import"./types-DA1V6lfX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-AThag0NN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./dataEntryStyles-CcaQQEAi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CnUfue8k.js";import"./useAnimationId-DwVwC1xb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./tooltipContext-BC-0az86.js";import"./ErrorBarContext-tb4T2KmR.js";import"./activeStyles-DP81Qo_e.js";import"./SetGraphicalItem-B5x77PpV.js";import"./getZIndexFromUnknown-A6LZSEsL.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./omit-rQJAOHnj.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./Curve-BOyetQ0I.js";import"./step-Droy7KkJ.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./useElementOffset-O2G3aTiM.js";import"./uniqBy-2YD2k7wm.js";import"./iteratee-6HUgj-CO.js";import"./Cross-kWt6WnLq.js";import"./Sector-gX6jhz0C.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
