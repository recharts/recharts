import{R as t}from"./iframe-B6IWu9YI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-MTRfWgoi.js";import{R as l}from"./zIndexSlice-CiiKnRRR.js";import{C as x}from"./ComposedChart-7NLEhX0Q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DtJxtlCs.js";import{L as a}from"./Line-BZf0NlOt.js";import{X as c}from"./XAxis-Dlj0iAIW.js";import{T as g}from"./Tooltip-KfEfS0Ja.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DTgwgIlk.js";import"./Text-BO6nkoy7.js";import"./resolveDefaultProps-D5gBkMry.js";import"./ZIndexLayer-6PrGVGr8.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./throttle-BURJLM__.js";import"./axisSelectors-DNbDiKxI.js";import"./d3-scale-BnDY_Nfy.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ut8KRm06.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DojOoXFW.js";import"./useAnimationId-CU9aT4qK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./tooltipContext-BPoH_Fh4.js";import"./ErrorBarContext-DvofuvtM.js";import"./activeStyles-BITXl8mO.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./getZIndexFromUnknown-C22CLdSs.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./omit-BJqo31UA.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DmFDmFl9.js";import"./Curve-BwM0kF7u.js";import"./step-CBaC3nOj.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CU2VyTBL.js";import"./Dot-Cj5qq7RO.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./useElementOffset-toJRPtH1.js";import"./uniqBy-3fTL_ANn.js";import"./iteratee-DoKrSNie.js";import"./Cross-DpH30DLa.js";import"./Sector-RdamKlsZ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
