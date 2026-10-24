import{R as t}from"./iframe-CQih25KR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D92DpTLx.js";import{R as l}from"./zIndexSlice-BBwd9R4A.js";import{C as x}from"./ComposedChart-D2Az0r5B.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxEKzzln.js";import{L as a}from"./Line-DKHN4FGO.js";import{X as c}from"./XAxis-DatML6Vr.js";import{T as g}from"./Tooltip-B629u-do.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DtKjJWj0.js";import"./Text-ByeKnFJN.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./pageBackground-B-dTuZL1.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0V9Q93e.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./dataEntryStyles-BMnqm0mo.js";import"./axisSelectors-gqm50JPH.js";import"./throttle-CYod_o09.js";import"./d3-scale-C8349dF6.js";import"./CartesianAxis-B8Q7lXls.js";import"./Layer-BzMCwaud.js";import"./types-NMZqXy0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCMHJsHG.js";import"./index-DY8NIj0D.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./activeStyles-BLa_G1fN.js";import"./useAnimationId-BuSk-bLT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwxPMwLi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bl37L_si.js";import"./tooltipContext-rhcrJiXk.js";import"./RegisterGraphicalItemId-BKvpbBB2.js";import"./ErrorBarContext-QTm2eq8O.js";import"./SetGraphicalItem-51m-LnYN.js";import"./getZIndexFromUnknown-Fh88Pu-X.js";import"./useEffectiveDataKey-BJYzr5Gr.js";import"./omit-D760ggAL.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BPpaKfS5.js";import"./step-BqUGYyr0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bf_gQQVU.js";import"./Dot-ZqJ7ot6M.js";import"./getRadiusAndStrokeWidthFromDot-F_yGfOhs.js";import"./useElementOffset-EGy64DcV.js";import"./uniqBy-DOqGPGpA.js";import"./iteratee-B3skCKTj.js";import"./Cross-CamwH1qB.js";import"./Sector-BJfIo3UI.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
