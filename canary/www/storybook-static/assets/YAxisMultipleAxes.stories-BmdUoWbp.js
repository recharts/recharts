import{R as t}from"./iframe-CZEQ_wjd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BLT7Ik9Z.js";import{R as l}from"./zIndexSlice-CGZbBTjh.js";import{C as x}from"./ComposedChart-DVaTaaXl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDgId091.js";import{L as a}from"./Line-BfeaFnBY.js";import{X as c}from"./XAxis-GN6jnA3k.js";import{T as g}from"./Tooltip-CcoS3c4T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-COoLstIf.js";import"./Text-Dsq3-wjY.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./pageBackground-CKNOMxYJ.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./axisSelectors-BfF4ImUe.js";import"./throttle-DA2J31XT.js";import"./d3-scale-er3AEJAE.js";import"./CartesianAxis-DTwSBZEB.js";import"./Layer-D6WM8pRX.js";import"./types-CKK75Clx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CLkKKSWb.js";import"./index-C8Xv27VY.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./activeStyles-BfHlsJSZ.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6Hc5hiS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./tooltipContext-CM3PKbsO.js";import"./ErrorBarContext-BhJCUijj.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getZIndexFromUnknown-J650HG4x.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./omit-D3KbE23V.js";import"./isArguments-yB-y1yaH.js";import"./Curve-XL3ybND_.js";import"./step-BKPm417p.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./Cross-eg_rGi3i.js";import"./Sector-D5lUlDQq.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
