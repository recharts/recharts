import{R as t}from"./iframe-C3rzwJQL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bi88dWrW.js";import{R as l}from"./zIndexSlice-6U0v4l7r.js";import{C as x}from"./ComposedChart-DMrHliN6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Og-SEJod.js";import{L as a}from"./Line-BD2mjSH_.js";import{X as c}from"./XAxis-DiB8sdSh.js";import{T as g}from"./Tooltip-2DujJhc4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBpcK4i6.js";import"./Text-X-wYRMmx.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./throttle-B7FABENa.js";import"./axisSelectors-_YduxGmH.js";import"./d3-scale-C-_ks2ZK.js";import"./CartesianAxis-CD4CCpjb.js";import"./Layer-B6-xlzoZ.js";import"./types-BKor_cCv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper--Ro5bVbm.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./LabelList-CqZcLqEs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRaBEnAs.js";import"./useAnimationId-Dn06_oTK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./tooltipContext-BO2FOIgQ.js";import"./dataEntryStyles-CekGYxzv.js";import"./ErrorBarContext-BUzY2WBc.js";import"./activeStyles-DlQJ4xNs.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getZIndexFromUnknown-CezflR8V.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./fillDefinitions-Cpwg_wUg.js";import"./omit-hSAuZZsR.js";import"./isArguments-yB-y1yaH.js";import"./Curve-NLRniG8O.js";import"./step-B3ivcKoR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-1KuvikUF.js";import"./Dot-obmqUtS4.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./getRadiusAndStrokeWidthFromDot-CUcYHW0t.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./Cross-BzTKK6a0.js";import"./Sector-CTZzADJH.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
