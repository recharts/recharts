import{R as t}from"./iframe-BKOly897.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B-vCHNYJ.js";import{R as l}from"./zIndexSlice-MuW0IoWE.js";import{C as x}from"./ComposedChart-DNIn-1lF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUOogcGr.js";import{L as a}from"./Line-D5arw7he.js";import{X as c}from"./XAxis-CAN01VgH.js";import{T as g}from"./Tooltip-DlABXhjR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BqeeWfBr.js";import"./Text-B-p-4nXu.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./throttle-Dj0bMbq4.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./axisSelectors-DAovfJtb.js";import"./d3-scale-FWOlMe5i.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BR-O-n81.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./LabelList-CHIFisD0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-dSQZJlx4.js";import"./useAnimationId-Dwkyu_pp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./tooltipContext-Dy1516kb.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./activeStyles-C5fI4Bwm.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getZIndexFromUnknown-D3BNFson.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./omit-60X9AB9Q.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DZlxAOiJ.js";import"./step-D0Rpy-Hs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mk-rZ28o.js";import"./Dot-fiFJQDUC.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./getRadiusAndStrokeWidthFromDot-B-_khl6D.js";import"./useElementOffset-D4wk1lFS.js";import"./uniqBy-QsHY--3m.js";import"./iteratee-C_CFKuDs.js";import"./Cross-C7tEJC1H.js";import"./Sector-sosRkgZY.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
