import{R as t}from"./iframe-BDPfsqdF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bl_BBErM.js";import{R as l}from"./zIndexSlice-BfcQE96w.js";import{C as x}from"./ComposedChart-D7JGKNin.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DUr_wZuL.js";import{L as a}from"./Line-fKw3Ma_7.js";import{X as c}from"./XAxis-D4_j-k4X.js";import{T as g}from"./Tooltip-DsDoEAPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CIaOlIjm.js";import"./Text-BNo_l2gi.js";import"./resolveDefaultProps-UXrhpxMr.js";import"./DOMUtils-DaHiW2kn.js";import"./ZIndexLayer-D5wXYtG3.js";import"./index-BQeH_1mA.js";import"./index-DhEcRTBz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C7NGCs8b.js";import"./throttle-DLGVq_fI.js";import"./axisSelectors-c7iT3Xqf.js";import"./d3-scale-B8DyPgUy.js";import"./CartesianAxis-BGQBH839.js";import"./Layer-irdZ2U7P.js";import"./types-DRfbQMuT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GMkNhND_.js";import"./index-Bojq0CZP.js";import"./index-ex-Pgi_h.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DUmM3uYA.js";import"./index-BRY97WZu.js";import"./CartesianChart-Do0DiZlo.js";import"./ZIndexPortal-kQXYrtt7.js";import"./CategoricalChart-BnbJl500.js";import"./LabelList-BClBWVcN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CavKlM0x.js";import"./useAnimationId-PJ8_CwxA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cyzjr61Z.js";import"./tooltipContext-Dz7KXKJa.js";import"./dataEntryStyles-RZhAuyPm.js";import"./ErrorBarContext-KG77bNmA.js";import"./activeStyles-BFWSM9RU.js";import"./SetGraphicalItem-Bfmt3udz.js";import"./getZIndexFromUnknown-l6RIBdQy.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-DsGW0DuD.js";import"./fillDefinitions-ZurvhtWc.js";import"./omit-PPoiSwxz.js";import"./isArguments-yB-y1yaH.js";import"./Curve-wYhnU7Gh.js";import"./step-BXNgbZXy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-1Kk_6r7U.js";import"./Dot-CDca1BfZ.js";import"./Symbols-DWB63jlf.js";import"./symbol-CTG-DGxK.js";import"./getRadiusAndStrokeWidthFromDot-Jl4t-yCo.js";import"./useElementOffset-8y_suHrr.js";import"./uniqBy-BVW2sC2D.js";import"./iteratee-C91la3m6.js";import"./Cross-CuhOk6PY.js";import"./Sector-DpHwGpqU.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
