import{R as t}from"./iframe-DsuaRm2b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-dn2GRGzH.js";import{R as l}from"./zIndexSlice-BHCK5tg8.js";import{C as x}from"./ComposedChart-C07yVNqj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-rZla8cdr.js";import{L as a}from"./Line-DtkCR5A2.js";import{X as c}from"./XAxis-DLqBMq0Q.js";import{T as g}from"./Tooltip-e9xtskO3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bg_SjTDz.js";import"./Text-7KEzSR95.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./throttle-CuCThFR3.js";import"./dataEntryStyles-CVVg9ITz.js";import"./axisSelectors-CXh7ZK0v.js";import"./d3-scale-D1FvEoQ3.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B7rLRibb.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./LabelList-B1g8Cfod.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dz3Crc0K.js";import"./useAnimationId-BDMFeBiK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./tooltipContext-DDBQkYgW.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./activeStyles-BEbyAFUN.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getZIndexFromUnknown-CpRDmSsj.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./omit-CmNACTB-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./Cross-CHnu3AiU.js";import"./Sector-jsLncyAA.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
