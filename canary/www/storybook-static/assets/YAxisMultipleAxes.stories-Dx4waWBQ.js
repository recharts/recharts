import{R as t}from"./iframe-DVXtBbhv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-e33_-5yv.js";import{R as l}from"./zIndexSlice-CRXmCTqm.js";import{C as x}from"./ComposedChart-BchTIeWN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BnVSJ396.js";import{L as a}from"./Line-ZRT5g1vt.js";import{X as c}from"./XAxis-BQ7gOxOo.js";import{T as g}from"./Tooltip-DWV6q4l_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-5Ji-gJCy.js";import"./Text-vABaHyza.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./throttle-CSTRLONy.js";import"./axisSelectors-M5GsU3rg.js";import"./d3-scale-Ctk2L_AK.js";import"./CartesianAxis-BnuaOFtw.js";import"./Layer-DvCe8pYL.js";import"./types-DRd1AoLJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./LabelList-h2AkLue_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWRYsjhQ.js";import"./useAnimationId-mwIlAEpa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./tooltipContext-DfrRO7K2.js";import"./dataEntryStyles-aRHeEgvk.js";import"./ErrorBarContext-DvlMCK3a.js";import"./activeStyles-C5r4Jq_u.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getZIndexFromUnknown-CVXE7EWA.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./omit-BAMjBdfC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cv9dH7Wv.js";import"./step-CaWVPUsr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-COJ33MUQ.js";import"./Dot-C4qnCcQo.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./getRadiusAndStrokeWidthFromDot-CoVHwyP0.js";import"./useElementOffset-R8U0hgkF.js";import"./uniqBy-DRpOlyJe.js";import"./iteratee-BH10e2Wz.js";import"./Cross-Bk3jg-xs.js";import"./Sector-Di21Oj5C.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
