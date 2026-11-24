import{R as t}from"./iframe-DFEJf-6F.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Cx2H2wIk.js";import{R as l}from"./zIndexSlice-Bh4qmv0V.js";import{C as x}from"./ComposedChart-D1Kb8R-X.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CehlGihj.js";import{L as a}from"./Line-CoLcqSgq.js";import{X as c}from"./XAxis-DQsdb669.js";import{T as g}from"./Tooltip-fS_bZ-yd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./Label-DJktLpOl.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./throttle-t_Ovqcxg.js";import"./axisSelectors-mOjibS9Y.js";import"./d3-scale-tiUNr7pP.js";import"./CartesianAxis-DcDhI6Zy.js";import"./Layer-BocGZ-Qs.js";import"./types-BDYL0NFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CjcGVgxW.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./dataEntryStyles-3agXA2tK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkydH7xZ.js";import"./useAnimationId-CO4-0stH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./tooltipContext-BiBs8VgD.js";import"./ErrorBarContext-BaUlHsru.js";import"./activeStyles-DE7rNFoN.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./getZIndexFromUnknown-CcmNpfj2.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./omit-Djllq5nh.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BBakNZKq.js";import"./Curve-CKBXq4VL.js";import"./step-BD0nB0zO.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Bn0_DXo_.js";import"./Dot-3vV8DYVs.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./useElementOffset-BWm_b5s0.js";import"./uniqBy-CV4gXzpe.js";import"./iteratee-WJSBnlLa.js";import"./Cross-Dv1-Z6ov.js";import"./Sector-BYQ9JvD_.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
