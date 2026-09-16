import{R as t}from"./iframe-14XWblZL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B3LGD4EX.js";import{R as l}from"./zIndexSlice-bTipO816.js";import{C as x}from"./ComposedChart-BWmJnIiB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ujt9bXXz.js";import{L as a}from"./Line-CWtoKG_V.js";import{X as c}from"./XAxis-C7X69uLj.js";import{T as g}from"./Tooltip-CBVgz2Nn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CvRLouIN.js";import"./Text-DR2swdHV.js";import"./resolveDefaultProps-CeALBfEq.js";import"./DOMUtils-BDBx2TYe.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BpIepiPk.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./throttle-BdJ0G1gd.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianAxis-CBKTwxf2.js";import"./Layer-DfNVM8Fr.js";import"./types-DUuownuR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./AnimatedItems-Dweh6qvQ.js";import"./useAnimationId-BF3NsOWV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btq3c2bb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./tooltipContext-DkW5DSuT.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./ErrorBarContext-B0Gjb9Ej.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getZIndexFromUnknown-K_r4WiI1.js";import"./useGraphicalItemIdentity-QKGsdlin.js";import"./Curve-CiXwsAAl.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./useElementOffset-cDBpeZWA.js";import"./uniqBy-BGqFg_4C.js";import"./iteratee-CcTmIxFv.js";import"./Cross-XOLMLvha.js";import"./Sector-BC_KIWW7.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
