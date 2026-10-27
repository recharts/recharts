import{R as t}from"./iframe-FAdFbT6J.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-T_mO5jU8.js";import{R as l}from"./zIndexSlice-COO8R9lj.js";import{C as x}from"./ComposedChart-ByetWKbs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BSXujitS.js";import{L as a}from"./Line-jyNZb6sa.js";import{X as c}from"./XAxis-2xPTd-UO.js";import{T as g}from"./Tooltip-CRq_rlzM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-MEQSQEMP.js";import"./Text-Cndhy6VG.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./throttle-DmbGe_oo.js";import"./dataEntryStyles-CEjpbRUj.js";import"./axisSelectors-DjwIFZga.js";import"./d3-scale-CfdNPJMp.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8CA35TH.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./LabelList-BYdzk1TZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbbHCzWy.js";import"./useAnimationId-CiJHzCVR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./tooltipContext-BRDiEJW9.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./activeStyles-D7U9MU9g.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getZIndexFromUnknown-Dfm4DS3J.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./omit-DZlTO-Gm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DQIDgvYs.js";import"./step-DTM-27zI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./useElementOffset-CTPpQQlY.js";import"./uniqBy-CNFPVLtL.js";import"./iteratee-DmPtyNGM.js";import"./Cross-DtcmFape.js";import"./Sector-Dj1vgMvZ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
