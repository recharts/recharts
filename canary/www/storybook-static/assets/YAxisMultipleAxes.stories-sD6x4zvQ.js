import{R as t}from"./iframe-D3O6io8m.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BzpJJ7qL.js";import{R as l}from"./zIndexSlice-DQB1nost.js";import{C as x}from"./ComposedChart-Cn_VV92w.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DfvI3QYm.js";import{L as a}from"./Line-Dt8Tbg_O.js";import{X as c}from"./XAxis-DUDfURVS.js";import{T as g}from"./Tooltip-CLn5uUV0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CWCww6MW.js";import"./Text-De-f5jqv.js";import"./resolveDefaultProps-kP9mtom1.js";import"./DOMUtils-Cvz_isR7.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNTWWRns.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./RechartsWrapper-DlAcodG6.js";import"./axisSelectors-DYaW_3kH.js";import"./throttle-CaEEZkOZ.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./CartesianAxis-B7axhf8y.js";import"./Layer-nZxEgPG5.js";import"./types-B4ar_Rgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./AnimatedItems-B5d6Ob4T.js";import"./useAnimationId-Cz9FmiXJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8bfrkS9P.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaF-7U2y.js";import"./tooltipContext-UlF4qhSY.js";import"./RegisterGraphicalItemId-JcTZBT0j.js";import"./ErrorBarContext-CYOIqMSi.js";import"./GraphicalItemClipPath-B0houyvR.js";import"./SetGraphicalItem-DB0WYfC5.js";import"./getZIndexFromUnknown-BFGTa6K3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B6FCrkUh.js";import"./Curve-BqlJ0F26.js";import"./step-BpERcgqV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-gquoLNda.js";import"./Dot-bFsMR4tf.js";import"./getRadiusAndStrokeWidthFromDot-BFirVaXF.js";import"./useElementOffset-fyOV3B1W.js";import"./uniqBy-D-toxyLD.js";import"./iteratee-BOVM6bQ2.js";import"./Cross-BHOvcmT7.js";import"./Sector-CNKizuGP.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
