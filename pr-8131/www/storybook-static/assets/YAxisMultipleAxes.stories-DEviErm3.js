import{R as t}from"./iframe-jmhe2Qk6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bwmry524.js";import{R as l}from"./zIndexSlice-C_QNUIlg.js";import{C as x}from"./ComposedChart-DDgeQ340.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B0_POE5j.js";import{L as a}from"./Line-CQCNhVyP.js";import{X as c}from"./XAxis-BmABHSTj.js";import{T as g}from"./Tooltip-DzY1CkoC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db1KZEia.js";import"./Text-CmetEc_4.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D0zNKA08.js";import"./throttle-DZINazP_.js";import"./axisSelectors-CTtb55NE.js";import"./d3-scale-_kmjLSGJ.js";import"./CartesianAxis-CTjd-a6A.js";import"./Layer-B39D7NeJ.js";import"./types-Cpf9ifaq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C_ACRdKM.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./LabelList-Dq0YgplD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuWi-3o9.js";import"./useAnimationId-Zg5v1vJq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./tooltipContext-CDJ_DWvW.js";import"./dataEntryStyles-CsSE3ak0.js";import"./ErrorBarContext-C2f99oDG.js";import"./activeStyles-sH1GlI3K.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getZIndexFromUnknown-40hh8wet.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./omit-DiBX4K-8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B9PMeVXe.js";import"./step-C3gp0-r4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpkFEdDf.js";import"./Dot-Oe3PKIgB.js";import"./Symbols-BFwKw-3i.js";import"./symbol-sHGxO5Ns.js";import"./getRadiusAndStrokeWidthFromDot-Ds0PjUPZ.js";import"./useElementOffset-CX9phfOZ.js";import"./uniqBy-CTEjb69M.js";import"./iteratee-Cf4iavbi.js";import"./Cross-i4Zfd8L2.js";import"./Sector-D33kKyng.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
