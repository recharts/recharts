import{R as t}from"./iframe-Cf4rQ-NM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CNqs_HAY.js";import{R as l}from"./zIndexSlice-DMD_kE2u.js";import{C as x}from"./ComposedChart-D9NfWs3n.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vVifBfZj.js";import{L as a}from"./Line-D7eG1rq4.js";import{X as c}from"./XAxis-BIvdIl6o.js";import{T as g}from"./Tooltip-CMjrj-7d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DJuA9Y4I.js";import"./Text-CI7nXg92.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./pageBackground-ja8baDve.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./axisSelectors-9PR0sTvr.js";import"./throttle-B2HUKrsu.js";import"./d3-scale-Lc72VcRD.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BteUr7Vj.js";import"./index-BsaRhs6B.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B34jhTte.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./tooltipContext-CEwAuDej.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getZIndexFromUnknown-NLBKsvnx.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./omit-7oCTXXs-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dr4UIWQ5.js";import"./step-Bcwq9xqU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C6euMq8T.js";import"./Dot-B2NKpqWj.js";import"./getRadiusAndStrokeWidthFromDot-DixpZj8q.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./Cross-t70eUuc2.js";import"./Sector-BHuTuRcM.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
