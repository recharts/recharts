import{R as t}from"./iframe-CqOe7k5Y.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DEQnYc30.js";import{R as l}from"./zIndexSlice-HvZ_KFp3.js";import{C as x}from"./ComposedChart-BeSg73-5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-wsvdD2Nf.js";import{L as a}from"./Line-BAO_KFfa.js";import{X as c}from"./XAxis-BHc3UEw3.js";import{T as g}from"./Tooltip-WSmd3WjN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./Label-yQ-nD2jU.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./throttle-BawAsSGW.js";import"./axisSelectors-HXuL0A3L.js";import"./diverging-B6EefrnE.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C6U1x4NS.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./dataEntryStyles-CclxtIIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mBtSHpSc.js";import"./useAnimationId-_GPHqvCi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./tooltipContext-D9JNoTMB.js";import"./ErrorBarContext-CQfvj0jY.js";import"./activeStyles-DyQy4djd.js";import"./SetGraphicalItem-5gHOvcya.js";import"./getZIndexFromUnknown-DT-UApPJ.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./omit-UGBfM6EB.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Curve-C0AiDBmT.js";import"./step-C0xBjYaF.js";import"./path-BBMZd4YL.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./useElementOffset-BT23gI0j.js";import"./uniqBy-bwHS4C5O.js";import"./iteratee-BmCg4GfS.js";import"./Cross-Mf8tP6j1.js";import"./Sector-DS5Y07lN.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
