import{R as t}from"./iframe-C5Zmv3_Q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-iK8t4Zai.js";import{R as l}from"./zIndexSlice-C4av0-dC.js";import{C as x}from"./ComposedChart-DQmUib5w.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-M5JnW_M7.js";import{L as a}from"./Line-CPW9K2II.js";import{X as c}from"./XAxis-CXSd1JZe.js";import{T as g}from"./Tooltip-h6O9GZQi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-nDrE78J8.js";import"./Text-CCFi8jW2.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./throttle-D_vuQCXn.js";import"./axisSelectors-LAQsy88k.js";import"./d3-scale-AN13rbty.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cbn62-za.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./dataEntryStyles-BKf5w-lY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqOgBzLM.js";import"./useAnimationId-Dbt3XGZ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HLQ9J4sr.js";import"./tooltipContext-BWXm03D_.js";import"./ErrorBarContext-9P_gyWZq.js";import"./activeStyles-CRgGZhKT.js";import"./SetGraphicalItem-Bb8-L5uL.js";import"./getZIndexFromUnknown-BTUV7CxY.js";import"./useEffectiveDataKey-DifAuVlu.js";import"./omit-Dv_LNC98.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CazSWC5X.js";import"./step-D-ukyLTR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GlAtMEJD.js";import"./Dot-BoR4BuHa.js";import"./Symbols-CWRNkrAk.js";import"./symbol-B4pqWh0c.js";import"./getRadiusAndStrokeWidthFromDot-C3ICIzAo.js";import"./useElementOffset-Bvo80b_z.js";import"./uniqBy-4dpdqULc.js";import"./iteratee-BNZjisoW.js";import"./Cross-BgRtOIbM.js";import"./Sector-MSOin3JQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
