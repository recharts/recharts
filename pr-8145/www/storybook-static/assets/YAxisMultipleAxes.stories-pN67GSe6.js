import{R as t}from"./iframe-C9Icmvn-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-EbKXu10L.js";import{R as l}from"./zIndexSlice-BtEgXkTj.js";import{C as x}from"./ComposedChart-D9iZM0Ny.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BylXbNGS.js";import{L as a}from"./Line-CQVEJkC8.js";import{X as c}from"./XAxis-3c-aZ5Pt.js";import{T as g}from"./Tooltip-AmZhScsQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./throttle-BP58Oxor.js";import"./axisSelectors-C12AZXdM.js";import"./d3-scale-DZcRnjza.js";import"./CartesianAxis-R6B48fBq.js";import"./Layer-wqByJTCO.js";import"./types-C9Uy4GKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CtHkjOy7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./LabelList-BBURyYAC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BsmVPfs4.js";import"./useAnimationId-BL9AhoYr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./tooltipContext-kO2lJoKe.js";import"./dataEntryStyles-BjZqswDr.js";import"./ErrorBarContext-BlDg14Jm.js";import"./activeStyles-h91K6JZi.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getZIndexFromUnknown-Dfmzqvri.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./omit-DYtv04xC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C441Qxgg.js";import"./step-DBIWc43o.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./useElementOffset-Cww1lqIJ.js";import"./uniqBy-D4B7yWHg.js";import"./iteratee-e68Efg3c.js";import"./Cross-Cgq-2Krw.js";import"./Sector-BsULQggV.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
