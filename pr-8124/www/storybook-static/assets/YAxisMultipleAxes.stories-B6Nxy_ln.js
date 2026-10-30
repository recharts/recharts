import{R as t}from"./iframe-SPJaGn0F.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Whjsv-c4.js";import{R as l}from"./zIndexSlice-nIWAtr6b.js";import{C as x}from"./ComposedChart-CmUNzOx5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BMPv6VPE.js";import{L as a}from"./Line-Q7YZR7MH.js";import{X as c}from"./XAxis-D91EJms1.js";import{T as g}from"./Tooltip-3etkXvz6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-COXn0L8P.js";import"./Text-BYUbuGtp.js";import"./resolveDefaultProps-DgTytEg2.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./throttle-Cb7coFKv.js";import"./axisSelectors-BV5QtOCC.js";import"./d3-scale-ChAd5Ihl.js";import"./CartesianAxis-D0rqelxZ.js";import"./Layer-GoN2yHWA.js";import"./types-DJ6_4iq2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DA_3WzAb.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./LabelList-BeGqiY0d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-UJSQ6vDA.js";import"./useAnimationId-d7QVaKqG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./tooltipContext-DxrbQih8.js";import"./dataEntryStyles-DAzBzzsr.js";import"./ErrorBarContext-CyoUsRnh.js";import"./activeStyles-BViWZA4B.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getZIndexFromUnknown-BMcA4aLi.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./fillDefinitions-CRqjOhTR.js";import"./omit-BjfPEdNU.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CQDBLSXd.js";import"./step-g9-z_5ZT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWJOXnL8.js";import"./Dot-CJO9q9fw.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./getRadiusAndStrokeWidthFromDot-DYuKOPnc.js";import"./useElementOffset-DwP8huJc.js";import"./uniqBy-P-x3YYna.js";import"./iteratee-CwlSc91y.js";import"./Cross-DeDV4AvO.js";import"./Sector-BuwgO7T2.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
