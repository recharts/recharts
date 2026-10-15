import{R as t}from"./iframe-DjRBpX_P.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B51h7pP8.js";import{R as l}from"./zIndexSlice-iVSWW5BV.js";import{C as x}from"./ComposedChart-CsK6iTFT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C8FM3oA0.js";import{L as a}from"./Line-Cy3PGKP5.js";import{X as c}from"./XAxis-Y0oUf3sW.js";import{T as g}from"./Tooltip-qAbEtBN7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CnRbgzX5.js";import"./Text-yVr7Mz0m.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./pageBackground-GeoRz0Dn.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dbtf4y40.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./axisSelectors-D79DWiWx.js";import"./throttle-DnOef0ju.js";import"./d3-scale-FJpOhRlp.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Ckb52kl2.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./activeStyles-D2vPCQTd.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iHdnnD4v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./tooltipContext-DvcWK-Jp.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getZIndexFromUnknown-DRZcJM_0.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./Curve-CdVM2yHm.js";import"./step-CX_rIxxT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";import"./Cross-2f4ua_UC.js";import"./Sector-CHux40iq.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
